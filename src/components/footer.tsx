import { profile } from "@/lib/data";
import { ExternalLink } from "./external-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </h2>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s talk about how I can help your product team.
        </h3>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <ExternalLink
            href={profile.linkedin}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </ExternalLink>
          <a
            href={profile.resumeUrl}
            download
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Download résumé
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {profile.name}. {profile.location}.
          </span>
          <span>Built with Claude Code · Next.js · Vercel</span>
        </div>
      </div>
    </footer>
  );
}
