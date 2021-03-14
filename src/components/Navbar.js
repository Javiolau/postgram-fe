import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

import { Link } from "react-router-dom";

export default () => {
  const [state, setState] = useState(false);

  const toggleCollapse = () => {
    setState(!state);
  };

  const handleClick = () => {
    setState(false);
  };

  return (
    <MDBNavbar color="red darken-4" dark expand="md">
      <MDBNavbarBrand>
        <Link to="/mainpage" onClick={handleClick}>
          <strong className="white-text">Home</strong>
        </Link>
      </MDBNavbarBrand>

      <MDBNavbarToggler onClick={toggleCollapse} />

      <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink onClick={handleClick} to="/createpost">
              Create Post
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink onClick={handleClick} to="/signup">
              Sign Up
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink onClick={handleClick} to="/login">
              Login
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink onClick={handleClick} to="/profile">
              Profile
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};
