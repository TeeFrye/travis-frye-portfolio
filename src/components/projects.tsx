import Link from "next/link";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {project.tag}
            </span>
            <h3 className="mt-4 text-lg font-semibold">
              <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
                {project.title}
              </Link>
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-accent transition-opacity hover:opacity-80"
              >
                Read case study
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                {project.linkLabel} ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
