import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../Image-Kasa/LOGO.png"

function Navbar() {
  return (
    <nav id="navbar">
      <Link to={"/"} id="navbar__logo">
        <img src={Logo} alt="Logo Kasa" />
      </Link>
      <div id="navbar__link">
        <Link to={"/"}>
          <div>Accueil</div>
        </Link>
        <Link to={"/about"}>
          <div>A propos</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
