import React from "react";
import { skills } from "../data/skills";
import { getCategoryDescription } from "../utils/utils";

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Üst kısımda About metni ve resim yan yana */}
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              As a software developer, I have extensive experience with C#,
              Java, C, Python, Unity, .NET, WPF, and Django, and have applied
              these tools to a variety of academic and personal projects.
              Through my coursework and extracurricular activities, I have
              gained expertise in areas such as software engineering, algorithm
              analysis, data structures, design patterns, machine learning,
              artificial intelligence, and natural language processing. I am
              committed to using my skills and experience to contribute to the
              success of any team I am a part of and am always eager to take on
              new challenges and learn from others.
            </p>
            <p>
              <strong>Areas of Interest:</strong>
            </p>
            <ul>
              <li>Back-End Development</li>
              <li>Full-Stack Development</li>
              <li>Game Development</li>
              <li>AI, ML, DL, NLP</li>
            </ul>
            <a
              href="/assets/cv/Hasan_Erdem_Ak_CV_Eng.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
          <div className="about-image">
            <img src="/assets/images/hasan-erdem-ak.jpg" alt="Hasan Erdem Ak" />
          </div>
        </div>

        {/* Aşağıda ayrı bir satırda Skills bölümü */}
        <div className="skills-section">
          <h3>Skills</h3>
          <div id="skills-container" className="skills-container">
            {skills.map((categoryGroup) => (
              <div key={categoryGroup.category} className="skill-card">
                <h4>{getCategoryDescription(categoryGroup.category)}</h4>
                <div className="skill-items">
                  {categoryGroup.skills.map((skill, idx) => (
                    <div key={idx} className="skill">
                      <img
                        src={skill.badge}
                        alt={skill.name}
                        title={skill.name}
                      />
                      {/* Görünmez fakat arama yapılabilir metin */}
                      <span className="sr-only">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
