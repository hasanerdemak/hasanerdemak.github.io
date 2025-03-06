import React, { useState } from "react";
import { Project } from "../types/types";
import ProjectDetailsModal from "./ProjectDetailsModal";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false);
  const openProjectDetails = () => {
    // Burada modal açma işlevini tetikleyebilirsiniz.
    // Örneğin, global state veya context üzerinden modal yönetimi yapılabilir.

    setOpenDetailsModal(true);
    console.log("Open project details for", project.id);
  };

  return (
    <div
      className="project-card"
      data-project-id={project.id}
      data-category={project.categories.join(",")}
    >
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-links">
          <button className="btn details-btn" onClick={openProjectDetails}>
            Go to Details
          </button>
        </div>
      </div>
      {openDetailsModal && (
        <ProjectDetailsModal
          project={project}
          onClose={() => setOpenDetailsModal(false)}
          show={openDetailsModal}
        />
      )}
    </div>
  );
};

export default ProjectCard;
