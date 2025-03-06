import React, { useEffect, useState } from "react";
import { Experience } from "../types/types";

const Experiences: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/assets/data/experiences.json")
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => setExperiences(data.experiences))
      .catch((error) => console.error("Error fetching experience:", error));
  }, []);

  useEffect(() => {
    console.log("Experiences:", experiences);
  }, [experiences]);

  const formatDateRange = (startDate: string, endDate: string): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
    };
    return `${start.toLocaleDateString(
      undefined,
      options
    )} - ${end.toLocaleDateString(undefined, options)}`;
  };

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
                          {proj.name}
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
