import React, { useContext } from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode skills-main-div" : "skills-main-div"} id="skills">
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          
          {/* --- HEADING --- */}
          <h1 className="skills-heading">{skillsSection.title}</h1>
          <p className={isDark ? "dark-mode skills-subtitle" : "skills-subtitle"}>
            {skillsSection.subTitle}
          </p>

          {/* --- SKILL CARDS GRID --- */}
          <div className="skills-grid">
            {skillsSection.skillCategories.map((category, index) => (
              <div className="skill-card" key={index}>
                
                {/* Icon for the card */}
                <div className="skill-card-icon">
                  {category.icon}
                </div>

                {/* Title of the card */}
                <h3 className="skill-card-title">{category.title}</h3>

                {/* List of skill pills */}
                <div className="skill-pills-container">
                  {category.skills.map((skill, i) => (
                    <span className="skill-pill" key={i}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}