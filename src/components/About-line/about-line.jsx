import React, { useState } from "react";
import "./about-line.css";

function AboutLine(props) {
  const [isTextVisible, setTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisible(!isTextVisible);
  };

  return (
    <div className="about-line">
      <div className="about-line__title">
        <h2>{props.title}</h2>
        <div className="about-line__arrow" onClick={toggleTextVisibility}>
          <i
            className="fa-solid fa-chevron-down"
            style={{ display: isTextVisible ? "none" : "flex" }}
          ></i>
          <i
            className="fa-solid fa-chevron-up"
            style={{ display: isTextVisible ? "flex" : "none" }}
          ></i>
        </div>
      </div>
      <div
        className="about-line__text"
        style={{ display: isTextVisible ? "block" : "none" }}
      >
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default AboutLine;
