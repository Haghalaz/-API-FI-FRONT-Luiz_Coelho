import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";
import "./style.css";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="py-3 px-md-4">
      <Navbar.Brand>
        <img src={logo} className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Metas
          </Nav.Link>
          <Nav.Link as={Link} to="/Nova_Meta">
            Nova Meta
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
