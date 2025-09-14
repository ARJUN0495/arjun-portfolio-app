import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FrontendAnime from "../../Animations/front-end-developer-anime.json";
import LottieAnimation from "../../Lottie";
import { Link } from "react-router-dom";

const Greeting = (props) => {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                Hi, I'm {greeting.title}
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                {greeting.nickname}
                <span className="nick">
                  <span>😊</span>
                </span>
              </h2>

              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, fontSize: "1.2rem" }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Link
                  to="/contact"
                  className="portfolio-repo-btn-link main-button"
                  theme={theme}
                >
                  CONTACT ME
                </Link>
                <Button
                  text="VIEW MY RESUME"
                  href={greeting.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                  newTab
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <LottieAnimation
              className="lottie"
              lotti={FrontendAnime}
              height={300}
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Greeting;
