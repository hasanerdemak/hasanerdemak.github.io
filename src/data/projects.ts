import { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: "smart",
    title: "SMArt (Security Management Art)",
    summary: "",
    description:
      "Developed a software platform for Securitas, a global leader in security solutions, as part of Siren IT Solutions. The platform enables administrative employees to securely record and report work-related transactions while allowing field employees to fulfill and document operational tasks. It enhances workflow efficiency and department-wide communication. As a Full-Stack Developer, contributed to both the back-end (C#, .NET, Entity Framework) and front-end (React, TypeScript), focusing on security, usability, and scalability. Designed and implemented a secure, user-friendly internal web portal that aligns with Securitas’ high standards for operational excellence.",
    image: "",
    siteLink: null,
    repoLink: null,
    downloadLink: null,
    technologies: [
      "C#",
      ".Net",
      "Entity Framework",
      "React",
      "Typescript",
      "Postman",
      "Swagger",
      "RESTful APIs",
      "HTML",
      "CSS",
    ],
    detailImages: [],
    categories: ["web"],
  },
  {
    id: "secfire",
    title: "Securitas Fire Services Website",
    summary: "",
    description:
      "Developed and enhanced the official website for Securitas Fire Services, which provides comprehensive fire protection for industrial facilities, shopping centers, tourism complexes, and other high-risk environments. Improved website security by refining the Content-Security-Policy (CSP), upgrading Bootstrap and jQuery versions, and implementing UI enhancements for a better user experience. Additionally, contributed to server-side security and version management on the FTP-hosted platform, ensuring smooth functionality and robust protection against vulnerabilities.",
    image: "",
    siteLink: null,
    repoLink: null,
    downloadLink: null,
    technologies: ["HTML", "CSS", "FTP", "Bootstrap", "jQuery", "UI/UX"],
    detailImages: [],
    categories: ["web"],
  },
  {
    id: "lega",
    title: "LEGA",
    summary: "",
    description:
      "Developed front-end features for LEGA, a litigation and enforcement management platform designed by Innova to streamline legal and administrative processes for corporate lawyers and contracted law offices. The platform, available in two versions (LEGA & LEGA Lite), provides a centralized and modern approach to case management. As a Front-End Developer Intern, contributed to the Angular & TypeScript-based interface within a Spring-powered microservices architecture. Implemented new features, ensured seamless REST API integration with back-end services, and designed UI components to enhance user experience and functionality. Gained valuable enterprise software development experience and deepened expertise in modern web technologies.",
    image: "",
    siteLink: null,
    repoLink: null,
    downloadLink: null,
    technologies: [
      "Java",
      "Spring",
      "Hibernate",
      "Microservices",
      "Angular",
      "Javascript",
      "HTML",
      "CSS",
      "REST API",
    ],
    detailImages: [],
    categories: ["web"],
  },
  {
    id: "marsim",
    title: "MARSIM (Maritime Simulator Family)",
    summary: "",
    description:
      "Developed WPF-based simulation panels for MARSIM, Turkey’s first domestically developed virtual bridge simulator, designed by SimBT to enhance naval training and operational preparedness. The system provides highly accurate modeling of ship maneuvers, open-sea operations, and port entry/exit simulations. Implemented UDP-based real-time communication, enabling efficient data exchange between simulation components. Optimized system performance through multithreading techniques, ensuring smooth and responsive interactions. Additionally, contributed to visual components of the simulation using Unity, enhancing realism and user experience. This project strengthened expertise in high-performance data processing, network communication, and real-time simulation UI development.",
    image: "",
    siteLink: null,
    repoLink: null,
    downloadLink: null,
    technologies: [
      "C#",
      ".Net",
      "Unity",
      "WPF",
      "MVVM",
      "UDP",
      "Multithreading",
    ],
    detailImages: [],
    categories: ["simulation", "desktop", "game"],
  },
  {
    id: "freerun",
    title: "FreeRun",
    summary: "An exciting first-person perspective 3D parkour game.",
    description:
      "FreeRun is an exciting first-person perspective 3D parkour game developed using C# and Unity. It challenges players with dynamic obstacles and an immersive environment, pushing the boundaries of gameplay and design.",
    image: "/assets/images/projectImages/freeRun/FreeRun-project-photo.png",
    siteLink: null,
    repoLink: "https://github.com/hasanerdemak/FreeRunGame",
    downloadLink:
      "https://drive.google.com/file/d/1w6Fumg_bztKazIWO-Vp5HttaIYb8-Fnt/view",
    technologies: ["C#", "Unity"],
    detailImages: [
      "/assets/images/projectImages/freeRun/1.png",
      "/assets/images/projectImages/freeRun/2.png",
      "/assets/images/projectImages/freeRun/2.png",
      "/assets/images/projectImages/freeRun/2.png",
      "/assets/images/projectImages/freeRun/2.png",
      "/assets/images/projectImages/freeRun/3.png",
    ],
    categories: ["game", "desktop"],
  },
  {
    id: "metafuar",
    title: "MetaFuar",
    summary: "A virtual fairground for interactive product showcasing.",
    description:
      "MetaFuar is a virtual fairground platform designed for interactive product showcasing. Developed with C#, Unity, Photon, Firebase, Django, and MongoDB, it offers an immersive experience for users, integrating advanced features such as Oculus Interaction SDK.",
    image: "/assets/images/projectImages/metaFuar/MetaFuar-project-photo.png",
    siteLink: null,
    repoLink: "https://github.com/TOBB-ETU-Seniors/MetaFuar",
    downloadLink: null,
    technologies: [
      "C#",
      "Unity",
      "Photon",
      "Firebase",
      "Django",
      "MongoDB",
      "Oculus Interaction SDK",
      "Google Cloud",
    ],
    detailImages: [
      "/assets/images/MetaFuar-detail1.png",
      "/assets/images/MetaFuar-detail2.png",
      "/assets/images/MetaFuar-detail3.png",
    ],
    categories: ["game", "web"],
  },
];
