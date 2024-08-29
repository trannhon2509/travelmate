import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/ThreeColumnLayout.css'
import Header from "../components/ui/Header";
import SideBarLeft from "../components/layouts/SideBarLeft";
import SideBarRight from "../components/layouts/SideBarRight"

function ThreeColumnLayout({ children }) {
    return (
      <Container fluid className="layout-container">
        <header className="header"><Header/></header>
        <Row className="main-content">
          <Col className="sidebar left" md={3}>
            <SideBarLeft/>
          </Col>
          <Col className="center" md={6}>
            <Container>
            {children}
            </Container>
          </Col>
          <Col className="sidebar right" md={3}>
            <SideBarRight />
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default ThreeColumnLayout;