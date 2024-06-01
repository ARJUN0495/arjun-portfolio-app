import React from "react";
import "./Projects.css";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Footer from "../../components/Footer/Footer";
import foodDeliveryImage from "../../assests/images/Food-delivary-app.png";

import nextJsProjectImage from "../../assests/images/Nextjs-project-pic.png";
import netflixCloneImage from "../../assests/images/Netflix-clone-pic.png";

const Projects = (props) => {
  const theme = props.theme;
  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <h1 className="main-heading">Projects</h1>
        <div className="underline"></div>
        <h3 className="sub-heading">
          My personal projects are a way for me to enhance my skills as a
          developer.
        </h3>

        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <img src={foodDeliveryImage} alt="Food Delivery App" />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Food Delivery App
              </h1>
              <div className="underline"></div>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Developed a food delivery website that enables users to create
                accounts, browse menu items, add items to their cart, and remove
                items from their cart seamlessly
              </p>
              <div className="list">
                <ul className="listitems">
                  <li>React JS</li>
                  <li>Context API</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div>
                <ul className="listicons">
                  <li>
                    <a
                      href="https://github.com/ARJUN0495/food-delivery-project"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://food-delivery-app-arjun.netlify.app/"
                      target="_blank"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div projects-heading-div-mobile">
            <div className="projects-heading-text-div2">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Admin - Dashboard
              </h1>
              <div className="underline"></div>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Developed an admin dashboard project utilizing Next.js and CSS,
                incorporating a mock API to display products and user data.
                Implemented pagination to enhance user experience and improve
                data navigation.
              </p>
              <div className="list">
                <ul className="listitems">
                  <li> Next JS</li>
                  <li>CSS</li>
                  <li>Fake Api</li>
                </ul>
              </div>
              <div>
                <ul className="listicons">
                  <li>
                    <a
                      href="https://github.com/ARJUN0495/nextjs-app"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://admin-dashboard-pro.netlify.app/"
                      target="_blank"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="projects-heading-img-div">
              <img src={nextJsProjectImage} alt="Admin Dashboard" />
            </div>
          </div>
        </Fade>

        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <img src={netflixCloneImage} alt="Netflix Clone" />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Netflix Clone
              </h1>
              <div className="underline"></div>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Netflix clone is the frontend of the Netflix page with an
                authentication feature using firebase. It has netflix signin
                page, homepage, movie data. The movie data are fetched using
                TMDB Api
              </p>
              <div className="list">
                <ul className="listitems">
                  <li>React JS</li>
                  <li>React-icons</li>
                  <li>Firebase</li>
                </ul>
              </div>
              <div>
                <ul className="listicons">
                  <li>
                    <a
                      href="https://github.com/ARJUN0495/netflix-clone-project"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://netflix-clone-project.netlify.app/login"
                      target="_blank"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Projects;
