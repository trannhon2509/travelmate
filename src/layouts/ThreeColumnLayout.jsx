import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/ThreeColumnLayout.css'
import Header from "../components/ui/Header";

function ThreeColumnLayout({ children }) {
    return (
      <Container fluid className="layout-container">
        <header className="header"><Header/></header>
        <Row className="main-content">
          <Col className="sidebar left" md={3}>
            Left Sidebar
          </Col>
          <Col className="center" md={6}>
            {children}
          </Col>
          <Col className="sidebar right" md={3}>
            Right Sidebar
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default ThreeColumnLayout;