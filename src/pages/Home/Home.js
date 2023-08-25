import React from "react";
import "./Home.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Banner from "../../components/Banner/banner";
import AppartmentHome from "./Appartment-Home/appartment-home";
import Footer from "../../components/Footer/footer";
import bannerImage from "../../Image-Kasa/Image1.png"

function Home() {
  return (
    <div>
      <Container>
        <Navbar />
        <Banner
          img={bannerImage}
          alt="Banniere d'accueil"
          text="Chez vous, partout et ailleurs"
        />
        <AppartmentHome />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
