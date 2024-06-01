import React, { useState, useEffect } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";

function SplashScreen() {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <div className="logo__name">
          <h2 style={{ color: "#080f5b" }}>
            Hi There, Welcome to my portfolio site<span role="img">👋 </span>
          </h2>
          <h1 style={{ color: "#080f5b" }}>Arjun</h1>
        </div>
      </div>
    </div>
  );
}

const Splash = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setRedirect(true), 2000);

    return () => clearTimeout(id);
  }, []);

  return redirect ? <Navigate to="/home" /> : <SplashScreen />;
};

export default Splash;
