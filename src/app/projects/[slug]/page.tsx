import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LiveDemo } from "@/components/live-demo";
import { projects, type CaseStudyBrief, type CaseStudySection, type Project } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.title} · Travis Frye`;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const others = projects.filter((p) => p.slug !== slug);

  return (
    <>
      <Nav />
      <main className="flex-1">
        {caseStudy.brief ? (
          <BriefArticle project={project} brief={caseStudy.brief} />
        ) : (
          <article className="mx-auto max-w-3xl px-6 pt-12 pb-16 sm:pt-16">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
            >
              <span aria-hidden="true">←</span> All projects
            </Link>

            <span className="mt-8 block w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {project.tag}
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{caseStudy.lede}</p>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {project.linkLabel} ↗
            </a>

            <dl className="mt-10 grid gap-x-8 gap-y-5 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-2">
              {caseStudy.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-foreground/90">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {caseStudy.sections.map((section) => (
              <Section key={section.heading} section={section} />
            ))}
          </article>
        )}

        {others.length > 0 && (
          <section className="mx-auto max-w-3xl border-t border-border px-6 py-16">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              More projects
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/projects/${other.slug}`}
                    className="block h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
                  >
                    <span className="text-xs font-medium text-accent">{other.tag}</span>
                    <span className="mt-2 block font-semibold">{other.title}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm text-muted">
                      Read case study <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

/* ---------- Exec-summary layout ---------- */

/** Renders ~~text~~ as a visible strikethrough. */
function WithStrike({ text }: { text: string }) {
  return text.split(/~~(.+?)~~/).map((part, i) =>
    i % 2 === 1 ? (
      <s key={i} className="decoration-accent decoration-2">
        {part}
      </s>
    ) : (
      part
    ),
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">{children}</h2>
  );
}

