import React from "react";
import { Modal } from "reactstrap";

import { Project } from "../types/types";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
  show: boolean;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
  show,
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={show}
      toggle={onClose}
      className="modal-lg"
      backdrop="static"
    >
      <div className="project-details-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        {project.image && <img src={project.image} alt={project.title} />}
        <p>{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <p>
              <strong>Technologies:</strong>
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                listStyle: "disc",
                paddingLeft: "1.5rem",
              }}
            >
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="project-links" style={{ marginBottom: "1rem" }}>
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Repo
            </a>
          )}
          {project.downloadLink && (
            <a
              href={project.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download
            </a>
          )}
        </div>
        {project.detailImages && project.detailImages.length > 0 && (
          <div>
            <h3>Additional Images</h3>
            <div className="project-gallery-wrapper">
              <div className="project-gallery" id={`gallery-${project.id}`}>
                {project.detailImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="gallery-item"
                    data-image={img}
                    data-index={idx}
                  >
                    <img src={img} alt={`${project.title} detail ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
