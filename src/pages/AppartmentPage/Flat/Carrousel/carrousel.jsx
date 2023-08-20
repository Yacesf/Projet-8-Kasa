import React from "react";
import "./carrousel.css";

function Carrousel(props) {
  return (
    <div className="carrousel-container">
      <img src={props.img[0]} alt={props.alt}></img>
    </div>
  );
}

export default Carrousel;
