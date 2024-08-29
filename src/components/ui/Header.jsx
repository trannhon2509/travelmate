import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  Dropdown,
  ButtonGroup,
  Badge,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/Header.css";
import RoutePath from "../../routes/RoutePath";

function NavBar() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // giả lập trạng thái đăng nhập

  const handleCanvasToggle = () => setShowCanvas(!showCanvas);

  return (
    <header className="sticky-top pt-2">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href={RoutePath.DASHBOARD} className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Brand Logo"
            className="d-inline-block align-top"
          />
          <span className="ms-2">TravelMate</span>
        </Navbar.Brand>

        <div className="d-none d-md-flex d-flex justify-content-start align-items-center">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-menu-link">
              Find
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action/1">Host</Dropdown.Item>
              <Dropdown.Item href="#action/2">Traveller</Dropdown.Item>
              <Dropdown.Item href="#action/3">Destination</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form
            className="d-flex ms-1 me-5 search-bar"
            style={{ maxWidth: "500px" }}
          >
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </div>

        <Button
          variant="link"
          className="d-lg-none navbar-toggler"
          onClick={handleCanvasToggle}
        >
          <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-none">
          <Nav className="mx-auto fw-bold">
            <NavLink
              to={RoutePath.DASHBOARD}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={RoutePath.EVENT}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Event
            </NavLink>
            <NavLink
              to={RoutePath.GROUP}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Group
            </NavLink>
            <NavLink
              to={RoutePath.SETTING}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Setting
            </NavLink>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center gap-2">
            {isAuthenticated ? (
              <>
                <Dropdown id="dropdown-messenger" align={{ lg: "end" }}>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-messenger-toggle"
                    className="position-relative"
                  >
                    <i
                      className="bi bi-messenger"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                    <Badge
                      bg="danger"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                      style={{fontSize: '16px'}}
                    >
                      3
                    </Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#action/1">Message 1</Dropdown.Item>
                    <Dropdown.Item href="#action/2">Message 2</Dropdown.Item>
                    <Dropdown.Item href="#action/3">Message 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown id="dropdown-notify" align={{ lg: "end" }}>
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-notify-toggle"
                    className="position-relative"
                  >
                    <i
                      className="bi bi-bell"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                    <Badge
                      bg="danger"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                      style={{fontSize: '16px'}}
                    >
                      5
                    </Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#action/1">
                      Notification 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/2">
                      Notification 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3">
                      Notification 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown align={{ lg: "end" }}>
                  <Dropdown.Toggle
                    as={Image}
                    src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_58.jpg"
                    roundedCircle
                    className="me-2"
                    width={60}
                    height={60}
                  />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                    <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Button variant="outline-primary" className="me-2">
                  Login
                </Button>
                <Button variant="primary">Register</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Canvas Sidebar */}
      <div className={`canvas-sidebar ${showCanvas ? "show" : ""}`}>
        <Button
          variant="link"
          className="canvas-close"
          onClick={handleCanvasToggle}
        >
          <i className="bi bi-x" style={{ fontSize: "1.5rem" }}></i>
        </Button>

        <Form className="d-flex search-bar d-block d-md-none mt-5">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Search</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Host</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Traveller</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Destination</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>

        <Nav className="flex-column mt-3 text-center text-md-start">
          <Nav.Item>
            <Nav.Link as={Link} to={RoutePath.DASHBOARD}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={RoutePath.EVENT}>Event</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={RoutePath.GROUP}>Group</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={RoutePath.SETTING}>Setting</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={RoutePath.INBOX}>Inbox</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </header>
  );
}

export default NavBar;
