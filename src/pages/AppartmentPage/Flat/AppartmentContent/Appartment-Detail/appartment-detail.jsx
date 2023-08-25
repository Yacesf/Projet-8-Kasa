import React, { useState } from "react";
import "./appartment-detail.css";

function AppartmentDetail(props) {
  const [isTextVisible, setTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisible(!isTextVisible);
  };

  return (
    <>
      <div className="block__title">
        <h2>{props.title}</h2>
        <div className="flat-container__arrow" onClick={toggleTextVisibility}>
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
        className="block__text"
        style={{ display: isTextVisible ? "flex" : "none" }}
      >
        {props.text}
      </div>
    </>
  );
}

export default AppartmentDetail;
