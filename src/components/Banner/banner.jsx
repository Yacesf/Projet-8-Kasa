import React from "react";
import "./banner.css";

function Banner(props) {
  return (
    <div id="banner">
      <img src={props.img} alt={props.alt}></img>
      <div id="banner__text">
      <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Banner;
