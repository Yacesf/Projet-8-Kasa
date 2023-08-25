import React from "react";
import { Link } from "react-router-dom";
import "./appartmentCard.css";

function appartmentCard(props) {
  return (
    <Link
      id={props.id}
      className="appartment__item"
      to={`/appartment/${props.id}`}
    >
      <img
        className="appartment__item__cover"
        src={props.cover}
        alt={props.title}
      ></img>
      <p className="appartment__item__name">{props.title}</p>
    </Link>
  );
}

export default appartmentCard;
