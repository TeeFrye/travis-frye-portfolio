/** Canonical site URL, used for metadata, the sitemap, and preview cards. */
export const siteUrl = "https://www.travisfrye.dev";

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
    "I also like building things myself. Using AI tools, I built this site, a full website for a friend launching his own business, and an AI agent that sends my family a schedule briefing every Sunday morning. Outside of work, I'm a dad to three kids, which keeps me busy and humble, and when I can sneak away, you'll find me on a golf course chasing a better round than my last one. ⛳",
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
      "Introduced Privacy and Compliance settings for attendee data, unlocking $1M+ in additional Enterprise revenue, exceeding targets.",
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
    skills: ["Claude Code", "AI Agents", "Prompt Design", "ChatGPT", "Cursor"],
  },
];

export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  items?: { label: string; detail: string }[];
  table?: { columns: [string, string]; rows: [string, string][] };
  callout?: string;
  calloutLabel?: string;
  image?: { src: string; alt: string; width: number; height: number; caption?: string };
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  /** One or two short sentences for the social preview card. */
  shareSummary: string;
  url: string;
  linkLabel: string;
  caseStudy: {
    lede: string;
    facts: { label: string; value: string }[];
    /** Optional exec-summary layout. When present, the page leads with it and the sections collapse into "The full story". */
    brief?: CaseStudyBrief;
    sections: CaseStudySection[];
  };
};

