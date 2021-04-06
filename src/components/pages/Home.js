import React, { useState } from "react";

import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

import { ReactComponent as Wave } from "../../icons/Wave.svg";
import { ReactComponent as Hero } from "../../icons/Hero.svg";

import FooterPage from "../../components/navigation/FooterPage";

import { Link } from "react-router-dom";

function Home() {
  const [toggleRegistrationForm, setToggleRegistrationForm] = useState(false);

  const toggle = () => {
    setToggleRegistrationForm(!toggleRegistrationForm);
  };

  const variants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="homePage">
      <Wave />
      <Hero />
      <MDBContainer className="homeContainer">
        <MDBRow>
          <MDBCol size="12" lg="6" className="align-self-center"></MDBCol>
          <MDBCol size="12" lg="6">
            <div className="heroContent">
              <h1 className="HeroHeading">Welcome</h1>
              <Link to="/login">
                <MDBBtn
                  className="heroButton"
                  onClick={() =>
                    setToggleRegistrationForm(!toggleRegistrationForm)
                  }
                >
                  Login
                </MDBBtn>
              </Link>
              <FooterPage />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Home;
