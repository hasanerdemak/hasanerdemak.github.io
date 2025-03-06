import React, { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.categories
      .map((cat) => cat.toLowerCase())
      .includes(filter.toLowerCase());
  });

  const filterButtons = [
    { label: "All", value: "all" },
    { label: "Mobile", value: "mobile" },
    { label: "Desktop", value: "desktop" },
    { label: "Web", value: "web" },
    { label: "Game", value: "game" },
    { label: "AI", value: "ai" },
    { label: "Machine Learning", value: "machine-learning" },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-filters">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              className={`filter-btn ${filter === btn.value ? "active" : ""}`}
              onClick={() => setFilter(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="explore-more-card">
          <a
            href="https://github.com/hasanerdemak"
            target="_blank"
            rel="noopener noreferrer"
            className="btn explore-btn"
          >
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
