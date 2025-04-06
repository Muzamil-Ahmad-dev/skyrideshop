import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#09122c", fontFamily: "'Poppins', sans-serif" }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4 px-2 text-white">
          SkyRideShop
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link as={NavLink} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product" className="text-white">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex flex-wrap justify-content-center">
            <Button
              as={NavLink}
              to="/login"
              variant="outline-warning"
              className="m-2"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ffc107";
                e.target.style.color = "#09122c";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ffc107";
              }}
            >
              <i className="fa fa-sign-in-alt me-1"><FiLogIn />
              </i> Login
            </Button>
            <Button
              as={NavLink}
              to="/register"
              variant="outline-warning"
              className="m-2"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ffc107";
                e.target.style.color = "#09122c";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ffc107";
              }}
            >
              <i className="fa fa-user-plus me-1"><FaUserPlus />
              </i> Register
            </Button>
            <Button
              as={NavLink}
              to="/cart"
              variant="outline-warning"
              className="m-2"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ffc107";
                e.target.style.color = "#09122c";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ffc107";
              }}
            >
              <i className="fa fa-cart-shopping me-1"><FaCartArrowDown />
              </i> Cart
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .custom-toggler {
            border: 2px solid #ffc107 !important;
            background-color: #ffc107 !important;
            padding: 5px 10px;
            border-radius: 5px;
          }
        `}
      </style>
    </Navbar>
  );
};

export default CustomNavbar;
