import React from "react";
import { Icon } from "@iconify/react";
import html5Icon from "@iconify/icons-logos/html-5";
import css3Icon from "@iconify/icons-logos/css-3";
import sassIcon from "@iconify/icons-logos/sass";
import materialUiIcon from "@iconify/icons-logos/material-ui";
import reactIcon from "@iconify/icons-logos/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import firebaseIcon from "@iconify/icons-logos/firebase";
import gitIcon from "@iconify/icons-logos/git";
import githubIcon from "@iconify/icons-logos/github-icon";
import netlifyIcon from "@iconify/icons-logos/netlify";
import "./SoftwareSkill.css";

const iconData = [
  { icon: html5Icon, title: "HTML5" },
  { icon: css3Icon, title: "CSS3" },
  { icon: sassIcon, title: "SASS" },
  { icon: materialUiIcon, title: "Material-UI" },
  { icon: reactIcon, title: "React" },
  { icon: javascriptIcon, title: "JavaScript" },
  { icon: firebaseIcon, title: "Firebase" },
  { icon: gitIcon, title: "Git" },
  { icon: githubIcon, title: "GitHub" },
  { icon: netlifyIcon, title: "Netlify" },
];

const SoftwareSkill = () => {
  return (
    <div>
      <div className="software-skills-main-div">
        <div className="software-skill-container">
          {iconData.map((iconItem, index) => (
            <Icon
              key={index}
              icon={iconItem.icon}
              title={iconItem.title}
              className="software-skill-icons"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareSkill;
