import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="footer-content">
            <h6 className="footer-content-text">Arjun</h6>
          </div>
          <div className="footer-text">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </footer>
      </div>
    </Fade>
  );
};

export default Footer;
