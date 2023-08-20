import React, { useState, useEffect } from "react";
import "./appartment-page.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Loader from "../../components/Loader/loader";
import Flat from "./Flat/flat";
import { useAppartmentContext } from "../../context/AppartmentContext";
import { useLocation } from "react-router-dom";

function AppartmentPage() {
  const location = useLocation();
  const appartmentContext = useAppartmentContext();
  const [appartmentSelected, setAppartmentSelected] = useState(null);

  useEffect(() => {
    if (appartmentContext.length > 0) {
      const selectedAppartment = appartmentContext.find(
        (item) => item.id === location.state.appartmentId
      );
      setAppartmentSelected(selectedAppartment);
    }
  }, [appartmentContext, location.state.appartmentId]);

  console.log(appartmentSelected);

  return (
    <div>
      <Container>
        <Navbar />
        {appartmentSelected ? (
          <Flat appartmentData={appartmentSelected} />
        ) : null}
      </Container>
      <Loader />
    </div>
  );
}

export default AppartmentPage;
