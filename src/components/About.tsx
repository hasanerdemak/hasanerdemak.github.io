import React, { useEffect, useState } from "react";
import { TechStackItem } from "../types/types";

const About: React.FC = () => {
  const [techstack, setTechstack] = useState<TechStackItem[]>([]);

  useEffect(() => {
    fetch("assets/data/techstack.json")
      .then((response) => response.json())
      .then((data) => setTechstack(data.techstack))
      .catch((error) => console.error("Error fetching techstack:", error));
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            As a software developer, I have extensive experience with C#, Java,
            C, Python, Unity, .NET, WPF, and Django, and have applied these
            tools to a variety of academic and personal projects. Through my
            coursework and extracurricular activities, I have gained expertise
            in areas such as software engineering, algorithm analysis, data
            structures, design patterns, machine learning, artificial
            intelligence, and natural language processing. I am committed to
            using my skills and experience to contribute to the success of any
            team I am a part of and am always eager to take on new challenges
            and learn from others.
          </p>
          <a
            href="/assets/cv/Hasan_Erdem_Ak_CV_Eng.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
          <h3>Tech Stack</h3>
          <div id="techstack-container" className="tech-stack">
            {techstack.map((tech, idx) => (
              <div key={idx} className="tech-item">
                <img src={tech.badge} alt={tech.name} title={tech.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img src="/assets/images/hasan-erdem-ak.jpg" alt="Hasan Erdem Ak" />
        </div>
      </div>
    </section>
  );
};

export default About;
