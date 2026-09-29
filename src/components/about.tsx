import { profile, education, skillGroups } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        About
      </h2>
      <div className="mt-6 grid gap-12 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Education
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {education.map((item) => (
                <li key={item.degree}>
                  {item.degree} — {item.school}, {item.year}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
