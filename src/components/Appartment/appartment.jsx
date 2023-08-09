import React from "react";
import "./appartment.css";

function Appartment(props) {
  return (
    <div id={props.id} className="appartment__item">
      <img
        className="appartment__item__cover"
        src={props.cover}
        alt={props.title}
      ></img>
      <p className="appartment__item__name">{props.title}</p>
    </div>
  );
}

export default Appartment;
