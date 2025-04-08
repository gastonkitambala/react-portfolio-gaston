import project1 from "../assets/projects/ANPR.jpg";
import project2 from "../assets/projects/tic-tac-toe.png";
import project3 from "../assets/projects/bookstore.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Full-stack software engineer specializing in embedded systems and web development. With expertise in React.js, Node.js, and low-level programming for microcontrollers, I bridge hardware and software to deliver innovative solutions. Passionate about creating performant applications from edge devices to cloud services.`;

/* export const HERO_CONTENT = `I am a passionate full-stack developer with experience in crafting robust web applications and embedded systems. With a background in React.js, Node.js, C# .NET, and embedded systems, I enjoy developing full-stack solutions that enhance performance and user experience.`; */

export const ABOUT_TEXT = `Software engineer bridging hardware and web technologies with extensive experience in diverse programming languages and tools. Holding a Computer Engineering degree and a DEC in Techniques de l'informatique, I excel in creating solutions from bare-metal firmware (STM32, ESP32) to modern web stacks. Proficient in front-end technologies like React.js, HTML5, CSS3, and DevExtreme; back-end tools including Node.js, Express.js, FastAPI(Python), Kotlin and database systems like MSSQL, PostgreSQL, MongoDB, and MySQL. Skilled in embedded systems development with C and C++, leveraging communication protocols such as UART, I2C, and SPI. Experienced in Docker, AWS, and deployment pipelines, I am committed to delivering scalable, secure, and performant solutions across domains.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present ",
    role: "Software Developer",
    company: "E'Mind Tek",
    description: `Design and develope full-stack web applications using Node.js, React.js, and DevExtreme. I Maintain and optimize scalable backend systems enhance desktop applications with C#, enhancing usability and performance.`,
    technologies: [
      "Node.js",
      "React.js",
      "DevExtreme",
      "C#",
      "MSSQL",
      "PowerShell",
    ],
  },
  {
    year: "2023 - 2024",
    role: "Full-stack Web Developer Intern",
    company: "E'Mind Tek",
    description: `Modernized legacy PHP web applications, implemented multilingual interfaces for better accessibility, and introduced two-factor authentication for enhanced security.`,
    technologies: ["PHP", "Node.js", "C#", "DevExtreme"],
  },
  {
    year: "2022 - 2023",
    role: "Embedded Software Developer (Part-time)",
    company: "E'Mind Tek",
    description: `Developed and optimized firmware for microcontrollers like STM32 and ESP32. Created robust data logging modules using SPI protocols and conducted rigorous testing with tools like STM32CubeIDE.`,
    technologies: ["C", "Embedded Systems", "STM32", "ESP32"],
  },
  {
    year: "2021",
    role: "Embedded Engineer Intern",
    company: "TME Africa",
    description: `Developed firmware drivers in C/C++ for AVR-based systems. Enhanced communication protocols, including UART, I2C, and SPI, to improve device communication efficiency.`,
    technologies: ["C/C++", "AVR", "Embedded Systems"],
  },
];

export const PROJECTS = [
  {
    title: "Bookstore",
    image: project3,
    description:
      "Full-stack bookstore application leveraging the MERN stack (MongoDB, Express.js, React.js, and Node.js). Features include browsing, searching, and managing books with responsive design and RESTful APIs for seamless functionality.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    url: "https://mern-bookstore-frontend-three.vercel.app/",
  },
  {
    title: "Tic-tac-toe Game",
    image: project2,
    description:
      "Interactive game built with React.js, focusing on real-time gameplay, modular architecture, and a user-friendly design for desktop and mobile users.",
    technologies: ["React.js"],
    url: "https://tic-tac-toe-vert-six.vercel.app/",
  },
  {
    title: "AI Image Generator",
    image: project4,
    description:
      "Developed a full-stack application that generates images using DALL-E AI, allowing users to create and share imaginative visuals within a community.",
    technologies: ["React", "MongoDB", "Express", "Node.js"],
    url: "https://inspira-pic.vercel.app/",
  },
  {
    title: "Automatic Number Plate Recognition System",
    image: project1,
    description:
      "Designed a system for automatic number plate recognition and gate control. Integrated Raspberry Pi with OpenCV and various sensors for efficient access management.",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Matplotlib"],
    url: "https://www.youtube.com/watch?v=MX92imRYH08",
  },
];

export const CONTACT = {
  address: "Gatineau, QC",
  phoneNo: "+1 418-933-0141",
  email: "gastonkitambala@gmail.com",
};

export const EDUCATION = [
  {
    year: "2021 - 2024",
    title: "DEC Techniques de l'Informatique",
    school: "Cégep de Thetford",
    city: "Thetford Mines, QC, Canada",
  },
  {
    year: "2017 - 2021",
    title: "B.Sc. in Computer Engineering",
    school: "Kampala International University",
    city: "Kampala, Uganda",
  },
];
