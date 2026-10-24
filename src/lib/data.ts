export const profile = {
  name: "Travis Frye",
  tagline: "Product and program leader who gets up to speed fast in new domains, clears the path for teams, and turns complex work into results leadership can see.",
  eyebrow: "Product · Program · Delivery",
  location: "Indianapolis, IN",
  email: "travisfrye317@gmail.com",
  linkedin: "https://www.linkedin.com/in/travfrye/",
  resumeUrl: "/TravisFryeResume.pdf",
  industries: ["Auto & Disability Insurance", "Optometry Operations", "Health Analytics", "Specialty Care", "Event Tech", "AgTech"],
  bio: [
    "I've spent over a decade in product, program, and project roles, and the thread through all of it is delivery: turning messy, ambiguous problems into shipped work and making sure teams have what they need to move fast.",
    "I started out adjusting auto and disability insurance claims, and I've since delivered in optometry operations, health analytics, specialty care, live events, and now agtech at IntelinAir. Every move meant learning a new domain quickly. I dig into the customer, the data, and the people who know the space, and I get productive fast. A new industry doesn't slow me down.",
    "I'm a servant leader at heart. I absorb operational overhead so teams can focus on building. That means running Agile without the bloat, consolidating tools, and turning complex work into clear KPIs leadership can actually decide on.",
    "I also like building things myself. I made this site, plus a full website for a friend launching his own business, using AI tools along the way. Outside of work, I'm a dad to three kids, which keeps me busy and humble, and when I can sneak away, you'll find me on a golf course chasing a better round than my last one. ⛳",
  ],
};

export type ExperienceEntry = {
  company: string;
  location: string;
  years: string;
  blurb: string;
  roles: { title: string; years: string }[];
  highlights: string[];
};

export const featuredExperience: ExperienceEntry[] = [
  {
    company: "IntelinAir",
    location: "Indianapolis, IN",
    years: "2026 – Present",
    blurb:
      "Agricultural technology company providing automated crop intelligence and data analytics to farmers and agronomists.",
    roles: [{ title: "Product Manager", years: "2026 – Present" }],
    highlights: [],
  },
  {
    company: "Lantern",
    location: "Indianapolis, IN",
    years: "2024 – 2026",
    blurb:
      "Connects members with specialty care that gets them back to living life, back to good health, back to their families and back to work.",
    roles: [{ title: "Product Operations", years: "2024 – 2026" }],
    highlights: [
      "Owned end-to-end product roadmap management by launching Aha! Roadmaps and an Ideas Portal, consolidating legacy tools and reducing planning friction across 5+ product teams.",
      "Led an overhaul of release communication workflows with automated documentation and publishing, cutting cycle time by 50% and improving stakeholder visibility.",
      "Partnered with leadership to define and launch Lantern's first Product career ladder and competency matrix, enabling more objective performance and promotion decisions.",
      "Built and maintained executive KPI reporting (Roadmap Health, Backlog Hygiene, Unplanned Work Impact) for consistent department-level visibility.",
      "Led monthly Product Demo sessions and quarterly planning, communicating vision and delivery progress across R&D, Sales, and Customer Success.",
    ],
  },
  {
    company: "Cisco-Webex Events (Socio)",
    location: "Indianapolis, IN",
    years: "2021 – 2024",
    blurb:
      "An all-in-one event management platform to host in-person, hybrid, and virtual events.",
    roles: [
      { title: "Senior Product Manager", years: "2022 – 2024" },
      { title: "Product Manager", years: "2021 – 2022" },
    ],
    highlights: [
      "Implemented collaboration tools for Speaker and Sponsor management, driving 5 customer renewals within 7 days of launch and 3,000+ collaborations in the first 2 months.",
      "Introduced Privacy and Compliance settings for attendee data, unlocking an additional $1,061,062.50 in Enterprise revenue, exceeding targets.",
      "Designed a custom Lobby feature centralizing event information for planners, reaching 78% adoption within 6 months.",
      "Developed embeddable content widgets adopted by 75%+ of small-medium events within 6 months, reducing content duplication.",
      "Integrated AI-powered closed captions and translations into all video content, achieving 94% adoption within 6 months — outperforming third-party add-ons.",
      "Built a direct payment flow for the exhibitor lead retrieval tool, generating $600K+ in sales in 12 months while saving CSM/Support teams 10–15 hours per week.",
    ],
  },
  {
    company: "Springbuk",
    location: "Indianapolis, IN",
    years: "2017 – 2021",
    blurb:
      "A Health Intelligence Platform that provides actionable insights and direction from real health data.",
    roles: [
      { title: "Product Manager", years: "2020 – 2021" },
      { title: "Program Manager", years: "2019 – 2020" },
      { title: "Sr. Project Manager", years: "2017 – 2019" },
    ],
    highlights: [
      "Worked cross-functionally with engineering, UX, and stakeholders to build products, execute strategy, and drive business outcomes.",
      "Managed pilot partnerships and 3rd-party API integrations, resulting in two new growth channels and $100K+ in new business.",
      "Facilitated Sprint ceremonies — planning, daily scrums, retrospectives, stakeholder meetings, and demos.",
    ],
  },
];

