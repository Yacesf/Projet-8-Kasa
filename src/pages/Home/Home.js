import React from "react";
import "./Home.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Banner from "../../components/Banner/banner";
import AppartmentHome from "./Appartment-Home/appartment-home";
import Loader from "../../components/Loader/loader";

function Home() {
  return (
    <div>
      <Container>
        <Navbar />
        <Banner
          img="./Image-Kasa/Image1.png"
          alt="Banniere d'accueil"
          text="Chez vous, partout et ailleurs"
        />
        <AppartmentHome />
      </Container>
      <Loader />
    </div>
  );
}

export default Home;
