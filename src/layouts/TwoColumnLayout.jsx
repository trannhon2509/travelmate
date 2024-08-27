import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/TwoColumnLayout.css'
import Header from "../components/ui/Header";

function TwoColumnLayout({ children }) {
    return (
      <Container fluid className="layout-container">
        <header className="header"><Header/></header>
        <Row className="main-content">
          <Col className="sidebar" md={3}>
            Sidebar
          </Col>
          <Col className="center" md={9}>
            {children}
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default TwoColumnLayout;
