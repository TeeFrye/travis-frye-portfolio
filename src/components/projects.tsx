import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {project.tag}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              {project.linkLabel}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
