# Travis Frye — Product & Program Manager

The source for my portfolio site: who I am, where I've delivered, and case studies of things I've built.

**Live site:** [travisfrye.dev](https://www.travisfrye.dev)

I've spent over a decade in product, program, and project roles across insurance, optometry, health analytics, specialty care, event tech, and agtech. This site is part of the pitch: I planned it, wrote it, and built it with Claude Code, and it ships through the same Git → GitHub → Vercel pipeline a product team would use.

## Case studies

| Project | What it shows |
| --- | --- |
| [Family Week Ahead](https://www.travisfrye.dev/projects/family-week-ahead) | Discovery that reframed the problem, an AI agent running live every Sunday, and results from real weekly briefings. Source: [TeeFrye/family-week-ahead](https://github.com/TeeFrye/family-week-ahead) |
| [MJ Custom Clubs](https://www.travisfrye.dev/projects/mj-custom-clubs) | A real client, a hard launch date, and a site live two months before the shop opened, which helped land equipment manufacturers |
| [This Portfolio Site](https://www.travisfrye.dev/projects/this-portfolio) | How I use AI tools day to day: as leverage, not autopilot |

## Features

- Home page with hero, about, experience, projects, and "how this site was built"
- A case-study page for each project (`/projects/<slug>`), generated at build time from one data file
- Case-study sections built from paragraphs, tables, highlight lists, callouts, and screenshots
- Light/dark theme toggle (follows system preference, remembered across visits)
- Responsive nav with a mobile menu
- Downloadable resume PDF
- A hidden three-hole putting game in the hero (also reachable from the ⛳ in the nav)
- Privacy-friendly page analytics via Vercel Analytics

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- [Vercel Analytics](https://vercel.com/docs/analytics)
- Deployed on [Vercel](https://vercel.com), with automatic builds on every push to `main`

## Project structure

```
src/
  app/                # layout, home page, global styles, icons
    projects/[slug]/  # case-study page, one per project
  components/         # one file per section/UI piece (hero, nav, experience, putting game, …)
  lib/data.ts         # all site content: profile, experience, projects, build process
public/
  images/             # headshot and case-study screenshots
  TravisFryeResume.pdf
```

To update content, edit `src/lib/data.ts`. Most changes don't require touching components.

To add a project, add an entry to `projects` in `src/lib/data.ts` with a unique `slug` and a short `shareSummary` for its link preview card. It gets a card on the home page and its own case-study page automatically. Each case-study section can include `paragraphs`, `items`, a two-column `table`, an `image` (with `width`, `height`, `alt`, and an optional `caption`), and a `callout` (labeled "Problem statement" unless `calloutLabel` says otherwise).

Screenshots of real data (emails, calendars) are redacted before they're committed: names, schools, locations, and email headers are blurred or cropped out.

## How this was built

Planned and built with [Claude Code](https://claude.com/claude-code). I directed and reviewed the content structure, components, and design step by step, then shipped through a standard Git → GitHub → Vercel pipeline. Changes are previewed locally before they're pushed live.

## Development

Requires Node.js 20.9 or later (Node 24 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```
