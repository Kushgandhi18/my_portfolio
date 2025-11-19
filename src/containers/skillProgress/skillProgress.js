import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function SkillProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="progress-main">

        {/* LEFT COLUMN */}
        <div className="progress-left">
          <h1 className="progress-heading">Proficiency</h1>

          {techStack.experience.map((exp, i) => (
            <div className="progress-item" key={i}>
              <p className="progress-title">{exp.Stack}</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: exp.progressPercentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="progress-right">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img
              alt="Skills"
              src={require("../../assets/images/skill.svg")}
              className="progress-img"
            />
          )}
        </div>

      </div>
    </Fade>
  );
}
