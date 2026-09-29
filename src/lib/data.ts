export const profile = {
  name: "Travis Frye",
  tagline: "Product Manager who loves building great products and experiences that solve real problems and deliver real value — for customers and users alike.",
  location: "Indianapolis, IN",
  email: "travisfrye317@gmail.com",
  linkedin: "https://www.linkedin.com/in/travfrye/",
  resumeUrl: "/TravisFryeResume.pdf",
  bio: [
    "I'm a product manager with a decade of experience turning ambiguous problems into shipped outcomes — from insurance claims and live events to health intelligence and, now, agtech at IntelinAir.",
    "I've owned roadmaps end-to-end, launched AI-powered features that outperformed third-party alternatives, and built the operating rhythm — KPI reporting, career ladders, release processes — that helps product teams scale.",
    "I also build things myself. This site, and a full small-business website for a friend launching his own company, were both shipped with AI tools in the loop.",
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
    company: "Cisco-Webex Events",
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
      "Agile / Scrum Facilitation",
      "KPI & Reporting Systems",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Aha! Roadmaps", "Jira", "Confluence", "Pendo", "Amplitude", "SQL"],
  },
  {
    title: "AI Tools",
    skills: ["Claude Code", "ChatGPT", "Cursor"],
  },
];

export const projects = [
  {
    title: "MJ Custom Clubs",
    tag: "Client Project",
    description:
      "A friend was striking out on his own — opening a custom golf club fitting shop this November — and was stuck trying to stand up a site himself. I built and launched the full site: a coming-soon gate live now, with pricing, appointment booking, and the rest of the site fully built underneath, ready to flip on. Design and content decisions were his; execution, build, and launch were mine.",
    url: "https://mjcustomclubs.com/",
    linkLabel: "View live site",
  },
  {
    title: "This Portfolio Site",
    tag: "Personal Project",
    description:
      "Planned, built, and deployed with Claude Code — from resume content to a working Next.js site, version-controlled on GitHub and shipped to Vercel.",
    url: "https://github.com/TeeFrye/travis-frye-portfolio",
    linkLabel: "View source",
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
