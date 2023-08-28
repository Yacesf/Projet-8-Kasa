import React, { useState, useEffect } from "react";
import "./appartment-page.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Flat from "./Flat/flat";
import { useAppartmentContext } from "../../context/AppartmentContext";
import { useParams } from "react-router-dom";

function AppartmentPage() {
  const params = useParams();
  const appartmentContext = useAppartmentContext();
  const [appartmentSelected, setAppartmentSelected] = useState(null);

  useEffect(() => {
      const selectedAppartment = appartmentContext.find(
        (item) => item.id === params.id
      );
      setAppartmentSelected(selectedAppartment);
  }, [appartmentContext, params.id]);

  localStorage.setItem('selectedAppartment', JSON.stringify(appartmentSelected))
  console.log(localStorage);
  
  return (
    <div>
      <Container>
        <Navbar />
        {appartmentSelected ? (
          <Flat appartmentData={appartmentSelected} />
        ) : null}
      </Container>
      <Footer />
    </div>
  );
}

export default AppartmentPage;
