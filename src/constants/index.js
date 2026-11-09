import inspirapicImg from "../assets/projects/inspirapic.webp";
import zionwareImg from "../assets/projects/zionware.webp";

export const NAME = "Itaka Gaston Kitambala";
export const ROLE = "Software Engineer";
export const RESUME_URL = "/Itaka_Gaston_Kitambala_Resume.pdf";

export const HERO_CONTENT = `Full stack web developer with 4+ years of professional experience, building and shipping production web applications end to end with React, TypeScript, Node.js, FastAPI, .NET Core and REST APIs. I also bring a background in embedded software, writing C/C++ firmware.`;

export const ABOUT_TEXT = [
  `I'm a full stack software engineer with 4+ years of professional experience, shipping and maintaining production web applications with React, TypeScript, Node.js and REST APIs, plus Python (FastAPI) and C# (.NET Core) backends. I'm comfortable contributing across frontend and backend codebases, and I enjoy owning a feature end to end.`,
  `I iterate on features with product and business teams, debug production issues through logs and monitoring, and keep quality high with testing and code review. I use AI-assisted development tools such as Claude daily for coding, debugging and planning.`,
  `I started my career in embedded systems, writing C/C++ firmware for STM32, ESP32 and AVR microcontrollers, and joined E'Mind Tek as an embedded software developer before transitioning to full stack development. That low-level foundation, along with a B.Sc. in Computer Engineering and a DEC in Computer Science Technology, still shapes how I debug and break down complex problems. I'm a strong communicator on remote teams and bilingual in English and French.`,
];

export const QUICK_FACTS = [
  { label: "Based in", value: "Gatineau, QC" },
  { label: "Experience", value: "4+ years" },
  { label: "Focus", value: "Full stack web" },
  { label: "Languages", value: "English / French" },
];

