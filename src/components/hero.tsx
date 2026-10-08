import Image from "next/image";
import { profile } from "@/lib/data";
import { GolfPutt } from "@/components/golf-putt";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="max-w-xl text-center sm:text-left">
          <p className="mb-3 text-sm font-medium text-accent">
            {profile.eyebrow} · {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-muted">{profile.tagline}</p>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Industries I&apos;ve delivered in
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              {profile.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/80"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Download résumé
            </a>
            <a
              href="#experience"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              See experience
            </a>
          </div>
        </div>
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full ring-4 ring-accent-soft sm:h-44 sm:w-44">
          <Image
            src="/images/headshot.png"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 640px) 176px, 144px"
            className="object-cover"
          />
        </div>
      </div>
      <GolfPutt />
    </section>
  );
}
