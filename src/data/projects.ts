import { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: "smart",
    title: "SMArt (Security Management Art)",
    summary: "",
    description:
      "Developed a software platform for Securitas, a global leader in security solutions, as part of Siren IT Solutions. The platform enables administrative employees to securely record and report work-related transactions while allowing field employees to fulfill and document operational tasks. It enhances workflow efficiency and department-wide communication. As a Full-Stack Developer, contributed to both the back-end (C#, .NET, Entity Framework) and front-end (React, TypeScript), focusing on security, usability, and scalability. Designed and implemented a secure, user-friendly internal web portal that aligns with Securitas’ high standards for operational excellence.",
    image: "/assets/images/projectImages/freeRun/FreeRun-project-photo.png",
    siteLink: null,
    repoLink: null,
    downloadLink: null,
    technologies: ["C#", ".Net", "Entity Framework", "React", "Typescript"],
    detailImages: [],
    categories: ["web"],
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
    ],
    detailImages: [
      "/assets/images/MetaFuar-detail1.png",
      "/assets/images/MetaFuar-detail2.png",
      "/assets/images/MetaFuar-detail3.png",
    ],
    categories: ["game", "web"],
  },
];