export type CaseStudyBrief = {
  /** One sentence: the value, in plain words. */
  headline: string;
  stats: { value: string; label: string }[];
  problem: string;
  solution: string;
  impact: string;
  /** Left-to-right steps for the "How it works" diagram. */
  flow?: { label: string; detail: string }[];
  /** Index into sections whose image is shown in the brief. */
  showcaseImageFrom?: number;
  /** A screenshot shown in the brief, edge to edge. Takes precedence over showcaseImageFrom. */
  image?: {
    src: string;
    /** Optional version shown in dark mode. */
    darkSrc?: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
    heading?: string;
    /** No border or rounded box, for transparent images. */
    frameless?: boolean;
    /** Next.js image quality (75 or 90). */
    quality?: number;
  };
  /** A live, embedded version of the project, shown after the image on wide screens. */
  demo?: { src: string; title: string; heading: string; body: string };
  shift?: { title: string; rows: { before: string; after: string }[] };
  /** Horizontal bar chart, e.g. assessment scores. */
  bars?: { title: string; max: number; rows: { label: string; value: number; note: string }[] };
  highlights?: { title: string; detail: string }[];
  /** Defaults to "How I worked". */
  highlightsTitle?: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    slug: "family-week-ahead",
    title: "Family Week Ahead",
    tag: "Personal Project · AI Agent",
    summary:
      "A scheduled AI agent that reconciles my family's scattered schedule sources (a paper calendar, league feeds, ClassDojo, school emails) and emails a Sunday briefing with one-tap links to add what's missing, giving my wife and me a digital calendar we can both trust. It started as the wrong problem, and discovery fixed that.",
    shareSummary:
      "An AI agent that reconciles my family's scattered schedules and emails us a Sunday briefing. Live every week since October 2026.",
    url: "https://github.com/TeeFrye/family-week-ahead",
    linkLabel: "View on GitHub",
    caseStudy: {
      lede:
        "A scheduled AI agent that reconciles a family's scattered schedule sources and emails a Sunday-morning \"Week Ahead\" briefing, with one-tap links to add anything missing to the shared calendar. The goal: a digital calendar my wife and I can both trust and easily add to. Built in public, with the product thinking documented as carefully as the code.",
      facts: [
        { label: "Role", value: "Product owner, researcher, and builder" },
        { label: "Timeline", value: "March 2026 – present" },
        { label: "Built with", value: "Claude scheduled agent · Google Calendar, Gmail & Drive · iCal feeds" },
        { label: "Status", value: "Live since Oct 25, 2026 · runs every Sunday morning" },
      ],
      brief: {
        headline:
          "Five scattered family schedule sources, reconciled into one five-minute Sunday read. Discovery showed the real problem before I built anything.",
        stats: [
          { value: "5+", label: "schedule sources reconciled into one email" },
          { value: "5 min", label: "Sunday read replaces cross-checking every source" },
          { value: "1 tap", label: "to add anything missing to the shared calendar" },
          { value: "5", label: "versions in one evening, driven by ~~user~~ my wife's feedback" },
        ],
        problem:
          "Schedule info arrives through five or more channels (a paper calendar, league sites, ClassDojo, school emails, GroupMe) and nobody compares them. Things slip because nobody compared notes.",
        solution:
          "A scheduled AI agent reads every source, checks it against our shared Google calendar, and emails us both a briefing. It proposes; we decide with one tap.",
        impact:
          "Conflicts surface on Sunday instead of midweek. Gaps get closed in one tap. When a source fails, the briefing says so, and that led to four recovered games.",
        flow: [
          { label: "5+ sources", detail: "Paper calendar, league feeds, ClassDojo, email, GroupMe" },
          { label: "AI agent", detail: "Compares against the shared calendar and last week's state" },
          { label: "Sunday briefing", detail: "Conflicts, gaps, and changes in one email" },
          { label: "We decide", detail: "One tap adds an event. Nothing is written automatically." },
        ],
        showcaseImageFrom: 2,
        shift: {
          title: "What discovery changed",
          rows: [
            { before: "The gap is paper → digital", after: "The gap is five or more sources that never get cross-checked" },
            { before: "It's my problem", after: "We both miss things: spirit days, tests, schedule changes" },
            { before: "Sync events automatically", after: "We want to review before anything lands on the shared calendar" },
          ],
        },
        highlights: [
          { title: "Discovery before building", detail: "Interviewing my other user and looking at real data reframed the problem. The v1 plan was a well-built answer to the wrong question." },
          { title: "Humans in the loop", detail: "A shared family calendar is high-trust, so the agent proposes and we accept. A bad read never lands on the calendar." },
          { title: "Make failures loud", detail: "The briefing flagged a broken league feed every week. The fix was one line, and the first good fetch found four missing games." },
        ],
        skills: ["User research", "Problem framing", "Rapid iteration", "AI agent design", "Human-in-the-loop", "Privacy by design"],
      },
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
              ["School info arrives by email", "Some does, but most of it lives in ClassDojo notifications and GroupMe"],
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
            "Every Sunday morning a cloud agent reads every source (the kitchen calendar photo, league iCal feeds, a shared Family Inbox in Drive and Gmail where ClassDojo posts, school emails, and GroupMe messages land, and last week's saved state), compares them against our shared Google calendar, and emails a briefing to both of us. It proposes, and we decide.",
          ],
          items: [
            { label: "🔎 Call-outs", detail: "Double-bookings, handoffs under 45 minutes, games that moved or vanished from the feed, crossed-out paper entries still on Google, practices during school breaks, what to wear or bring from school flyers, unknown abbreviations, and a reminder when the kitchen photo is stale." },
            { label: "📅 This week", detail: "Day by day. Anything not yet on Google has a ➕ Add link that opens a pre-filled event." },
            { label: "👀 Next week & further out", detail: "Next week in full, then breaks and midterms up to five weeks ahead." },
            { label: "Source footer", detail: "Which sources were read and how fresh each one is." },
          ],
        },
        {
          heading: "A real Sunday briefing",
          paragraphs: [
            "This is the email that landed in both our inboxes on Sunday, November 8 at 8:16 AM. The subject line already does the triage: \"Week Ahead: Nov 8 – Nov 14 · 3 to add.\" Before opening it, we know how much is waiting on us.",
          ],
          image: {
            src: "/images/family-week-ahead-email.png",
            alt: "The Week Ahead email for Nov 8 to Nov 14, with names and places blurred. It lists call-outs (two practice overlaps, a party that disappeared from Google, midterms and Thanksgiving break missing from Google, a league feed that failed to load, and a stale kitchen calendar photo), then the week day by day with Add links, next week, and further out.",
            width: 2032,
            height: 1425,
            caption: "The briefing from Sunday, Nov 8. Names, schools, and locations are blurred; the sender header is cropped.",
          },
          items: [
            { label: "Conflicts before they become scrambles", detail: "Two kids' activities overlap on both Tuesday and Thursday, and the agent noticed the same pattern repeats next week. That turned a midweek scramble into a Sunday conversation about who drives where." },
            { label: "Changes no one would have spotted", detail: "Last week a party on the kitchen calendar matched a Google event. That event has since been deleted, so the party is no longer on the shared calendar. Only a tool that remembers last week's state can catch something that quietly vanished." },
            { label: "Gaps closed in one tap", detail: "A week of midterms and Thanksgiving break were nowhere on Google. Each gets a ➕ Add link, so fixing the gap takes one tap, not retyping." },
            { label: "Questions worth asking", detail: "Practices are still scheduled during Thanksgiving break. The agent states the fact without guessing, and we decide whether to ask the coach." },
            { label: "Honest about its blind spots", detail: "The league feeds had failed to load for the third week in a row, and the kitchen photo was 16 days old. A briefing that says what it couldn't check is one we can trust. That call-out led me to the cause: the cloud agent's network allowlist was blocking the league's calendar feed. I added the domain, and twelve minutes after this email a short follow-up went out with four Saturday games that weren't on Google." },
          ],
          calloutLabel: "Why it matters",
          callout:
            "The value isn't the list of events. It's the five-minute Sunday read that replaces cross-checking a wall calendar, two league sites, ClassDojo, and a pile of school emails, and the decisions we get to make before the week starts instead of in the middle of it.",
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
            { label: "Run it live", detail: "A scheduled Sunday-morning cloud routine with a private config and a weekly state file. The first live briefing went out Sunday, October 25, and it has run every Sunday since." },
          ],
        },
        {
          heading: "Results",
          items: [
            { label: "Hands-off every Sunday", detail: "The briefing lands in both our inboxes Sunday morning with no manual step. The only work left is deciding what to add." },
            { label: "Conflicts caught before the week starts", detail: "Early briefings flagged two games at different sites overlapping by five minutes, a 30-minute dentist-to-practice handoff, and soccer overlapping basketball practice twice a week." },
            { label: "Gaps found on day one", detail: "The first manual check of the league feed turned up 8 games missing from Google, including one that overlapped a party." },
            { label: "A loud failure that paid off", detail: "After three weeks of the briefing flagging a broken league feed, a one-line fix brought it back, and that same morning it caught 4 games missing from Google." },
          ],
        },
        {
          heading: "What I'm learning",
          items: [
            { label: "Discovery beats building", detail: "The v1 plan was a well-built answer to the wrong question. Twenty minutes of questions and one look at real data reframed it." },
            { label: "Validate inputs before automating", detail: "Testing every source by hand surfaced two failures before they could become production bugs." },
            { label: "The best integration is sometimes a habit", detail: "One capture rule beat four app integrations." },
            { label: "Keep humans in the loop where trust is fragile", detail: "A shared family calendar is high-trust, so proposals beat automation there." },
            { label: "Make failures loud", detail: "When the league feeds were blocked, the briefing said so every week instead of quietly skipping them. The cause turned out to be a one-line fix (allowlisting the feed's domain in the agent's network settings), and the first good fetch found four games we would have missed." },
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
      "A friend was opening a custom golf club fitting shop and was stuck standing up a site himself. I built the site to his design and had it live two months before the doors opened, early enough to help him bring manufacturers like Mizuno and TaylorMade on board.",
    shareSummary:
      "A friend's golf fitting shop, online two months before opening day. The site helped him land manufacturers like Mizuno and TaylorMade.",
    url: "https://mjcustomclubs.com/",
    linkLabel: "View live site",
    caseStudy: {
      lede:
        "A friend was striking out on his own, opening a custom golf club fitting shop in November 2026, and was stuck trying to stand up a site himself. He drove the design and layout; I built and launched it two months before opening day so he could focus on the shop, and the site ended up helping him land equipment manufacturers for his lineup.",
      facts: [
        { label: "Role", value: "Builder and launch owner" },
        { label: "Client", value: "MJ Custom Clubs, Indianapolis" },
        { label: "Built with", value: "Claude Code · Next.js · Tailwind CSS · Vercel" },
        { label: "Status", value: "Full site live; shop soft-opens November 2026" },
      ],
      brief: {
        headline:
          "A friend's golf fitting shop, online two months before opening day. The site gave him credibility with manufacturers like Mizuno and TaylorMade before the doors opened.",
        stats: [
          { value: "2 months", label: "online before the shop opened its doors" },
          { value: "5 pages", label: "full site with services, pricing, and a Founders Club offer" },
          { value: "Mizuno, TaylorMade", label: "among the manufacturers he pitched with the site behind him" },
        ],
        problem:
          "He was opening his own shop and stuck standing up a site himself. With no storefront yet, he needed to look real to customers and to the brands he wanted to carry.",
        solution:
          "He owned the design and content; I owned the build and launch. A coming-soon page went live first, with the full site built underneath and switched on ahead of opening.",
        impact:
          "He told me the site helped him move quicker with manufacturers, and golfers could find the shop and ask about the Founders Club before opening day.",
        flow: [
          { label: "His direction", detail: "Design, layout, and content decided by the owner" },
          { label: "My build", detail: "Next.js site, domain, search setup, link previews, analytics" },
          { label: "Coming-soon page", detail: "Live two months early, so the shop was findable" },
          { label: "Full site", detail: "Services and pricing switched on ahead of opening" },
        ],
        image: {
          src: "/images/mj-custom-clubs-home.jpg",
          alt: "The MJ Custom Clubs homepage: a dark, neon pink and cyan design with the MJ logo, a Founders Club Now Enrolling badge, the headline Fit it. Build it. Play it., and Book a Fitting and Explore Services buttons.",
          width: 1920,
          height: 1200,
          heading: "The live site",
          caption: "The homepage at mjcustomclubs.com. Design and content by the owner; build and launch by me.",
        },
        highlights: [
          { title: "Clear lines of ownership", detail: "He decided how the business should look and sound. I turned that into a working site. He never had to think about code, and I never had to guess at his brand." },
          { title: "Ship something useful early", detail: "The coming-soon page went live first and started working for him while the full site was still being built." },
          { title: "A handoff he can run", detail: "A plain-language README maps \"what you want to change\" to the file it lives in, with how to preview a change and roll back a bad deploy." },
        ],
        skills: ["Stakeholder management", "Clear ownership", "Launch planning", "Next.js & Vercel", "Search & analytics setup", "Documentation & handoff"],
      },
      sections: [
        {
          heading: "The ask",
          paragraphs: [
            "He needed a credible web presence before opening day: something customers could find now, plus a full site with services and pricing ready the moment the doors opened.",
          ],
        },
        {
          heading: "Who owned what",
          paragraphs: [
            "The design, layout, and content were his. He decided how the site should look, how the pages flowed, and what it should say. My job was to turn that direction into a working site: execution, build, and launch.",
            "Keeping that line clear meant he never had to think about code, and I never had to guess what his brand should be. The site reflects how he wants his customers to see the business.",
          ],
        },
        {
          heading: "What I shipped",
          items: [
            { label: "Coming-soon gate", detail: "Live at mjcustomclubs.com two months ahead of opening, so the business was findable and credible long before the doors opened." },
            { label: "The full site", detail: "Home, About, Services, Pricing, and Contact pages, with fitting packages and a Founders Club offer. Built underneath the gate, then switched on ahead of the soft opening." },
            { label: "Launch basics", detail: "Custom domain, search engine setup so the shop shows up on Google, social media link previews, and web analytics." },
            { label: "A handoff he can maintain", detail: "A plain-language README that maps \"what you want to change\" to the file it lives in, plus how to preview a change and roll back a bad deploy." },
          ],
        },
        {
          heading: "The impact",
          paragraphs: [
            "Having the site live two months before the physical store opened its doors mattered more than either of us expected. While he was pitching equipment manufacturers to carry their lines, including Mizuno, TaylorMade, and others, the site gave him another layer of proof that the business was real and serious.",
            "He told me it helped him move quicker with those manufacturers. A new shop with no storefront yet is an easier yes when there's a polished, professional site to point to.",
            "It also built early demand. During the coming-soon stretch, golfers could already find the shop, see the Founders Club offer, and reach out about it before opening day. He said that early interest was crucial during the startup phase.",
          ],
          callout:
            "The site was working before the doors opened: earning credibility with the brands he needed on his shelves, and building a list of Founders Club prospects.",
        },
        {
          heading: "What's next",
          paragraphs: [
            "Launch was the starting line, not the finish. He wants to grow the site iteratively alongside the business, adding features as the shop's needs become clear instead of guessing at everything up front.",
            "Online booking and fitting scheduling are next in the works, with more to follow. I'm staying on to support him as the shop scales: shipping in small steps, learning from how customers actually use the site, and building what earns its place.",
          ],
        },
        {
          heading: "Why it matters",
          paragraphs: [
            "It's a small project with a real customer, a hard date, and someone else's business on the line. The same skills I use at work applied here: get clear on who decides what, ship something useful early, leave the owner able to run day-to-day changes himself, and keep iterating as the business grows.",
          ],
        },
      ],
    },
  },
  {
    slug: "travis-101",
    title: "Travis 101",
    tag: "Personal Project · Built with Claude",
    summary:
      "A personal operating manual built from my own Kolbe A and DISC assessment results. It shows teammates and managers how I take action, how I communicate, where I thrive, and where my blind spots are, with what to do about each.",
    shareSummary:
      "How I work, built from my own Kolbe A and DISC results: strengths, blind spots, and how to get the best from me.",
    url: "https://teefrye.github.io/Working-with-Travis-101/",
    linkLabel: "Open Travis 101",
    caseStudy: {
      lede:
        "A personal operating manual for teammates, managers, and collaborators. It's built from Kolbe A and DISC assessments I've taken, and it explains how I take action, how I communicate, where I thrive, and where I have blind spots. If you're deciding whether to work with me, it's the shortcut.",
      facts: [
        { label: "Role", value: "Author and builder" },
        { label: "Timeline", value: "March 2026, updated May 2026" },
        { label: "Built with", value: "Claude · React · GitHub Pages" },
        { label: "Based on", value: "My Kolbe A Index and DISC assessment results" },
      ],
      brief: {
        headline:
          "A user manual for working with me, built from my Kolbe A and DISC results: how I work, where I have blind spots, and what I do about each.",
        stats: [
          { value: "8", label: "Kolbe Follow Thru, my strongest mode: systems and seeing things through" },
          { value: "S", label: "DISC Supporter: steady, consistent, and a close listener" },
          { value: "0", label: "lines of code written by hand. Built entirely through conversation with Claude." },
        ],
        problem:
          "Self-awareness is easy to claim in an interview and hard to show. New teammates usually learn how someone works the slow way.",
        solution:
          "A published manual from my assessment results, with tabs for projects, feedback, disagreement, and meetings, plus a decoder for what my behaviors actually mean.",
        impact:
          "Anyone deciding whether to work with me gets the shortcut. The repo shares the starting prompt, so anyone can build their own.",
        bars: {
          title: "My Kolbe A results",
          max: 10,
          rows: [
            { label: "Follow Thru", value: 8, note: "Builds systems, establishes order, sees things through" },
            { label: "Fact Finder", value: 7, note: "Gathers context before acting, to move with confidence" },
            { label: "Implementor", value: 3, note: "Works in ideas and frameworks, not physical prototypes" },
            { label: "Quick Start", value: 2, note: "Prefers a plan over a pivot" },
          ],
        },
        image: {
          src: "/images/travis-101-cover.jpg",
          alt: "The Travis 101 cover: a deep blue page with the name Travis in large serif type, the line Fact Finder. Follow-Thru. Supporter. A field guide to working with Travis., a Begin button, and a note that it's a 3 minute read.",
          width: 1920,
          height: 1200,
          heading: "The live guide",
          caption: "The cover of Travis 101. It's a three-minute, slide-style read.",
        },
        highlightsTitle: "Inside the manual",
        highlights: [
          { title: "Blind spots, with antidotes", detail: "I can overcommit to keep things smooth, so I say \"let me check what I'm already carrying.\" I can over-research, so I set a \"good enough to move\" bar before starting." },
          { title: "The Decoder", detail: "Quiet in a meeting means I'm processing, not checked out. The real thinking comes out in a 1:1 afterward." },
          { title: "Send me pre-reads", detail: "I'll arrive having done the homework. Give me a complex, under-documented problem and I'll build the system that solves it." },
        ],
        skills: ["Self-awareness", "Clear communication", "AI-assisted development", "Prompt design", "Publishing on GitHub Pages"],
      },
      sections: [
        {
          heading: "My results",
          paragraphs: [
            "Kolbe measures natural instincts: how a person takes action, not personality or intelligence. DISC measures how a person communicates and responds to their environment. Together they explain a lot about how I work.",
          ],
          table: {
            columns: ["Result", "What it means in practice"],
            rows: [
              ["Kolbe Follow Thru 8", "My strongest mode. I build systems, establish order, and see things through."],
              ["Kolbe Fact Finder 7", "I gather context before acting, not to stall, but to move with confidence."],
              ["Kolbe Implementor 3", "I work in ideas, systems, and frameworks rather than physical prototypes."],
              ["Kolbe Quick Start 2", "I prefer a plan over a pivot. Constant improvisation drains me."],
              ["DISC Supporter (S)", "I build trust through consistency, listen closely, and keep a team steady under pressure."],
            ],
          },
        },
        {
          heading: "What's inside",
          items: [
            { label: "Strengths", detail: "Follow Thru 8 plus DISC S is a rare combination: I care about the quality of the relationship and the quality of the deliverable." },
            { label: "Blind spots, with antidotes", detail: "Each strength has a shadow. I can overcommit to keep things smooth, so the antidote is \"let me check what I'm already carrying.\" I can over-research, so I set a \"good enough to move\" bar before starting." },
            { label: "A user manual", detail: "Tabs for projects, feedback, disagreement, and meetings. For example: send me pre-reads, and I'll arrive having done the homework." },
            { label: "The Decoder", detail: "Common behaviors and what they actually mean. Quiet in a meeting means I'm processing, not checked out, and the real thinking comes out in a 1:1 afterward." },
            { label: "Cheat sheet", detail: "What energizes me and what drains me, on one screen." },
          ],
        },
        {
          heading: "Why I built it",
          paragraphs: [
            "Two honest reasons: to get comfortable with AI-assisted development, and to get back into GitHub and shipping something to the web. I built it entirely through conversation with Claude, with no manual coding, and published it on GitHub Pages. The repo shares the starting prompt so anyone can build their own.",
            "Self-awareness is easy to claim in an interview and hard to show. This puts my strengths and blind spots in writing, along with what I do about each one.",
          ],
          calloutLabel: "The short version",
          callout:
            "Give me a complex, under-documented problem and the context around it. I'll build the system that solves it and see it through.",
        },
      ],
    },
  },
  {
    slug: "hoops-index",
    title: "Hoops Index",
    tag: "Personal Project · Mobile App",
    summary:
      "A free youth basketball app I built for my own coaching: 116 drills, a practice plan builder, and a sideline timer. It installs on any phone, works with no signal, and needs no account. It turns the 15 minutes before practice into a plan instead of a scramble.",
    shareSummary:
      "A free youth basketball app for coaches: 116 drills, a practice builder, and a sideline timer. Works offline, no account.",
    url: "https://teefrye.github.io/hoops-index-drill-library/",
    linkLabel: "Open the app",
    caseStudy: {
      lede:
        "I coach youth basketball while working a full-time job. Often I get to the gym with 15 minutes or less to plan an hour of practice, without knowing if 8 kids or 12 will show up. Hoops Index is the tool I wanted on the sideline: pick a length, a roster, an age group, and a focus, get a full practice, then run it from my phone.",
      facts: [
        { label: "Role", value: "Product owner, user, and builder" },
        { label: "Timeline", value: "v1 March 2026 · v2 November 2026" },
        { label: "Built with", value: "Claude Code · React · TypeScript · Vite · PWA · GitHub Pages" },
        { label: "Status", value: "Live and free; I use it at my own practices" },
      ],
      brief: {
        headline:
          "A youth basketball practice, planned in the gym and run from a phone. Built for the sideline, not the desk.",
        stats: [
          { value: "116", label: "original drills across 10 focus areas" },
          { value: "4 inputs", label: "length, roster, age, and focus build a full practice" },
          { value: "0", label: "accounts or signal needed; it installs and works offline" },
        ],
        problem:
          "Good drills are scattered across YouTube, coaching sites, and old notebooks. Finding the right ones for today's age group and headcount, with minutes to spare, doesn't happen in a gym parking lot.",
        solution:
          "One phone app: a filterable drill library, a builder that turns four choices into a full practice, and a timer that runs the plan drill by drill with coaching cues on screen.",
        impact:
          "I walk in with a plan in a couple of taps, adjust it to whoever shows up, and run practice from the phone in my hand instead of a notebook.",
        flow: [
          { label: "Set the practice", detail: "Length, number of players, age group, skill level, and up to 3 focus areas" },
          { label: "Get a plan", detail: "Warm-up, skill blocks, water breaks, and a competitive finisher" },
          { label: "Adjust", detail: "Reorder, retime, swap, or shuffle drills for who actually showed up" },
          { label: "Run it", detail: "A sideline timer with cues, whistle beeps, and the screen kept awake" },
        ],
        image: {
          src: "/images/hoops-index-screens-light.png",
          darkSrc: "/images/hoops-index-screens-dark.png",
          alt: "Four phone screens from Hoops Index: the Drills screen with focus areas as hanging banners, the Build a Practice sheet, a one-hour Handles + Shooting plan, and Practice Mode with the timer running.",
          width: 2938,
          height: 1468,
          quality: 90,
          frameless: true,
          heading: "The app",
          caption: "Browse drills, build a practice, adjust the plan, and run it with the sideline timer.",
        },
        demo: {
          src: "https://teefrye.github.io/hoops-index-drill-library/?embed",
          title: "Hoops Index app, live demo",
          heading: "The real app, running live",
          body: "Tap a focus banner, open a drill, or go to Practices and press play. It's the same app I run practices with.",
        },
        shift: {
          title: "What changed from v1 to v2",
          rows: [
            { before: "A list of drills to search", after: "A practice plan to run: the plan is the product, the drills feed it" },
            { before: "An AI drill generator in the browser", after: "A rules-based plan builder that works offline; AI parked until it can run safely on a server" },
            { before: "A web page you look things up on", after: "An app on the home screen that works with no signal in the gym" },
            { before: "47 drills, some adapted from coaching sites", after: "116 drills, every write-up original" },
          ],
        },
        highlights: [
          { title: "Build for the real moment", detail: "The user is a coach with minutes to spare and a phone in one hand. Big tap targets, one-handed navigation, and a timer that keeps the screen awake came from that, not from a feature list." },
          { title: "Right tool, not the newest one", detail: "A practice plan follows rules a coach already knows: warm up, rotate skills, water breaks, finish competitive. Plain code does that instantly and offline. AI comes back when it has a safe home on a server." },
          { title: "Make it easy to keep growing", detail: "New drills go in through a validation script that checks every field and skips duplicates, so the library can grow without breaking the app." },
        ],
        skills: ["Problem framing", "Scope decisions", "Mobile-first design", "AI-assisted development", "React & TypeScript", "Offline web apps (PWA)"],
      },
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Coaching youth basketball while working full time is a scheduling puzzle that never fully resolves. I often have 15 minutes before practice, sometimes less, to fill an hour or more with drills that fit the age group, can be taught in the time I have, and work whether 8 kids show up or 12.",
            "The drills exist. They're scattered across YouTube videos, coaching websites, old notebooks, and things half-remembered from a clinic years ago. What was missing was a way to find the right ones fast and turn them into a plan.",
          ],
          callout:
            "A volunteer coach needs a complete, age-appropriate practice plan in minutes, on a phone, often with no signal, and has to adjust it once they see who showed up.",
        },
        {
          heading: "v1: a searchable drill list",
          paragraphs: [
            "The first version (March 2026) was a single web page: 47 drills I could filter by focus, age group, skill level, and player count, plus favorites and an AI button that asked Claude to write a new drill.",
            "That solved the wrong half of the problem. Finding a drill got faster, but I still had to assemble the practice myself, keep time, and remember what came next. The AI drill generator was fun, but more drills wasn't my problem. And because it called the AI service straight from the browser, it couldn't be shared publicly without exposing a private key.",
          ],
        },
        {
          heading: "v2: a practice in your pocket",
          paragraphs: [
            "In November 2026 I rebuilt it as an installable phone app, directing Claude Code through a series of small, focused changes and reviewing each one before it shipped.",
          ],
          items: [
            { label: "Practice builder", detail: "Pick a length (30 to 120 minutes), players, age group, skill level, and up to three focus areas. It returns a full plan: a warm-up, skill blocks that rotate through the focus areas, water breaks about every 25 minutes, and a competitive team drill to finish." },
            { label: "Adjust for who showed up", detail: "Reorder, retime, add, remove, or shuffle drills. Each block shows its clock time so I know where practice should be." },
            { label: "Practice Mode", detail: "A sideline timer that runs the plan drill by drill: coaching cues on screen, whistle beeps, +1 minute when a drill is working, and the screen kept awake." },
            { label: "116 original drills", detail: "Across 10 focus areas, from warm-ups to team concepts, each with setup, steps, cues, and variations. Classic drill concepts are common coaching knowledge, but every write-up is written for this app." },
            { label: "Works like a real app", detail: "Installs to the home screen, works offline, keeps favorites, notes, and plans on the device with no account, and shares a plan as text with assistant coaches." },
          ],
        },
        {
          heading: "Key decisions",
          table: {
            columns: ["Decision", "Why"],
            rows: [
              ["The plan is the product", "Coaches don't need more drills; they need the next hour figured out. The library now feeds the builder instead of being the destination."],
              ["Rules over AI for planning", "Practice structure follows known rules. Plain code is instant, free, predictable, and works with no signal."],
              ["Park the AI generator", "A public app can't hold a private key in the browser. It returns once it can run behind a small server."],
              ["Installable web app, not an app store app", "One codebase on every phone, free to host, and no app review to wait on. App store versions stay on the roadmap."],
              ["No accounts, data stays on the device", "Nothing to sign up for, nothing to secure, and nothing about kids or teams leaves the phone. Backup and restore covers switching phones."],
              ["Original write-ups only", "v1 leaned on coaching sites. v2 rewrote every drill so the library is mine to share."],
            ],
          },
        },
        {
          heading: "What's next",
          items: [
            { label: "Court diagrams", detail: "A simple diagram for each drill, since a picture beats a paragraph for young players." },
            { label: "AI drill generator, done safely", detail: "Back behind a small server so the key stays private." },
            { label: "Shared plans", detail: "Cloud sync so plans follow you across devices and assistant coaches see the same practice." },
            { label: "App stores", detail: "Google Play first (low cost), then the App Store." },
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
    shareSummary:
      "Planned, built, and deployed with Claude Code, from resume content to a live Next.js site on Vercel.",
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
      brief: {
        headline:
          "The site you're on is part of the pitch: I planned it, directed Claude Code to build it, and every push ships to Vercel.",
        stats: [
          { value: "1", label: "data file drives every page, including these case studies" },
          { value: "Every push", label: "deploys to production automatically" },
          { value: "2", label: "themes, light and dark, following your system setting" },
          { value: "3", label: "holes in a hidden putting game. Tap the green." },
        ],
        problem:
          "A resume can list AI tools, but it can't show how I actually use them, or that I can take something from idea to live.",
        solution:
          "I planned the content and structure, then directed Claude Code from scaffold to deploy, reviewing every step. Version-controlled on GitHub, hosted on Vercel.",
        impact:
          "A live, public example of using AI as leverage, not autopilot, with the source open for anyone to inspect.",
        flow: [
          { label: "I plan", detail: "Content, structure, and what each page should prove" },
          { label: "Claude Code builds", detail: "Next.js, TypeScript, and Tailwind CSS, step by step" },
          { label: "I review", detail: "Every change previewed locally before it ships" },
          { label: "Vercel ships", detail: "A push to GitHub deploys to production" },
        ],
        highlights: [
          { title: "Leverage, not autopilot", detail: "Claude Code wrote the code. I set the direction, reviewed every step, and decided what shipped." },
          { title: "Content as data", detail: "Nearly all copy lives in one file, so updating a role or a case study is an edit, not a rebuild." },
          { title: "Details that respect the reader", detail: "Light and dark themes, a mobile-first menu, and a putting game whose code only downloads when someone opens it." },
        ],
        skills: ["Product ownership", "AI-assisted development", "Next.js & TypeScript", "Tailwind CSS", "Git & GitHub", "CI/CD on Vercel"],
      },
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
