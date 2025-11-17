import React, { useContext } from "react";
import { workExperiences } from "../../portfolio";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the library's styles
import StyleContext from "../../contexts/StyleContext";
import { MdWork } from "react-icons/md"; // Import a default icon
import "./WorkExperience.scss"; // Import your (mostly empty) SCSS file

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display) return null;

  // --- Style logic for the timeline ---
  
  // This makes the cards light or dark
  const cardStyle = {
    background: isDark ? "#252525" : "#f9f9f9", // Dark or light card
    color: isDark ? "#ffffff" : "#333333",     // Dark or light text
    boxShadow: "none", // Remove default shadow
    borderRadius: "12px",
  };
  
  // This styles the icon in the circle
  const iconStyle = {
    background: "#6c63ff", // Your theme's purple color
    color: "#ffffff",
  };
  
  // This makes the timeline's main line dark or light
  const lineStyle = {
    background: isDark ? "#ffffff" : "#b3b3b3",
  };
  // --- End of style logic ---

  return (
    // This div is now the container you wanted
    <div id="experience" className="experience-container">
      <h1 className="experience-heading">Professional Experience</h1>

      <VerticalTimeline lineColor={lineStyle.background}>
        {workExperiences.experience.map((exp, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={cardStyle} // Apply card style
            contentArrowStyle={{
              // Makes arrow match card background
              borderRight: `7px solid ${cardStyle.background}`, 
            }}
            date={exp.date}
            iconStyle={iconStyle} // Apply icon style
            icon={<MdWork />} // Use the default work icon
          >
            {/* Your existing data structure fits perfectly */}
            <h3 className="vertical-timeline-element-title">
              {exp.role}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.company}
            </h4>
            
            <p>{exp.desc}</p>

            {exp.descBullets?.length > 0 && (
              <ul>
                {exp.descBullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}