# Travis Frye — Product Portfolio

A resume/portfolio site for Travis Frye, Product & Program Manager.

Live site: [travisfrye.dev](https://travisfrye.dev)

## Features

- Single-page layout: hero, about, experience, projects, and "how this site was built"
- Light/dark theme toggle (follows system preference, remembered across visits)
- Responsive nav with a mobile menu
- Downloadable resume PDF
- A hidden three-hole putting game in the hero (also reachable from the nav)
- Privacy-friendly page analytics via Vercel Analytics

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- [Vercel Analytics](https://vercel.com/docs/analytics)
- Deployed on [Vercel](https://vercel.com), with automatic builds on every push to `main`

## Project structure

```
src/
  app/          # layout, page, global styles, icons
  components/   # one file per section/UI piece (hero, nav, experience, putting game, …)
  lib/data.ts   # all site content: profile, experience, projects, build process
public/         # headshot and resume PDF
```

To update content, edit `src/lib/data.ts`. Most changes don't require touching components.

## How this was built

Planned and built with [Claude Code](https://claude.com/claude-code) — content structure, components, and design were directed and reviewed step by step, then shipped through a standard Git → GitHub → Vercel pipeline.

## Development

Requires Node.js 20.9 or later.

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
