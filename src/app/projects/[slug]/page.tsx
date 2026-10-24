import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { projects, type CaseStudySection } from "@/lib/data";

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

function Section({ section }: { section: CaseStudySection }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-relaxed text-foreground/90">
          {paragraph}
        </p>
      ))}

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
            Problem statement
          </p>
          {section.callout}
        </blockquote>
      )}
    </section>
  );
}
