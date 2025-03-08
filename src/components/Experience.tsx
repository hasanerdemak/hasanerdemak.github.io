import React from "react";
import { experiences } from "../data/experiences";
import { formatDateRange } from "../utils/dateUtils";
import { sleep } from "../utils/sleep";

const Experience: React.FC = () => {
  // Projeye tıklandığında ilgili proje kartını bulup, kaydırma ve highlight etme
  const handleProjectClick = async (projectId: string) => {
    const projectsAllFilterBtn = document.getElementById("filter-btn-all");
    (projectsAllFilterBtn as HTMLButtonElement).click();
    await sleep(100);

    const projectElement = document.getElementById(`project-${projectId}`);
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth", block: "center" });
      projectElement.classList.add("highlight");
      setTimeout(() => {
        projectElement.classList.remove("highlight");
      }, 4000);
    }
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2>Work Experience</h2>
        <div id="experience-container" className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-logo-date">
                <img
                  src={exp.logo}
                  className="timeline-logo"
                  alt={exp.company}
                />
                <p className="timeline-date">
                  {formatDateRange(exp.startDate, exp.endDate)}
                </p>
              </div>
              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <p>
                  <strong>Position:</strong> {exp.position}
                </p>
                {exp.projects && exp.projects.length > 0 && (
                  <div className="timeline-projects">
                    <p>Projects:</p>
                    <ul>
                      {exp.projects.map((proj, idx) => (
                        <li
                          key={idx}
                          className="experience-project-link"
                          data-project-id={proj.id}
                          onClick={() => handleProjectClick(proj.id)}
                        >
                          {proj.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="timeline-responsibilities">
                    <p>Responsibilities:</p>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
