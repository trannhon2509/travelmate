import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
function MainLayout({ children }) {
  return (
    <Container fluid>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default MainLayout;
