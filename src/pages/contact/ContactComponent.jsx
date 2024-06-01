import React from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import Button from "../../components/button/Button.jsx";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import HeaderImg from "../../Animations/laptop.json";
import ContactImg from "../../Animations/contact.json";
import Footer from "../../components/Footer/Footer.jsx";
import LottieAnimation from "../../Lottie.jsx";
import contactImage from "../../assests/images/arjun_pic.jpg";

const Contact = ({ theme }) => {
  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {contactPageData.contactSection.title}
              </h1>
              <div className="underline"></div>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactPageData.contactSection.description}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
            <div className="contact-heading-img-div">
              <img className="Arjun_profile" src={contactImage} alt="" />
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-img-div">
              <LottieAnimation
                className="lottie"
                lotti={HeaderImg}
                height={500}
                width={350}
              />
            </div>
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {contactPageData.blogSection.title}
              </h1>
              <div className="underline"></div>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactPageData.blogSection.subtitle}
              </p>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="address-heading-text-div">
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {contactPageData.addressSection.title}
              </h1>
              <div className="underline"></div>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactPageData.addressSection.subtitle}
              </p>
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {contactPageData.phoneSection.title}
              </h1>
              <div className="underline"></div>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactPageData.phoneSection.subtitle}
              </p>
            </div>
            <div className="contact-heading-img-div">
              <LottieAnimation
                className="lottie"
                lotti={ContactImg}
                height={400}
                width={350}
              />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} />

      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
