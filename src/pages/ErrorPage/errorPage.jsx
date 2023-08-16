import React from "react";
import "./errorPage.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Loader from "../../components/Loader/loader";
import ErrorContent from "../../components/Error/error";

function ErrorPage() {
  return (
    <div>
    <Container>
      <Navbar />
      <ErrorContent />
    </Container>
    <Loader />
    </div>
  );
}

export default ErrorPage;