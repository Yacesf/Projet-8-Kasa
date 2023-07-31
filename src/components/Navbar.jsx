import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar__logo">
        <img src="Image-Kasa/LOGO.png" alt="Logo Kasa" />
      </div>
      <div id="navbar__link">
        <a href="#a">Accueil</a>
        <a href="#a">A propos</a>
      </div>
    </nav>
  );
}

export default Navbar;
