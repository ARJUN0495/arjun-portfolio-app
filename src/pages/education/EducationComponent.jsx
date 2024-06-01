import React from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Footer from "../../components/Footer/Footer";
import EducationImg from "./EducationImg";

const Education = (props) => {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <div className="underline"></div>
              <Educations theme={theme} />
            </div>
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
          </div>
        </Fade>

        <Certifications theme={theme} />
      </div>
      <Footer theme={theme} />

      <TopButton theme={theme} />
    </div>
  );
};

export default Education;
