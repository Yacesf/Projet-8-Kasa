import React from "react";
import "./appartment-page.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Loader from "../../components/Loader/loader";
import { useLocation } from "react-router-dom";

function AppartmentPage() {
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
    <Container>
      <Navbar />
    </Container>
    <Loader />
    </div>
  );
}

export default AppartmentPage;
