import { Project, ProjectCategory } from "../types/types";

export const projects: Project[] = [
  {
    id: "smart",
    title: "SMArt (Security Management Art)",
    summary:
      "Internal web portal for managing security operations and communication at Securitas.",
    description:
      "Developed a software platform for Securitas, a global leader in security solutions, as part of Siren IT Solutions. The platform enables administrative employees to securely record and report work-related transactions while allowing field employees to fulfill and document operational tasks. It enhances workflow efficiency and department-wide communication. As a Full-Stack Developer, contributed to both the back-end (C#, .NET, Entity Framework) and front-end (React, TypeScript), focusing on security, usability, and scalability. Designed and implemented a secure, user-friendly internal web portal that aligns with Securitas’ high standards for operational excellence.",
    image: "/assets/images/project-images/smart/smart.png",
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
    categories: [ProjectCategory.WEB],
  },
  {
    id: "secFire",
    title: "Securitas Fire Services Website",
    summary:
      "Official corporate website of Securitas Fire Services, showcasing fire protection services and solutions.",
    description:
      "The Securitas Fire Services Website serves as the official online presence for Securitas' fire safety and protection services, catering primarily to industrial facilities, shopping centers, tourism complexes, and other high-risk environments. My role included enhancing existing website security by refining the Content-Security-Policy (CSP), upgrading Bootstrap and jQuery libraries, implementing UI improvements, and managing server-side maintenance on the FTP-hosted platform to ensure ongoing performance and security.",
    image: "/assets/images/project-images/secfire/secfire.png",
    siteLink: "https://securitasitfaiye.com/index.htm",
    repoLink: null,
    downloadLink: null,
    technologies: ["HTML", "CSS", "FTP", "Bootstrap", "jQuery", "UI/UX"],
    detailImages: [],
    categories: [ProjectCategory.WEB],
  },
  {
    id: "lega",
    title: "LEGA",
    summary:
      "A centralized legal management platform designed for corporate lawyers and law offices.",
    description:
      "LEGA is a modern litigation and enforcement management platform developed by Innova, providing corporate legal departments and contracted law offices with a centralized and efficient way to manage cases and workflows. Available in two versions (LEGA and LEGA Lite), it integrates advanced front-end technologies with Angular and TypeScript, supported by a robust microservices back-end powered by Spring. As a Front-End Developer Intern, contributed by implementing key features, ensuring seamless integration with RESTful APIs, and enhancing user experience through responsive UI components.",
    image: "/assets/images/project-images/lega/lega.png",
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
    categories: [ProjectCategory.WEB],
  },
  {
    id: "marsim",
    title: "MARSIM (Maritime Simulator Family)",
    summary:
      "Turkey’s first domestically developed virtual bridge simulator for advanced maritime training.",
    description:
      "MARSIM, developed by SimBT, is Turkey's first domestically created virtual bridge simulator designed to enhance naval training and operational readiness. It offers highly realistic simulations of ship maneuvers, open-sea navigation, and port entry/exit operations. My contributions included developing WPF-based simulation panels, implementing UDP-based real-time data communication between simulation components, optimizing performance through multithreading, and enhancing visual realism with Unity integration. The simulator significantly advances maritime training through immersive and responsive simulation technology.",
    image: "/assets/images/project-images/marsim/marsim.png",
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
    detailImages: [
      "/assets/images/project-images/marsim/marsim-product-family.png",
      "/assets/images/project-images/marsim/full-mission-bridge-simulator.png",
      "/assets/images/project-images/marsim/radar-training.png",
      "/assets/images/project-images/marsim/tug-simulator.png",
      "/assets/images/project-images/marsim/vr-bridge-simulator.png",
      "/assets/images/project-images/marsim/navigation-simulator.png",
      "/assets/images/project-images/marsim/naval-training.png",
      "/assets/images/project-images/marsim/emergency-response-training.png",
      "/assets/images/project-images/marsim/advanced-fire-fighting-training.png",
    ],
    categories: [ProjectCategory.SIMULATION, ProjectCategory.DESKTOP],
  },

  {
    id: "metaFuar",
    title: "MetaFuar",
    summary:
      "Interactive virtual fairground for showcasing products in a VR environment.",
    description:
      "MetaFuar is a virtual fairground platform enabling immersive product exhibitions. Developed using C#, Unity, Photon, Firebase, Django, MongoDB, and Oculus SDK, it provides interactive, real-time experiences for users in virtual reality.",
    image: "/assets/images/project-images/metafuar/metafuar-project-photo.png",
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
      "/assets/images/project-images/metafuar/fair.png",
      "/assets/images/project-images/metafuar/iphone-exhibition.png",
      "/assets/images/project-images/metafuar/parking-lot-entrance-1.png",
      "/assets/images/project-images/metafuar/parking-lot-entrance-2.png",
      "/assets/images/project-images/metafuar/bowling.png",
      "/assets/images/project-images/metafuar/bowling-2.png",
      "/assets/images/project-images/metafuar/race-track.png",
    ],
    categories: [ProjectCategory.GAME, ProjectCategory.SIMULATION],
  },
  {
    id: "freeRun",
    title: "FreeRun",
    summary:
      "First-person 3D parkour game challenging players with dynamic environments.",
    description:
      "FreeRun is a thrilling first-person perspective 3D parkour game built using C# and Unity. Players navigate challenging obstacles in immersive environments, pushing gameplay boundaries with dynamic interaction and engaging level design.",
    image: "/assets/images/project-images/freerun/freerun-project-photo.png",
    siteLink: null,
    repoLink: "https://github.com/hasanerdemak/FreeRunGame",
    downloadLink:
      "https://drive.google.com/file/d/1w6Fumg_bztKazIWO-Vp5HttaIYb8-Fnt/view",
    technologies: ["C#", "Unity"],
    detailImages: [
      "/assets/images/project-images/freerun/main-menu.png",
      "/assets/images/project-images/freerun/start-menu.png",
      "/assets/images/project-images/freerun/ingame-ss.png",
      "/assets/images/project-images/freerun/easy-map.png",
      "/assets/images/project-images/freerun/medium-map.png",
      "/assets/images/project-images/freerun/hard-map.png",
    ],
    categories: [ProjectCategory.GAME, ProjectCategory.DESKTOP],
  },
  {
    id: "musicGenreClassification",
    title: "Music Genre Classification with Turkish Lyrics",
    summary: "AI-powered music genre classification using Turkish song lyrics.",
    description:
      "Built a genre classification model for Turkish music using NLP and deep learning techniques. Created a corpus, trained Bi-LSTM networks, and documented findings in an IEEE-formatted research paper.",
    image:
      "/assets/images/project-images/music-genre-classification/music-genre-classification-2.png",
    siteLink: null,
    repoLink: "https://github.com/hasanerdemak/NLP-Music-Genre-Classification",
    downloadLink: null,
    technologies: [],
    detailImages: [],
    categories: [ProjectCategory.AI],
  },
  {
    id: "aiLogisticCentersTurkey",
    title: "AI-driven Logistics Center Optimization",
    summary:
      "Optimization model for logistics center placement across Turkey using AI and Linear Programming.",
    description:
      "Developed an AI-driven model leveraging linear programming to optimize logistics center locations in Turkey, minimizing costs and enhancing efficiency. Delivered detailed data analysis and visualizations.",
    image:
      "/assets/images/project-images/ai-logistic-centers-turkey/ai-logistic-centers-turkey.png",
    siteLink: null,
    repoLink: "https://github.com/hasanerdemak/AI-Logistics-Centers-Turkey-LP",
    downloadLink: null,
    technologies: [],
    detailImages: [
      "/assets/images/project-images/ai-logistic-centers-turkey/annual-demand-by-region.png",
      "/assets/images/project-images/ai-logistic-centers-turkey/customer-and-potential-warehouse-locations.png",
    ],
    categories: [ProjectCategory.AI],
  },
];

// LeetCode solutions
// toolify-ui
// AgeOfEmpires
// CarRaceGame
// MetroHattiVeritabaniYonetimSistemi
