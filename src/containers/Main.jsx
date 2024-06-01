import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { settings } from "../portfolio.js";
import Home from "../pages/home/HomeComponent.jsx";
import Education from "../pages/education/EducationComponent.jsx";
import Contact from "../pages/contact/ContactComponent.jsx";
import Splash from "../pages/splash/Splash.jsx";
import Projects from "../pages/projects/Projects.jsx";

const Main = ({ theme }) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {settings.isSplash ? (
            <>
              <Route path="/" element={<Splash theme={theme} />} />
              <Route path="/home" element={<Home theme={theme} />} />
              <Route path="/education" element={<Education theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
              <Route path="/splash" element={<Splash theme={theme} />} />
              <Route path="/projects" element={<Projects theme={theme} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/home" element={<Home theme={theme} />} />
              <Route path="/education" element={<Education theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
              <Route path="/projects" element={<Projects theme={theme} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
