import React from "react";
import "./flat.css";
import "./Carrousel/carrousel";
import Carrousel from "./Carrousel/carrousel";

function Flat(props) {
  return (
    <div>
      <Carrousel
        img={props.appartmentData.pictures}
        alt={props.appartmentData.title}
      />
    </div>
  );
}

export default Flat;
