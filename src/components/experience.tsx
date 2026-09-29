import { featuredExperience, earlierCareer } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        Experience
      </h2>

      <div className="mt-8 space-y-10">
        {featuredExperience.map((entry) => (
          <div
            key={entry.company}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold">{entry.company}</h3>
              <span className="text-sm text-muted">{entry.location}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{entry.blurb}</p>

            <div className="mt-4 space-y-1">
              {entry.roles.map((role) => (
                <div
                  key={role.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm"
                >
                  <span className="font-medium text-accent">{role.title}</span>
                  <span className="text-muted">{role.years}</span>
                </div>
              ))}
            </div>

            {entry.highlights.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                {entry.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
          Earlier career
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {earlierCareer.map((role) => (
            <li key={role.company} className="flex flex-wrap justify-between gap-x-4">
              <span>
                <span className="text-foreground/80">{role.company}</span> — {role.title}
              </span>
              <span>{role.years}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
