import React from "react";
import "./footer.css";
import logoFooter from "../../Image-Kasa/LOGOpetitblanc.png"

function Footer() {
  return (
    <div id="footer">
      <img id="footer__logo" src={logoFooter} alt="Logo Kasa"></img>
      <p id="footer__rights">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;