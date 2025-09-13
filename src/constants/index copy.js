import project1 from "../assets/projects/ANPR.jpg";
import project2 from "../assets/projects/tic-tac-toe.png";
import project3 from "../assets/projects/bookstore.png";
import project4 from "../assets/projects/project-4.png";
import { CgHello } from "react-icons/cg";

export const HERO_CONTENT = `Software engineer specializing in embedded C and web development. From bare-metal firmware to modern web apps, I bridge hardware and software using React, Node, and low-level C programming. Passionate about building performant solutions from microcontrollers to cloud services.`;

/* export const HERO_CONTENT = `I am a passionate full stack developer with experience in crafting robust web applications and embedded systems. With a background in React.js, Node.js, C# .NET, and embedded systems, I enjoy developing full-stack solutions that enhance performance and user experience.`; */

export const ABOUT_TEXT = `Software engineer bridging hardware and web technologies. Armed with a Computer Engineering degree, I architect solutions from bare-metal firmware (STM32, ESP32) to modern web stacks. At E'Mind Tek, I develop RFID solutions combining embedded C with full-stack expertise in React, Node.js, FastAPI, and DevExtreme. Skilled in both SQL (MSSQL) and NoSQL (MongoDB) databases. Passionate about pushing boundaries in embedded systems, backend development, and AI.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Software Developer",
    company: "E'Mind Tek",
    description: `Developed Embedded Software, Desktop and Full-Stack applications using C, Node.js, C#, React.js, and DevExtreme. Built and maintained robust backend systems and desktop applications, improving performance and user interaction.`,
    technologies: ["Node.js", "React.js", "C#", "MSSQL", "DevExtreme", "C"],
  },
  {
    year: "Summer 2023, Winter  2024",
    role: "Full-stack Web Developer Intern",
    company: "E'Mind Tek",
    description: `Two full-time internships as a Full-Stack web developer where I enhanced outdated PHP web apps, modernized project management architecture, and improved security with two-factor authentication for many projects.`,
    technologies: ["PHP", "Node.js", "C#", "DevExtreme"],
  },
  {
    year: "January - March 2021",
    role: "Embedded Engineer Intern",
    company: "TME Africa",
    description: `Developed firmware drivers in C/C++ and worked with AVR microcontroller-based systems, integrating communication protocols like UART, I2C, and SPI.`,
    technologies: ["C/C++", "AVR", "Embedded Systems"],
  },
];

export const PROJECTS = [
  {
    title: "Bookstore",
    image: project3,
    description:
      "Fully functional full-stack bookstore web application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to browse, search, add, remove books online, featuring intuitive interface for managing book inventory. Implemented RESTful APIs for seamless data interaction and ensured responsive design for optimal user experience across devices.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "MongoDB", "Express"],
    url: "https://mern-bookstore-frontend-three.vercel.app/",
  },
  {
    title: "Tic-tac-toe Game",
    image: project2,
    description:
      "Built an interactive Tic-Tac-Toe game using React.js, showcasing dynamic state management and component-based architecture. The game includes features such as real-time player moves, win condition checks, and a reset functionality. Emphasized clean, modular code and a responsive design for smooth user experience on both desktop and mobile platforms.",
    technologies: ["React.js"],
    url: "https://tic-tac-toe-vert-six.vercel.app/",
  },

  {
    title: "Ai Image Generator",
    image: project4,
    description:
      "Full stack app that helps generate an imaginative image through DALL-E AI and share it with the community",
    technologies: ["React", "MongoDB", "Express", "Node.js"],
    url: "https://inspira-pic.vercel.app/",
  },
  {
    title: "Automatic Number Plate Recognition System",
    image: project1,
    description:
      "Designed and implemented a system for automatic number plate recognition with gate control. This project interfaces various sensors and actuators with Raspberry Pi for the purpose of managing access to premises.",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Matplotlib"],
    url: "https://www.youtube.com/watch?v=MX92imRYH08",
  },
];

export const CONTACT = {
  address: "1141 Rue Saint-Louis, Gatineau, QC J8T 2R6",
  phoneNo: "+1 418-933-0141",
  email: "gastonkitambala@gmail.com",
};

export const EDUCATION = [
  {
    year: "2017 - 2021",
    title: "B.Sc. in Computer Engineering",
    school: "Kampala International University",
    city: "Kampala, Uganda",
  },
  {
    year: "2021 - 2024",
    title: "DEC Techniques de l'Informatique",
    school: "Cégep de Thetford",
    city: "Thetford Mines, QC. Canada",
  },
];
