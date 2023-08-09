import React from "react";
import "./about.css";
import Container from "./components/Container/container";
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/Banner/banner";
import AboutBody from "./components/About-body/about-body";
import Loader from "./components/Loader/loader";

function About() {
  return (
    <div>
    <Container>
      <Navbar />
      <Banner img="./Image-Kasa/Image2.png" alt="Banniere d'A propos"/>
      <AboutBody />
    </Container>
    <Loader />
    </div>
  );
}

export default About;
