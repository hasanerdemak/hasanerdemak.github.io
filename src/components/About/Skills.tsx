import React, { useState } from "react";
import { skills } from "../../data/skills";
import { getCategoryDescription } from "../../utils/utils";

const Skills: React.FC = () => {
  // Skill kategorileri için ayrı hata durumları
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean[] }>(
    skills.reduce((acc, categoryGroup) => {
      acc[categoryGroup.category] = new Array(categoryGroup.skills.length).fill(
        false
      );
      return acc;
    }, {} as { [key: string]: boolean[] })
  );

  const handleImageError = (category: string, index: number) => {
    setImageErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      newErrors[category][index] = true;
      return newErrors;
    });
  };

  const getSkillShortName = (skillName: string) => {
    // Eğer skill adı tamamen büyük harflerden oluşuyorsa, olduğu gibi döndür
    if (skillName === skillName.toUpperCase()) {
      return skillName;
    }

    // Boşlukları veya "-" karakterlerini kullanarak kelimelere ayır ve her kelimenin ilk harfini al
    const shortName = skillName
      .split(/[\s\-]+/) // Boşluk ve tireyi ayırıcı olarak kullanıyoruz
      .map((word) => word.charAt(0).toUpperCase()) // Her kelimenin ilk harfini al ve büyük yap
      .join(""); // Harfleri birleştir

    return shortName;
  };

  return (
    <div className="skills-section">
      <h3>Skills</h3>
      <div id="skills-container" className="skills-container">
        {skills.map((categoryGroup) => (
          <div key={categoryGroup.category} className="skill-card">
            <h4>{getCategoryDescription(categoryGroup.category)}</h4>
            <div className="skill-items">
              {categoryGroup.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill">
                  {!imageErrors[categoryGroup.category][skillIndex] ? (
                    <img
                      src={skill.badge}
                      alt={skill.name}
                      title={skill.name}
                      onError={() =>
                        // Resim yüklenemezse hata fonksiyonunu çalıştır
                        handleImageError(categoryGroup.category, skillIndex)
                      }
                    />
                  ) : (
                    // Resim yoksa yazıyı göster
                    <div className="icon-text">
                      {getSkillShortName(skill.name)}
                    </div>
                  )}
                  <h5>{skill.name}</h5>
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
