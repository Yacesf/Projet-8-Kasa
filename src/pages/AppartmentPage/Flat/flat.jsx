import React from "react";
import "./flat.css";
import Gallery from "../../../components/Gallery/gallery";
import AppartmentContent from "./AppartmentContent/appartmentContent";

function Flat(props) {
  return (
    <div>
      <Gallery
        img={props.appartmentData.pictures}
        alt={props.appartmentData.title}
      />
      <AppartmentContent
       title={props.appartmentData.title}
       location={props.appartmentData.location}
       host={props.appartmentData.host}
       tags={props.appartmentData.tags}
       rating={props.appartmentData.rating}
       description={props.appartmentData.description}
       equipments={props.appartmentData.equipments}
        />
    </div>
  );
}

export default Flat;
