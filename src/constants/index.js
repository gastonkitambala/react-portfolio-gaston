import inspirapicImg from "../assets/projects/inspirapic.webp";

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
  {
    title: "STM32F4 bare-metal drivers",
    description:
      "Peripheral drivers for the STM32F4 microcontroller written in C directly against the register map, with no vendor HAL. Built up step by step from GPIO to interrupt- and DMA-driven UART, ADC and timers.",
    highlights: [
      "GPIO, UART (polling, interrupt and DMA), ADC single and continuous conversion, SysTick, timers with output compare and input capture, and external interrupts.",
      "Each driver configures clocks and peripheral registers by hand, which is the same low-level reasoning I use to debug production web systems.",
    ],
    technologies: ["C", "STM32F4", "ARM Cortex-M4", "UART", "DMA", "Interrupts"],
    url: "https://github.com/gastonkitambala/STM32F4_Baremetal_Drivers",
    linkLabel: "Source code",
    architecture: {
      summary:
        "Application code calls small driver modules (GPIO, UART, ADC, timers) that set peripheral registers through the CMSIS device headers. Interrupt handlers and the DMA controller move data without blocking the main loop.",
      tiers: [
        {
          label: "Application",
          nodes: [{ name: "main loop", detail: "Uses driver APIs", icon: "logic" }],
        },
        {
          label: "Drivers",
          nodes: [
            { name: "GPIO · UART · ADC", detail: "Register-level C", icon: "state" },
            { name: "Timers · SysTick · EXTI", detail: "IRQ handlers, DMA", icon: "state" },
          ],
        },
        {
          label: "Hardware",
          nodes: [{ name: "STM32F4 MCU", detail: "CMSIS registers", icon: "chip" }],
        },
      ],
      links: ["function calls", "memory-mapped I/O"],
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
