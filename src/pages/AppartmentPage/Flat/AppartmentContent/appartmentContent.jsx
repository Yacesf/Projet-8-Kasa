import React from "react";
import "./appartmentContent.css";
import Collapse from "../../../../components/Collapse/collapse"

function AppartmentContent(props) {

  console.log(props.equipments);
  return (
    <div id="flat-container">
        <div id="flat-container__information">
          <h1>{props.title}</h1>
          <span>{props.location}</span>
        </div>
        <div id="flat-container__host">
          <span>{props.host.name}</span>
          <img src={props.host.picture} alt={props.host.name}></img>
        </div>
      <div id="flat-container__second-line">
        <div id="flat-container__tags">
          {props.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div id="flat-container__stars">
          {[1, 2, 3, 4, 5].map((index, idx) => (
            <i
              key={idx}
              className={`fa-solid fa-star ${
                index <= props.rating ? "stars__color" : ""
              }`}
            ></i>
          ))}
        </div>
      </div>
      <div id="flat-container__third-line">
        <div id="flat-container__description">
          <Collapse title={"Description"} text={props.description} />
        </div>
        <div id="flat-container__equipments">
          <Collapse
            title={"Equipements"}
            text={props.equipments.map((equipment) => (
              <span key={equipment}>{equipment}</span>
            ))}
          />
        </div>
      </div>
    </div>
  );
}

export default AppartmentContent;
