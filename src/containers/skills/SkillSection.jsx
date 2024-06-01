import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import BrowserTech from "../../Animations/browserTech.json";
import Libraries from "../../Animations/libraries.json";
import "./Skillsection.css";
import LottieAnimation from "../../Lottie";

function GetSkillSvg(props) {
  if (props.fileName === "BrowserTech")
    return (
      <LottieAnimation
        className="lottie"
        lotti={BrowserTech}
        height={300}
        width={"100%"}
      />
    );
  else if (props.fileName === "Libraries")
    return (
      <LottieAnimation
        className="lottie"
        lotti={Libraries}
        height={300}
        width={350}
      />
    );
  return (
    <LottieAnimation
      className="lottie"
      lotti={BrowserTech}
      height={600}
      width={"100%"}
    />
  );
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{
                            color: theme.secondaryText,
                            lineHeight: "1.6rem",
                          }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
                <div className="space" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
