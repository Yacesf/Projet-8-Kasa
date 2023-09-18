import React, { useState, useEffect } from "react";
import "./appartment-page.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Flat from "./Flat/flat";
import { useAppartmentContext } from "../../context/AppartmentContext";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/errorPage";

function AppartmentPage() {
  const params = useParams();
  const appartmentContext = useAppartmentContext();
  const [appartmentSelected, setAppartmentSelected] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (appartmentContext.length > 0) {
      const selectedAppartment = appartmentContext.find(
        (item) => item.id === params.id
      );
      if (selectedAppartment) {
        setAppartmentSelected(selectedAppartment);
      } else {
        setIsError(true);
      }
    }
  }, [appartmentContext, params.id]);
  
  if (isError) {
    return <ErrorPage />;
  }

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
