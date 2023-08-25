import React from "react";
import "./about.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Banner from "../../components/Banner/banner";
import AboutBody from "./About-body/about-body";
import Footer from "../../components/Footer/footer";
import bannerAbout from "../../Image-Kasa/Image2.png"

function About() {
  return (
    <div>
    <Container>
      <Navbar />
      <Banner img={bannerAbout} alt="Banniere d'A propos"/>
      <AboutBody />
    </Container>
    <Footer />
    </div>
  );
}

export default About;
