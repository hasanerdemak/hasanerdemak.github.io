import React from "react";
import { skills } from "../data/skills";
import { getCategoryDescription } from "../utils/utils";

const About: React.FC = () => {
  // Tüm kategorileri (enum) unique şekilde alalım
  const categories = Array.from(new Set(skills.map((s) => s.category)));

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

          <h3>Skills</h3>
          <div id="skills-container" className="skills-container">
            {categories.map((category) => (
              <div key={category} className="skill-category">
                {/* Enum değerini açıklama ile göster */}
                <h4>{getCategoryDescription(category)}</h4>

                <div className="skill-items">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, idx) => (
                      <div key={idx} className="skill">
                        <img
                          src={skill.badge}
                          alt={skill.name}
                          title={skill.name}
                        />
                      </div>
                    ))}
                </div>
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
