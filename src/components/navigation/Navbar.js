import React, { useContext, useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

import { AuthContext } from "../../context/useAuthContext";

import { Link, Redirect } from "react-router-dom";

const Navbar = () => {
  const auth = useContext(AuthContext);

  const [state, setState] = useState(false);
  const toggleCollapse = () => {
    setState(!state);
  };

  const handleClick = () => {
    setState(false);
  };

  const handleLogout = () => {
    auth.logout();
    setState(false);
    return <Redirect to="/login" />;
  };

  return (
    <MDBNavbar color="red darken-4" dark expand="md">
      <MDBNavbarBrand>
        <Link to="/" onClick={handleClick}>
          <strong className="white-text">Home</strong>
        </Link>
      </MDBNavbarBrand>

      <MDBNavbarToggler onClick={toggleCollapse} />

      <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
        <MDBNavbarNav right>
          {!auth.isLoggedIn && (
            <MDBNavItem>
              <MDBNavLink onClick={handleClick} to="/signup">
                Sign Up
              </MDBNavLink>
            </MDBNavItem>
          )}

          {!auth.isLoggedIn && (
            <MDBNavItem>
              <MDBNavLink onClick={handleClick} to="/login">
                Login
              </MDBNavLink>
            </MDBNavItem>
          )}

          {auth.isLoggedIn && (
            <MDBNavItem>
              <MDBNavLink onClick={handleLogout} to="/login">
                Logout
              </MDBNavLink>
            </MDBNavItem>
          )}

          {auth.isLoggedIn && (
            <MDBNavItem>
              <MDBNavLink onClick={handleClick} to="/profile">
                Profile
              </MDBNavLink>
            </MDBNavItem>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
