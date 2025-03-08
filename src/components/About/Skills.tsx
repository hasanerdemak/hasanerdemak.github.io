import React from "react";
import { skills } from "../../data/skills";
import { getCategoryDescription } from "../../utils/utils";

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h3>Skills</h3>
      <div id="skills-container" className="skills-container">
        {skills.map((categoryGroup) => (
          <div key={categoryGroup.category} className="skill-card">
            <h4>{getCategoryDescription(categoryGroup.category)}</h4>
            <div className="skill-items">
              {categoryGroup.skills.map((skill, idx) => (
                <div key={idx} className="skill">
                  <img src={skill.badge} alt={skill.name} title={skill.name} />
                  {/* Görünmez fakat arama yapılabilir metin */}
                  <span className="sr-only">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