function BriefArticle({ project, brief }: { project: Project; brief: CaseStudyBrief }) {
  const { caseStudy } = project;
  const bleed = Boolean(brief.image);
  const showcase =
    brief.image ??
    (brief.showcaseImageFrom !== undefined ? caseStudy.sections[brief.showcaseImageFrom]?.image : undefined);
  const showcaseHeading = brief.image?.heading ?? "The real output";

  return (
    <article className="mx-auto max-w-4xl px-6 pt-12 pb-16 sm:pt-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden="true">←</span> All projects
      </Link>

      {/* Header */}
      <header className="mt-8">
        <span className="block w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          {project.tag}
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-xl leading-snug text-foreground/90 sm:text-2xl">
          {brief.headline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {project.linkLabel} ↗
          </a>
          <a href="#full-story" className="text-sm font-medium text-muted transition-colors hover:text-accent">
            Read the full story ↓
          </a>
        </div>

        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-4 text-sm">
          {caseStudy.facts.map((fact) => (
            <div key={fact.label} className="flex gap-2">
              <dt className="font-semibold text-muted">{fact.label}</dt>
              <dd className="text-foreground/90">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Stats */}
      <section aria-label="Results" className="mt-10">
        <dl
          className={`grid gap-px overflow-hidden rounded-2xl border border-border bg-border ${
            brief.stats.length === 4 ? "grid-cols-2 md:grid-cols-4" : "sm:grid-cols-3"
          }`}
        >
          {brief.stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5 sm:p-6">
              <dt className="sr-only">{stat.label.replace(/~~.+?~~\s*/g, "")}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-muted">
                  <WithStrike text={stat.label} />
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Problem / Solution / Impact */}
      <section aria-label="Summary" className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { label: "Problem", text: brief.problem },
          { label: "Solution", text: brief.solution },
          { label: "Impact", text: brief.impact },
        ].map((card, i) => (
          <div
            key={card.label}
            className={`rounded-2xl border p-6 ${
              i === 2 ? "border-accent/40 bg-accent-soft" : "border-border bg-surface"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{card.label}</p>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">{card.text}</p>
          </div>
        ))}
      </section>

      {/* Flow diagram */}
      {brief.flow && (
        <section className="mt-14">
          <Eyebrow>How it works</Eyebrow>
          <ol className="mt-5 grid gap-3 md:grid-cols-4 md:gap-0">
            {brief.flow.map((step, i) => {
              const last = i === brief.flow!.length - 1;
              return (
                <li key={step.label} className="relative flex md:items-stretch">
                  <div
                    className={`flex-1 rounded-2xl border p-5 ${
                      last ? "border-accent bg-accent-soft" : "border-border bg-surface"
                    }`}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                      {i + 1}
                    </span>
                    <p className="mt-3 font-semibold">{step.label}</p>
                    <p className="mt-1 text-sm leading-snug text-muted">{step.detail}</p>
                  </div>
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="hidden w-6 shrink-0 items-center justify-center text-lg text-accent md:flex"
                    >
                      →
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      )}

      {/* Bar chart */}
      {brief.bars && (
        <section className="mt-14">
          <Eyebrow>{brief.bars.title}</Eyebrow>
          <ul className="mt-5 space-y-5 rounded-2xl border border-border bg-surface p-5 sm:p-6">
            {brief.bars.rows.map((row) => (
              <li key={row.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold">{row.label}</span>
                  <span className="text-sm tabular-nums text-muted">
                    <span className="font-semibold text-accent">{row.value}</span> / {brief.bars!.max}
                  </span>
                </div>
                <div
                  className="mt-2 h-2.5 overflow-hidden rounded-full bg-accent-soft"
                  role="img"
                  aria-label={`${row.label}: ${row.value} out of ${brief.bars!.max}`}
                >
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${(row.value / brief.bars!.max) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted">{row.note}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Showcase image */}
      {showcase && (
        <section className="mt-14">
          <Eyebrow>{showcaseHeading}</Eyebrow>
          <figure className="mt-5">
            <div
              className={
                brief.image?.frameless
                  ? ""
                  : `overflow-hidden rounded-2xl border border-border shadow-sm ${bleed ? "" : "bg-white p-3 sm:p-5"}`
              }
            >
              <Image
                src={showcase.src}
                alt={showcase.alt}
                width={showcase.width}
                height={showcase.height}
                quality={brief.image?.quality}
                sizes="(min-width: 1024px) 848px, 100vw"
                className={`h-auto w-full ${brief.image?.darkSrc ? "dark:hidden" : ""}`}
              />
              {brief.image?.darkSrc && (
                <Image
                  src={brief.image.darkSrc}
                  alt={showcase.alt}
                  width={showcase.width}
                  height={showcase.height}
                  quality={brief.image.quality}
                  sizes="(min-width: 1024px) 848px, 100vw"
                  className="hidden h-auto w-full dark:block"
                />
              )}
            </div>
            {showcase.caption && (
              <figcaption className="mt-3 text-center text-xs text-muted">{showcase.caption}</figcaption>
            )}
          </figure>
        </section>
      )}

      {/* Live demo (wide screens only; phones use the project link) */}
      {brief.demo && (
        <section className="mt-14 hidden md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-12">
          <div>
            <Eyebrow>Try it here</Eyebrow>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{brief.demo.heading}</h3>
            <p className="mt-3 leading-relaxed text-muted">{brief.demo.body}</p>
          </div>
          <LiveDemo src={brief.demo.src} title={brief.demo.title} />
        </section>
      )}

      {/* Before / after */}
      {brief.shift && (
        <section className="mt-14">
          <Eyebrow>{brief.shift.title}</Eyebrow>
          <ul className="mt-5 space-y-3">
            {brief.shift.rows.map((row) => (
              <li
                key={row.before}
                className="grid items-center gap-2 rounded-2xl border border-border bg-surface p-4 sm:grid-cols-[1fr_auto_1.4fr] sm:gap-4 sm:px-5"
              >
                <p className="text-sm text-muted line-through decoration-muted/50">{row.before}</p>
                <span aria-hidden="true" className="hidden text-accent sm:block">→</span>
                <p className="text-sm font-medium">{row.after}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* How I work */}
      {brief.highlights && (
        <section className="mt-14">
          <Eyebrow>{brief.highlightsTitle ?? "How I worked"}</Eyebrow>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {brief.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-surface p-6">
                <p className="font-semibold">{h.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      <section className="mt-14">
        <Eyebrow>Skills on display</Eyebrow>
        <ul className="mt-4 flex flex-wrap gap-2">
          {brief.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/90"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Full story, collapsed */}
      <section id="full-story" className="mt-16 border-t border-border pt-12">
        <h2 className="text-2xl font-semibold tracking-tight">The full story</h2>
        <p className="mt-2 text-sm text-muted">The details behind the summary. Open any section.</p>
        <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {caseStudy.sections.map((section) => (
            <details key={section.heading} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium transition-colors hover:text-accent sm:px-6 [&::-webkit-details-marker]:hidden">
                {section.heading}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-6 sm:px-6">
                <Section section={section} nested />
              </div>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}

/* ---------- Long-form section ---------- */

function Section({ section, nested = false }: { section: CaseStudySection; nested?: boolean }) {
  return (
    <section className={nested ? "" : "mt-14"}>
      {!nested && <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>}

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-relaxed text-foreground/90">
          {paragraph}
        </p>
      ))}

      {section.image && (
        <figure className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-white p-3 sm:p-5">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              sizes="(min-width: 768px) 720px, 100vw"
              className="h-auto w-full"
            />
          </div>
          {section.image.caption && (
            <figcaption className="mt-3 text-center text-xs text-muted">
              {section.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      {section.table && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface">
              <tr>
                {section.table.columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted sm:px-5"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map(([first, second]) => (
                <tr key={first} className="border-t border-border align-top">
                  <td className="w-2/5 px-4 py-3 font-medium sm:px-5">{first}</td>
                  <td className="px-4 py-3 leading-relaxed text-muted sm:px-5">{second}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.items && (
        <ul className="mt-6 space-y-4">
          {section.items.map((item) => (
            <li key={item.label} className="border-l-2 border-accent/40 pl-4">
              <p className="font-medium">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      )}

      {section.callout && (
        <blockquote className="mt-6 rounded-2xl bg-accent-soft p-6 text-base leading-relaxed text-foreground/90">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            {section.calloutLabel ?? "Problem statement"}
          </p>
          {section.callout}
        </blockquote>
      )}
    </section>
  );
}
