import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link, useLocation } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const Header = () => {
  const link = settings.isSplash ? "/splash" : "/home";
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const menuItems = [
    { to: "/home", label: "Home" },
    { to: "/education", label: "Education" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Me" },
  ];

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div className="header-wrapper">
        <header className="header">
          <NavLink to={link} as={Link} className="logo">
            <span className="logo-name">{greeting.logo_name}</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  as={Link}
                  onClick={() => handleNavLinkClick(item.to)}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{
                    fontWeight: activeLink === item.to ? "bold" : "normal",
                    fontSize: "18px",
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