export const SKILLS = [
  {
    title: "Languages",
    icon: "languages",
    items: ["TypeScript", "JavaScript", "SQL", "HTML5", "CSS3", "C#", "Python", "Java", "PHP", "C/C++"],
  },
  {
    title: "Frameworks & APIs",
    icon: "frameworks",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "FastAPI",
      ".NET Core",
      "Spring Boot",
      "Django",
      "REST APIs",
      "JWT authentication",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["Microsoft SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: "devops",
    items: ["AWS (EC2, S3)", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD", "Git & GitHub", "Linux"],
  },
  {
    title: "Practices",
    icon: "practices",
    items: [
      "Unit & integration testing",
      "Code reviews",
      "Logging & production debugging",
      "AI-assisted development (Claude)",
      "Agile / Scrum",
      "Remote collaboration",
    ],
  },
  {
    title: "Embedded Systems",
    icon: "embedded",
    items: [
      "C",
      "C++",
      "STM32",
      "ESP32",
      "AVR",
      "UART · I2C · SPI",
      "Firmware drivers",
      "Hardware integration testing",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "2023 — Present",
    role: "Full Stack Software Developer",
    company: "E'Mind Tek",
    location: "Thetford Mines, QC · Remote",
    highlights: [
      "Shipped and maintained full-stack features in React, TypeScript and Node.js, owning each one from design through production and post-release support.",
      "Built and integrated REST APIs with JWT authentication and role-based access control, connecting web and desktop clients to shared services.",
      "Collaborated with product, business stakeholders and support to iterate on features based on user feedback and real-world usage.",
      "Wrote unit and integration tests, reviewed teammates' pull requests, and shipped through Docker-based CI/CD pipelines on AWS.",
      "Debugged production issues using application logs and monitoring, using AI-assisted tools such as Claude daily for coding, debugging and planning.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "REST APIs", "JWT", "Docker", "AWS", "CI/CD"],
  },
  {
    year: "Aug 2022 — 2023",
    role: "Embedded Software Developer",
    company: "E'Mind Tek",
    location: "Thetford Mines, QC",
    highlights: [
      "Joined E'Mind Tek on the embedded team, developing and optimizing C/C++ firmware for STM32 and ESP32 microcontrollers.",
      "Built reliable data logging modules over SPI and validated them on hardware with STM32CubeIDE.",
      "Transitioned to full stack development, carrying a low-level debugging mindset into web and API work.",
    ],
    technologies: ["C", "C++", "STM32", "ESP32", "SPI", "STM32CubeIDE"],
  },
  {
    year: "Jan 2021 — Mar 2021",
    role: "Embedded Software Engineer Intern",
    company: "Transfer Multisort Elektronik Africa",
    location: "Kampala, Uganda",
    highlights: [
      "Developed firmware drivers in C/C++ for AVR microcontroller-based systems and validated them through hardware integration testing.",
      "Implemented and debugged UART, I2C and SPI communication, improving reliability between devices.",
      "Traced integration faults across firmware, drivers and communication buses, breaking complex problems into small testable fixes.",
    ],
    technologies: ["C/C++", "AVR", "UART", "I2C", "SPI"],
  },
];

export const PROJECTS = [
  {
    title: "Zionware",
    image: zionwareImg,
    description:
      "Bilingual (English / French) website and lead funnel for Zionware, a software services company in Ottawa-Gatineau. Visitors browse services and past work, then book a call or send a project request that lands in the inbox.",
    highlights: [
      "Locale-based routing with next-intl, a script that checks EN/FR content parity, light and dark themes, and FAQ structured data (JSON-LD) for search.",
      "Contact form as a Next.js server action: honeypot, allowlisted fields, HTML escaping and Redis-backed rate limiting before sending through Resend.",
      "Cal.com booking modal and a GDPR consent step, specified and planned in design docs before implementation.",
    ],
    technologies: ["Next.js 16", "TypeScript", "React 19", "next-intl", "Tailwind CSS", "Upstash Redis", "Resend"],
    url: "https://zionware-web.vercel.app/",
    linkLabel: "Live site",
    repo: "https://github.com/gastonkitambala/zionwareWeb",
    architecture: {
      summary:
        "Pages are rendered per locale by the Next.js App Router. The contact form posts to a server action that validates input and checks a rate limit in Upstash Redis before emailing the request through Resend; bookings go straight to an embedded Cal.com scheduler.",
      tiers: [
        {
          label: "Client",
          nodes: [
            { name: "Next.js pages", detail: "/en and /fr routes", icon: "client" },
            { name: "Book-a-call modal", detail: "Cal.com embed", icon: "calendar" },
          ],
        },
        {
          label: "Server",
          nodes: [
            { name: "Server action", detail: "Validate, sanitize, send", icon: "server" },
            { name: "Rate limiter", detail: "5 requests / 10 min per IP", icon: "lock" },
          ],
        },
        {
          label: "Services",
          nodes: [
            { name: "Upstash Redis", detail: "Rate-limit counters", icon: "database" },
            { name: "Resend", detail: "Transactional email", icon: "mail" },
          ],
        },
      ],
      links: ["form POST", "HTTPS APIs"],
    },
  },
  {
    title: "SeatFinder",
    description:
      "Event seating app built for a wedding: guests scan a QR code at the venue, type their name and see their table in seconds. Organizers sign in to a private dashboard to import the guest list from CSV or Excel, review a row-by-row preview of skipped entries, then publish.",
    highlights: [
      "Accent- and case-insensitive name search tuned for phones on venue wifi, with no animation library on the guest page.",
      "Forgiving spreadsheet import: headings matched loosely in English and French, bad rows reported instead of failing the whole file.",
      "Admin API protected by signed session cookies and Next.js middleware; parsing and search covered by Vitest unit tests.",
    ],
    technologies: ["Next.js 15", "TypeScript", "React 19", "SQLite", "Tailwind CSS", "Vitest"],
    url: "https://github.com/gastonkitambala/seatFinder",
    linkLabel: "Source code",
    architecture: {
      summary:
        "Guests hit a public search page that queries guests through a Next.js route handler. Organizers log in through middleware-guarded admin routes that parse uploaded CSV or .xlsx files, validate each row, and write the guest list to SQLite in one confirmed import.",
      tiers: [
        {
          label: "Client",
          nodes: [
            { name: "Guest page", detail: "QR → name search → table", icon: "client" },
            { name: "Admin dashboard", detail: "Import, edit, customize", icon: "client" },
          ],
        },
        {
          label: "Server",
          nodes: [
            { name: "Next.js route handlers", detail: "Search, import, settings", icon: "server" },
            { name: "Middleware auth", detail: "Signed session cookie", icon: "lock" },
          ],
        },
        {
          label: "Data",
          nodes: [
            { name: "SQLite", detail: "better-sqlite3", icon: "database" },
            { name: "Import parser", detail: "CSV & .xlsx (exceljs)", icon: "file" },
          ],
        },
      ],
      links: ["fetch · JSON", "SQL · file parsing"],
    },
  },
  {
    title: "LeadGen",
    description:
      "Prospecting tool for a web agency: search a city and an industry, and it finds local businesses on Google Maps, audits each one's website and ranks the best sales leads. Each lead comes with a tailored outreach pitch and the list exports to CSV.",
    highlights: [
      "Next.js API route that combines the Google Places and PageSpeed Insights APIs, with timeouts and a liveness check for broken sites.",
      "Scores every site (no website, broken, outdated, poor mobile, needs work) from weighted mobile and desktop performance plus HTTPS.",
      "Demo mode with typed mock data so the app runs without API keys.",
    ],
    technologies: ["Next.js 14", "TypeScript", "React", "Google Places API", "PageSpeed API", "Tailwind CSS"],
    url: "https://github.com/gastonkitambala/LeadGen",
    linkLabel: "Source code",
    architecture: {
      summary:
        "The search UI calls a Next.js API route. The route queries Google Places for matching businesses, fetches each one's details, checks whether its website responds and runs PageSpeed Insights on it, then returns scored leads that the client ranks, pitches and exports.",
      tiers: [
        {
          label: "Client",
          nodes: [
            { name: "Search & results", detail: "Filters, stats, pitch modal", icon: "client" },
            { name: "CSV export", detail: "Runs in the browser", icon: "file" },
          ],
        },
        {
          label: "Server",
          nodes: [
            { name: "/api/search", detail: "Next.js route handler", icon: "server" },
            { name: "Website scorer", detail: "Status + composite score", icon: "logic" },
          ],
        },
        {
          label: "External APIs",
          nodes: [
            { name: "Google Places", detail: "Search & place details", icon: "external" },
            { name: "PageSpeed Insights", detail: "Mobile & desktop scores", icon: "external" },
          ],
        },
      ],
      links: ["fetch · JSON", "HTTPS APIs"],
    },
  },
  {
    title: "InspiraPic",
    image: inspirapicImg,
    description:
      "AI image generator with a React front end and a Node.js/Express REST API over MongoDB, integrating a third-party image generation API. Users create images and share them with the community.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    url: "https://inspira-pic.vercel.app/",
    linkLabel: "Live demo",
    repo: "https://github.com/gastonkitambala/InspiraPic-",
    architecture: {
      summary:
        "The React client sends a prompt to the Express API, which calls the third-party image generation API and returns the result. Sharing an image saves the post to MongoDB so it appears in the community feed.",
      tiers: [
        {
          label: "Client",
          nodes: [{ name: "React SPA", detail: "Prompt form & community feed", icon: "client" }],
        },
        {
          label: "Server",
          nodes: [{ name: "Node.js + Express", detail: "REST API", icon: "server" }],
        },
        {
          label: "Data & services",
          nodes: [
            { name: "MongoDB", detail: "Shared posts", icon: "database" },
            { name: "Image generation API", detail: "DALL-E (third-party)", icon: "ai" },
          ],
        },
      ],
      links: ["REST · JSON", "DB queries · HTTPS"],
    },
  },
];

export const CONTACT = {
  address: "Gatineau, QC",
  phoneNo: "+1 (418) 933-0141",
  email: "gastonkitambala@gmail.com",
};

export const EDUCATION = [
  {
    year: "Aug 2021 — May 2024",
    title: "DEC — Techniques de l'Informatique (Computer Science Technology)",
    school: "Cégep de Thetford",
    city: "Thetford Mines, QC",
    details: "Web Development · Server Administration (Linux & Windows) · Distributed Programming",
  },
  {
    year: "Jan 2017 — May 2021",
    title: "B.Sc. in Computer Engineering",
    school: "Kampala International University",
    city: "Kampala, Uganda",
    details: "GPA 3.4/4.00 · Credential assessed by WES",
  },
];

export const SOCIALS = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gaston-itaka-kitambala-b04b19b7/",
  },
  { label: "GitHub", url: "https://github.com/gastonkitambala" },
  { label: "X (Twitter)", url: "https://x.com/g_kitambala" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
