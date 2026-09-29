import { buildProcess } from "@/lib/data";

export function BuiltWith() {
  return (
    <section id="built-with" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        How this site was built
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/90">
        This site is part of the pitch. I planned the content and structure, then
        used Claude Code to build it — reviewing and directing every step from
        scaffold to deploy. It's a working example of how I use AI tools day to
        day: as leverage, not autopilot.
      </p>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        {buildProcess.map((step) => (
          <div key={step.label} className="rounded-2xl border border-border bg-surface p-6">
            <dt className="text-xs font-semibold uppercase tracking-widest text-muted">
              {step.label}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
              {step.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
