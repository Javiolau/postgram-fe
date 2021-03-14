import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBAlert,
} from "mdbreact";
import useInputState from "../hooks/useInputState";
import { useState } from "react";

const FormPage = (props) => {
  //FORMS STATES
  const [name, updateName, resetName] = useInputState("");
  const [username, setUserName, resetUserName] = useInputState("");
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  //Handle Create @User
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createUser({ name, username, email, password });
    resetUserName();
    resetPassword();
    resetEmail();
    resetName();
    props.onSubmit();
  };

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Enter your name
            </label>
            <input
              placeholder="Your Name"
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              value={name}
              onChange={updateName}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your username
            </label>
            <input
              placeholder="@username"
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              value={username}
              onChange={setUserName}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              placeholder="youremail@domain.com"
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              value={email}
              onChange={updateEmail}
            />
            <br />

            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              placeholder="password"
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              value={password}
              onChange={setPassword}
            />
            <div className="text-center mt-4">
              <MDBBtn color="success" type="submit" onClick={handleSubmit}>
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
