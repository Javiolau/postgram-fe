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
    alert("You have successfully logged out");
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
              <MDBNavLink
                className="white-text"
                style={{ fontWeight: "bold" }}
                onClick={handleClick}
                to="/signup"
              >
                Sign Up
              </MDBNavLink>
            </MDBNavItem>
          )}

          {!auth.isLoggedIn && (
            <MDBNavItem>
              <MDBNavLink
                className="white-text"
                style={{ fontWeight: "bold" }}
                onClick={handleClick}
                to="/login"
              >
                Login
              </MDBNavLink>
            </MDBNavItem>
          )}
          {auth.isLoggedIn && auth.userInfo.handle && auth.userInfo.firstName && (
            <MDBNavItem>
              <MDBNavLink
                className="white-text"
                onClick={handleClick}
                to={`/profile/${auth.userInfo.handle}`}
              >
                <strong>{auth.userInfo.firstName}</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}

          {auth.isLoggedIn && (
            <MDBNavItem>
              <MDBNavLink
                className="white-text"
                style={{ fontWeight: "bold" }}
                onClick={handleLogout}
                to="/login"
              >
                Logout
              </MDBNavLink>
            </MDBNavItem>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
