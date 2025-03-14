import { Experience } from "../types/types";
import { projects } from "./projects";

export const experiences: Experience[] = [
  {
    company: "Siren IT Solutions",
    position: "Full-stack Developer & Assistant Team Leader",
    projects: projects.filter((p) => ["smart", "secFire"].includes(p.id)),
    startDate: "2023-10",
    endDate: "",
    responsibilities: [
      "Developing a secure, user-friendly internal web portal for Securitas, a global leader in security solutions, using C#, .NET, and Entity Framework for the back end, and React with TypeScript for the front end.",
      "Designing and testing RESTful APIs with TypeScript, Postman, and Swagger, implementing best practices for security and scalability.",
      "Co-leading a team of nine (eight software developers and one business analyst) in collaboration with the team lead.",
      "Providing technical guidance to junior developers, coordinating project assignments, and overseeing code reviews, task report evaluations, and team meetings to ensure the timely delivery of high-quality software solutions.",
    ],
    logo: "/assets/images/company-logos/siren.png",
  },
  {
    company: "Bumper Technology",
    position: "Back-end Developer Intern",
    projects: [],
    startDate: "2022-09",
    endDate: "2022-12",
    responsibilities: [
      "Developed applications for the company's website admin panel using Python, Django, SQLite, HTML, CSS, and JavaScript following the MVT pattern.",
      "Created an application to transfer data from a text field to the database, supporting CSV input/output and implementing data validation.",
    ],
    logo: "/assets/images/company-logos/bumper.png",
  },
  {
    company: "Innova IT Solutions",
    position: "Front-end Developer Intern",
    projects: projects.filter((p) => ["lega"].includes(p.id)),
    startDate: "2022-01",
    endDate: "2022-04",
    responsibilities: [
      "Contributed to the development of LEGA, a Spring-based web application built on a microservices architecture following REST principles.",
      "Implemented front-end components using TypeScript and Angular, ensuring seamless integration with back-end services.",
    ],
    logo: "/assets/images/company-logos/innova.png",
  },
  {
    company: "SimBT Simulation Science and Technologies Ltd.",
    position: "Full-stack Developer Intern",
    projects: projects.filter((p) => ["marsim"].includes(p.id)),
    startDate: "2021-05",
    endDate: "2021-09",
    responsibilities: [
      "Developed WPF applications in .NET using C#, XAML, and MVVM, contributing to Turkey’s first domestically developed virtual bridge simulator",
      "Integrated Unity for specific simulation components, enhancing realism and interactivity.",
      "Designed and implemented simulation panels, utilizing UDP for real-time communication and multithreading to improve system performance and responsiveness.",
    ],
    logo: "/assets/images/company-logos/simbt.png",
  },
];
