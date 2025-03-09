import React, { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCategory } from "../../types/types";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = projects.filter((project) => {
    if (filter === ProjectCategory.ALL) return true;
    return project.categories.includes(filter);
  });

  const filterButtons = [
    { label: "All", value: ProjectCategory.ALL },
    { label: "Web", value: ProjectCategory.WEB },
    { label: "Desktop", value: ProjectCategory.DESKTOP },
    { label: "Game", value: ProjectCategory.GAME },
    { label: "Simulation", value: ProjectCategory.SIMULATION },
    { label: "AI", value: ProjectCategory.AI },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-filters">
          {filterButtons.map((btn) => (
            <button
              id={`filter-btn-${btn.value}`}
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
