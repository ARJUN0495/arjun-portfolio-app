import React from "react";
import "./Button.css";

const Button = ({ text, className, href, newTab, theme }) => {
  const onMouseEnter = (event) => {
    const el = event.target;
    el.style.color = theme.text;
    el.style.backgroundColor = theme.body;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.color = theme.body;
    el.style.backgroundColor = theme.text;
  };

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