export const earlierCareer = [
  { company: "EyeCare Prime (CooperVision)", title: "Project Manager / Project Coordinator / Client Success Manager", years: "2014 – 2017" },
  { company: "Hartford Insurance Group", title: "Disability Claims Adjudicator (STD+LTD)", years: "2012 – 2014" },
  { company: "State Farm Insurance", title: "Auto Claims Adjuster (Complex Auto)", years: "2011 – 2012" },
];

export const education = [
  { degree: "B.S. in Public Affairs (High Distinction)", school: "Indiana University", year: "2009" },
  { degree: "A.S. in Business Administration", school: "Ivy Tech State College", year: "2007" },
];

export const skillGroups = [
  {
    title: "Product & Strategy",
    skills: [
      "Product Roadmapping",
      "Product Strategy & Vision",
      "Cross-functional Leadership",
      "Executive Stakeholder Communication",
      "Program & Delivery Management",
      "KPI & Reporting Systems",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Aha! Roadmaps", "Jira", "Confluence", "Pendo", "Amplitude", "Figma", "Miro", "SQL"],
  },
  {
    title: "AI Tools",
    skills: ["Claude Code", "ChatGPT", "Cursor"],
  },
];

export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  items?: { label: string; detail: string }[];
  table?: { columns: [string, string]; rows: [string, string][] };
  callout?: string;
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  url: string;
  linkLabel: string;
  caseStudy: {
    lede: string;
    facts: { label: string; value: string }[];
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    slug: "family-week-ahead",
    title: "Family Week Ahead",
    tag: "Personal Project · AI Agent",
    summary:
      "A scheduled AI agent that reconciles my family's scattered schedule sources (a paper calendar, league feeds, school apps) and emails a Sunday briefing with one-tap links to add what's missing, giving my wife and me a digital calendar we can both trust. It started as the wrong problem, and discovery fixed that.",
    url: "https://github.com/TeeFrye/family-week-ahead",
    linkLabel: "View on GitHub",
    caseStudy: {
      lede:
        "A scheduled AI agent that reconciles a family's scattered schedule sources and emails a Sunday-morning \"Week Ahead\" briefing, with one-tap links to add anything missing to the shared calendar. The goal: a digital calendar my wife and I can both trust and easily add to. Built in public, with the product thinking documented as carefully as the code.",
      facts: [
        { label: "Role", value: "Product owner, researcher, and builder" },
        { label: "Timeline", value: "March 2026 – present" },
        { label: "Built with", value: "Claude scheduled agent · Google Calendar, Gmail & Drive · iCal feeds" },
        { label: "Status", value: "Running live every Sunday" },
      ],
      sections: [
        {
          heading: "The problem, twice",
          paragraphs: [
            "Our family's schedule runs on a handwritten calendar in the kitchen. My wife keeps it, and it's our source of truth. But we'd both long wanted a digital calendar too: one we could check from anywhere, trust to be complete, and add to without friction.",
            "The first plan (v1, March 2026) was simple: photograph the paper calendar and have AI turn it into Google Calendar events.",
            "Before automating anything, I interviewed my other user (my wife) and looked at the real data. The problem turned out to be bigger than one calendar, and most of my starting assumptions were wrong.",
          ],
          table: {
            columns: ["What I assumed (v1)", "What was actually true (v2)"],
            rows: [
              ["The gap is paper → digital", "The gap is five or more sources that never get cross-checked"],
              ["It's my problem", "We both miss things: spirit days, tests, schedule changes"],
              ["School info arrives by email", "Almost none does. It lives in ClassDojo notifications and GroupMe"],
              ["Sports schedules need to be read off the wall", "The league publishes iCal feeds: structured data, no AI needed"],
              ["Sync events automatically", "We want to review before anything lands on the shared calendar"],
              ["The output is a calendar", "The output is a weekly briefing. The calendar is one place it can write to."],
            ],
          },
          callout:
            "Family schedule information arrives through many channels, each owned by a different person or app, and nobody reconciles them. Things fall through the cracks not because nobody wrote them down, but because nobody compared notes.",
        },
        {
          heading: "What it does",
          paragraphs: [
            "Every Sunday morning a cloud agent reads every source (the kitchen calendar photo, league iCal feeds, a shared Family Inbox in Drive and Gmail, and last week's saved state), compares them against our shared Google calendar, and emails a briefing to both of us. It proposes, and we decide.",
          ],
          items: [
            { label: "🔎 Call-outs", detail: "Double-bookings, handoffs under 45 minutes, games that moved or vanished from the feed, crossed-out paper entries still on Google, practices during school breaks, unknown abbreviations, and a reminder when the kitchen photo is stale." },
            { label: "📅 This week", detail: "Day by day. Anything not yet on Google has a ➕ Add link that opens a pre-filled event." },
            { label: "👀 Next week & further out", detail: "Next week in full, then breaks and midterms up to five weeks ahead." },
            { label: "Source footer", detail: "Which sources were read and how fresh each one is." },
          ],
        },
        {
          heading: "Key decisions",
          table: {
            columns: ["Decision", "Why"],
            rows: [
              ["Propose, don't write", "A bad read should never put junk on a calendar we both need to trust. One tap to accept keeps us in control."],
              ["One capture inbox instead of per-app integrations", "ClassDojo and GroupMe have no usable integration. One habit (\"if you see it, send it to the Family Inbox\") covers them, plus flyers and texts, with no API work or terms-of-service risk."],
              ["Read feeds directly, don't subscribe", "Google refreshes subscribed feeds slowly. Reading them lets the agent detect changes through stable game IDs."],
              ["Images → Drive, text → Gmail", "Tested: the Gmail connector can't read attachments, and Drive OCRs screenshots cleanly."],
              ["State facts, no guesses", "No \"buy a gift?\" when the agent lacks context. Unknown abbreviations are flagged, never interpreted."],
              ["Private data lives outside the repo", "Names, calendar IDs, feed URLs, and weekly state sit in a private Drive folder. The public repo holds only the method."],
            ],
          },
        },
        {
          heading: "How it got here",
          items: [
            { label: "Validate AI extraction (no code)", detail: "Claude read a photo of the handwritten calendar: every entry correct, kids kept separate, and an unknown abbreviation flagged instead of guessed." },
            { label: "Refine the prompt", detail: "Tested on two months of real calendar. It treated crossed-out entries as removed and matched differently worded duplicates across sources." },
            { label: "Validate every input by hand", detail: "Each source got a manual test before anything was scheduled. Two failed (Gmail attachments, images inside PDFs), and both changed the design." },
            { label: "Iterate with the real readers", detail: "Five test sends in one evening, each changed by feedback: invisible buttons became plain links, helper suggestions were cut, and the agent now re-checks the calendar right before sending." },
            { label: "Run it live", detail: "A scheduled Sunday-morning cloud routine with a private config and a weekly state file. Next: two weeks of live runs, measuring the items it catches that we would have missed." },
          ],
        },
        {
          heading: "Early results",
          items: [
            { label: "10 of 12", detail: "proposed events were added to the calendar straight from the first test email." },
            { label: "8 games", detail: "missing from Google were found in the league feed on the first manual check, including one that overlapped a party." },
            { label: "5 versions", detail: "of the briefing in one evening, each driven by a concrete reaction from its actual reader." },
          ],
        },
        {
          heading: "What I'm learning",
          items: [
            { label: "Discovery beats building", detail: "The v1 plan was a well-built answer to the wrong question. Twenty minutes of questions and one look at real data reframed it." },
            { label: "Validate inputs before automating", detail: "Testing every source by hand surfaced two failures before they could become production bugs." },
            { label: "The best integration is sometimes a habit", detail: "One capture rule beat four app integrations." },
            { label: "Keep humans in the loop where trust is fragile", detail: "A shared family calendar is high-trust, so proposals beat automation there." },
            { label: "Cut what doesn't work quickly", detail: "An iOS share-sheet shortcut hit a platform wall, so it's parked. A slightly clunkier path that works beats a slick one that doesn't." },
          ],
        },
      ],
    },
  },
  {
    slug: "mj-custom-clubs",
    title: "MJ Custom Clubs",
    tag: "Client Project",
    summary:
      "A friend was opening a custom golf club fitting shop and was stuck standing up a site himself. I built and launched the full site, with a coming-soon gate live now and the rest of the site built underneath, ready to flip on.",
    url: "https://mjcustomclubs.com/",
    linkLabel: "View live site",
    caseStudy: {
      lede:
        "A friend was striking out on his own, opening a custom golf club fitting shop this November, and was stuck trying to stand up a site himself. I built and launched the full site so he could focus on opening the shop.",
      facts: [
        { label: "Role", value: "Builder and launch owner" },
        { label: "Client", value: "MJ Custom Clubs, Indianapolis" },
        { label: "Built with", value: "Claude Code · Next.js · Tailwind CSS · Vercel" },
        { label: "Status", value: "Coming-soon gate live; full site ready to launch" },
      ],
      sections: [
        {
          heading: "The ask",
          paragraphs: [
            "He needed a credible web presence before opening day: something customers could find now, plus a full site with services, pricing, and booking ready the moment the doors opened.",
          ],
        },
        {
          heading: "Who owned what",
          paragraphs: [
            "Design and content decisions were his. Execution, build, and launch were mine. Keeping that line clear meant he never had to think about code, and I never had to guess what his brand should say.",
          ],
        },
        {
          heading: "What I shipped",
          items: [
            { label: "Coming-soon gate", detail: "Live now at mjcustomclubs.com, so the business is findable before launch." },
            { label: "The full site, built underneath", detail: "Home, About, Services, Pricing, and Contact pages, with fitting packages and a Founders Club offer, ready to switch on." },
            { label: "Launch basics", detail: "Custom domain, canonical URLs, sitemap, robots rules, social previews, and web analytics." },
            { label: "A handoff he can maintain", detail: "A plain-language README that maps \"what you want to change\" to the file it lives in, plus how to preview a change and roll back a bad deploy." },
          ],
        },
        {
          heading: "Why it matters",
          paragraphs: [
            "It's a small project with a real customer, a hard date, and someone else's business on the line. The same skills I use at work applied here: get clear on who decides what, ship something useful early, and leave the owner able to run it without me.",
          ],
        },
      ],
    },
  },
  {
    slug: "this-portfolio",
    title: "This Portfolio Site",
    tag: "Personal Project",
    summary:
      "Planned, built, and deployed with Claude Code, from resume content to a working Next.js site, version-controlled on GitHub and shipped to Vercel.",
    url: "https://github.com/TeeFrye/travis-frye-portfolio",
    linkLabel: "View source",
    caseStudy: {
      lede:
        "Planned, built, and deployed with Claude Code, from resume content to a working Next.js site, version-controlled on GitHub and shipped to Vercel. The site is part of the pitch.",
      facts: [
        { label: "Role", value: "Product owner and builder" },
        { label: "Built with", value: "Claude Code · Next.js · TypeScript · Tailwind CSS v4 · Vercel" },
        { label: "Status", value: "Live, deployed on every push" },
      ],
      sections: [
        {
          heading: "The approach",
          paragraphs: [
            "I planned the content and structure, then used Claude Code to build it, reviewing and directing every step from scaffold to deploy. It's a working example of how I use AI tools day to day: as leverage, not autopilot.",
          ],
        },
        {
          heading: "Details worth a look",
          items: [
            { label: "Light and dark themes", detail: "Follows your system setting, with a toggle that remembers your choice." },
            { label: "Mobile-first navigation", detail: "A dedicated mobile menu, and LinkedIn links that open in the native app on phones." },
            { label: "A hidden putting game", detail: "Tap the green in the hero (or the ⛳ in the nav) for a three-hole round. Its code only downloads when someone opens it." },
            { label: "Case-study pages", detail: "Each project gets its own page, generated at build time from one data file." },
          ],
        },
      ],
    },
  },
];

export const buildProcess = [
  {
    label: "Plan & Build",
    detail:
      "Claude Code — an AI coding agent I directed step by step: reviewing content, structure, and every line before it shipped.",
  },
  {
    label: "Framework",
    detail: "Next.js, TypeScript, and Tailwind CSS v4.",
  },
  {
    label: "Version Control",
    detail: "Git, hosted on GitHub — public repo linked above.",
  },
  {
    label: "Hosting & CI/CD",
    detail: "Deployed on Vercel, with automatic builds on every push.",
  },
];
