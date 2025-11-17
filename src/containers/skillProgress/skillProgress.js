import React from "react";
// We are ignoring the SCSS file for layout, but still importing it for the progress bars
import "./Progress.scss"; 
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build"; // This is the "Robot Arms" animation
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    
    // --- STYLES TO FORCE THE LAYOUT ---
    const containerStyle = {
      display: "flex",       // This creates the row
      width: "90%",
      padding: "20px 10px",
      margin: "0px auto",
      marginTop: "2rem",
      alignItems: "center"  // This centers them vertically
    };

    const columnStyle = {
      flex: 1, // This makes each column take up 50%
      marginBottom: "30px"
    };

    const imageStyle = {
      ...columnStyle, // Gets the `flex: 1`
      marginLeft: "80px",
      maxWidth: "90%",
      height: "auto"
    };
    // --- END OF STYLES ---

    return (
      <Fade bottom duration={1000} distance="20px">
        
        {/* We apply the style directly to the container */}
        <div className="skills-container" style={containerStyle}>
          
          {/* We apply the style to the first column */}
          <div className="skills-bar" style={columnStyle}>
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    {/* This is the clean, correct code */}
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* We apply the style to the second column */}
          <div className="skills-image" style={imageStyle}>
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              // This is the clean, correct code
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}