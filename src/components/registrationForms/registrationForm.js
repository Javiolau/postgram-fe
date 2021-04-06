import React, { useState } from "react";

import "./registrationForm.css";

import {
  MDBContainer,
  MDBModal,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdbreact";

// THe purpose of this component is to create an interactive
// registration overlay where users can toggle between sign
// in state and sign out. Won't be able to finish on time.
// Maybe a good exercise

function RegistrationForm({ toggleRegistrationForm, toggle }) {
  const [isSignInForm, setIsSignInform] = useState(false);

  return (
    <MDBContainer>
      <MDBModal isOpen={toggleRegistrationForm} toggle={toggle} centered>
        <MDBCard className="registration">
          <MDBCardBody style={{ padding: 0 }}>
            <MDBRow style={{ padding: "20px" }} className="form-container">
              <MDBCol
                size="12"
                md="6"
                className={`loginForm sign-in-container ${isSignInForm} ? right-panel-active`}
              >
                <form className="registrationForm">
                  <p className="h5 text-center mb-4">Sign In</p>
                  <input
                    placeholder="email"
                    type="email"
                    id="email"
                    className="form-control grey-text"
                  />
                  <br />
                  <input
                    placeholder="password"
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                  />

                  <div className="text-center mt-4">
                    <MDBBtn type="submit">Sign In</MDBBtn>
                  </div>
                </form>
              </MDBCol>
              <MDBCol
                size="12"
                md="6"
                className="signupForm sign-up-container "
              >
                <form className="registrationForm">
                  <p className="h5 text-center mb-4">Sign Up</p>
                  <input
                    placeholder="full name"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                  />
                  <br />
                  <input
                    placeholder="email"
                    type="email"
                    id="email"
                    className="form-control grey-text"
                  />
                  <br />
                  <input
                    placeholder="password"
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                  />
                  <br />
                  <input
                    placeholder="confirm password"
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                  />

                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="submit">
                      Sign Up
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBModal>
    </MDBContainer>
  );
}

export default RegistrationForm;
