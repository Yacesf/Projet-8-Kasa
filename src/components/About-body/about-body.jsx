import React from "react";
import "./about-body.css";
import AboutLine from "../About-line/about-line";

function AboutBody() {
  return (
    <div id="about-container">
      <AboutLine
        title="Fiabilté"
        text="Les annonces postées sur Kasa garantissent une fiabilité toltale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <AboutLine
        title="Respect"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
      />
      <AboutLine
        title="Service"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
      />
      <AboutLine
        title="Sécurité"
        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond au critères de sécurité etablis par nos services. En laissant une nite aussi a l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
}

export default AboutBody;
