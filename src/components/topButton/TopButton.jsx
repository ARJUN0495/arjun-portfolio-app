import React, { useEffect } from "react";
import "./TopButton.css";

const TopButton = ({ theme }) => {
  useEffect(() => {
    const scrollFunction = () => {
      const topButton = document.getElementById("topButton");
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null; // Cleanup the scroll event on component unmount
    };
  }, []);

  const GoUpEvent = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
};

export default TopButton;
