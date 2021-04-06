import React, { useState } from "react";

import "./HomePageNav.css";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { Link } from "react-router-dom";

function HomepageNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MDBNavbar expand="md" className="nav font-weight-bold ">
      <MDBNavbarBrand>
        <Link to="/">
          <strong
            className="red-text"
            style={{ fontWeight: 400, fontSize: "1.5rem" }}
          >
            PostGram
          </strong>
        </Link>
      </MDBNavbarBrand>

      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/about" className="red-text">
              About
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/contact" className="red-text">
              Contact
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default HomepageNav;
