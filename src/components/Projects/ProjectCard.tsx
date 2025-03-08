import React, { useState } from "react";
import { Project } from "../../types/types";
import ProjectDetailsModal from "./ProjectDetailsModal";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState<boolean>(false);
  const charachterLimit = 100;

  const toggleSummary = () => {
    setIsSummaryExpanded(!isSummaryExpanded);
  };

  return (
    <div
      id={`project-${project.id}`}
      className="project-card"
      data-project-id={project.id}
      data-category={project.categories.join(",")}
    >
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="no-image-placeholder">No Image Available</div> // Yedek arka plan
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>
          {isSummaryExpanded
            ? project.summary
            : project.summary.length > charachterLimit
            ? `${project.summary.slice(0, charachterLimit)}...`
            : project.summary}
          {project.summary.length > charachterLimit && (
            <i onClick={toggleSummary} className="show-more">
              {isSummaryExpanded ? "Show Less" : "Show More"}
            </i>
          )}
        </p>
        <div className="project-links">
          <button
            className="btn details-btn"
            onClick={() => setOpenDetailsModal(true)}
          >
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
