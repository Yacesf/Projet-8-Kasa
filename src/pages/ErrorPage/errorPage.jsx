import React from "react";
import "./errorPage.css";
import Container from "../../components/Container/container";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import ErrorContent from "./Error/error";

function ErrorPage() {
  return (
    <div>
    <Container>
      <Navbar />
      <ErrorContent />
    </Container>
    <Footer />
    </div>
  );
}

export default ErrorPage;