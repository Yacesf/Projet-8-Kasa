import React from "react";
import "./App.css";
import Container from "./components/Container/container";
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/Banner/banner";
import AppartmentContainer from "./components/Appartment-Container/appartment-container";
import Loader from "./components/Loader/loader";

function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <Banner
          img="./Image-Kasa/Image1.png"
          alt="Banniere d'accueil"
          text="Chez vous, partout et ailleurs"
        />
        <AppartmentContainer />
      </Container>
      <Loader />
    </div>
  );
}

export default App;
