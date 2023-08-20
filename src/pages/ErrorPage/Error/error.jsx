import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

function ErrorContent() {
  return (
    <div id="error">
      <h1 id="error__title">404</h1>
      <p id="error__title__description">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/"}>
        <div id="error__return-home">Retourner sur la page d'accueil</div>
      </Link>
    </div>
  );
}

export default ErrorContent;
