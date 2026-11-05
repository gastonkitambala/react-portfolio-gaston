import project2 from "../assets/projects/tic-tac-toe.webp";
import project3 from "../assets/projects/bookstore.webp";
import project4 from "../assets/projects/inspirapic.webp";

export const NAME = "Itaka Gaston Kitambala";
export const ROLE = "Full Stack Software Engineer";
export const RESUME_URL = "/Itaka_Gaston_Kitambala_Resume.pdf";

export const HERO_CONTENT = `Full stack software engineer with 4+ years of experience shipping and maintaining production web applications with React, TypeScript, Node.js and REST APIs — backed by a strong foundation in C/C++ and embedded systems.`;

export const ABOUT_TEXT = [
  `I'm a full stack software engineer with 4+ years of experience shipping and maintaining production web applications with React, TypeScript, Node.js and REST APIs. I'm comfortable contributing across frontend and backend codebases, and I enjoy owning a feature end to end.`,
  `I iterate on features with product and business teams, debug production issues through logs and monitoring, and keep quality high with testing and code review. I use AI-assisted development tools such as Claude daily for coding, debugging and planning.`,
  `I started my career in embedded systems, writing C/C++ firmware for STM32, ESP32 and AVR microcontrollers, and joined E'Mind Tek as an embedded software developer before transitioning to full stack development. That low-level foundation, along with a B.Sc. in Computer Engineering and a DEC in Computer Science Technology, still shapes how I debug and break down complex problems. I'm a strong communicator on remote teams and bilingual in English and French.`,
];

export const QUICK_FACTS = [
  { label: "Based in", value: "Gatineau, QC" },
  { label: "Experience", value: "4+ years" },
  { label: "Focus", value: "Full stack · C/C++" },
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
      ".NET",
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
    title: "InspiraPic",
    image: project4,
    description:
      "AI image generator with a React front end and a Node.js/Express REST API over MongoDB, integrating a third-party image generation API. Users create images and share them with the community.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    url: "https://inspira-pic.vercel.app/",
    linkLabel: "Live demo",
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
    title: "Bookstore",
    image: project3,
    description:
      "Full-stack CRUD application with REST endpoints, search and a responsive React UI for browsing and managing books.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    url: "https://mern-bookstore-frontend-three.vercel.app/",
    linkLabel: "Live demo",
    architecture: {
      summary:
        "The React UI calls REST endpoints to create, read, update, delete and search books. The Express API translates each request into a MongoDB query and returns JSON to the client.",
      tiers: [
        {
          label: "Client",
          nodes: [{ name: "React SPA", detail: "Browse, search & manage books", icon: "client" }],
        },
        {
          label: "Server",
          nodes: [{ name: "Node.js + Express", detail: "CRUD + search endpoints", icon: "server" }],
        },
        {
          label: "Data",
          nodes: [{ name: "MongoDB", detail: "Books collection", icon: "database" }],
        },
      ],
      links: ["REST · JSON", "DB queries"],
    },
  },
  {
    title: "Modern Tic-Tac-Toe",
    image: project2,
    description:
      "Interactive game built with React.js, focusing on real-time gameplay, a modular component architecture and a clean design for desktop and mobile.",
    technologies: ["React.js"],
    url: "https://tic-tac-toe-vert-six.vercel.app/",
    linkLabel: "Live demo",
    architecture: {
      summary:
        "Runs entirely in the browser with no backend. A click on a square updates the game state held in React hooks; pure rule functions check for a win or draw after every move, and the board re-renders.",
      tiers: [
        {
          label: "UI",
          nodes: [{ name: "Board & Square", detail: "Render the grid, emit clicks", icon: "client" }],
        },
        {
          label: "State",
          nodes: [{ name: "Game state", detail: "React hooks: board, turn", icon: "state" }],
        },
        {
          label: "Logic",
          nodes: [{ name: "Game rules", detail: "Win & draw detection", icon: "logic" }],
        },
      ],
      links: ["props · events", "function calls"],
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
  { label: "Instagram", url: "https://www.instagram.com/iam_theceo/" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
