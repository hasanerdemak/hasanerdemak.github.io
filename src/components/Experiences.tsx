import React from "react";
import { experiences } from "../data/experiences";
import { formatDateRange } from "../utils/dateUtils";

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="section experiences-section">
      <div className="container">
        <h2>Work Experience</h2>
        <div id="experiences-container" className="timeline">
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

export default Experiences;
