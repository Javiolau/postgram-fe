import React from "react";
import { MDBCol, MDBBtn, MDBLink, MDBRow } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import SignupInputField from "./SignupInputField";
import axios from "axios";
import { Redirect } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  generalValidation,
  validateHandle,
} from "./FormValidationHelper";

import { ReactComponent as Wave } from "../../icons/Wave.svg";

const FormPage = () => {
  //FORMS STATES
  const [firstName, updateFirstName, resetFirstName] = useInputState("");
  const [lastName, updateLastName, resetLastName] = useInputState("");
  const [handle, updateHandle, resetHandle] = useInputState("");
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");
  const [
    confirmPassword,
    updateConfirmPassword,
    resetConfirmPassword,
  ] = useInputState("");
  const [success, setSuccess] = useToggle(false);

  const postData = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/signup",
        {
          firstName,
          lastName,
          handle,
          email,
          password,
          confirmPassword,
        }
      );

      if (res.status === 201) {
        alert("You have been registered");
        setSuccess();
      }
    } catch (err) {
      alert(err);
    }
  };

  //Handle Create @User
  const handleSubmit = (e) => {
    if (password !== confirmPassword)
      return alert("Your passwords do not match");

    e.preventDefault();
    postData();
    resetAllFields();
  };

  const resetAllFields = () => {
    resetFirstName();
    resetLastName();
    resetHandle();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  if (success) return <Redirect to="/login" />;

  return (

    <>
      <Wave />
      <MDBCol
        size="12"
        md="6"
        lg="4"
        className="signup my-5"
        style={{ backgroundColor: "white" }}
      >
        <form>
          <p className="h4 text-center mb-4">Sign up</p>

          <div>
            <h6>{firstName}</h6>
            <h6>{lastName}</h6>
            <h6>{handle}</h6>
            <h6>{email}</h6>
            <h6>{password}</h6>
            <h6>{confirmPassword}</h6>
          </div>

          <MDBRow>
            <MDBCol lg="6">
              <input
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="name"
                value={firstName}
                onChange={updateFirstName}
              />
            </MDBCol>

            <MDBCol lg="6">
              <input
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="last name"
                value={lastName}
                onChange={updateLastName}
              />

              <br />
            </MDBCol>
          </MDBRow>

          <input
            id="defaultFormRegisterNameEx"
            className="form-control"
            placeholder="handle"
            value={handle}
            onChange={updateHandle}
          />

          <br />

          <input
            id="defaultFormRegisterNameEx"
            className="form-control"
            placeholder="email"
            type="email"
            value={email}
            onChange={updateEmail}
          />

          <br />

          <input
            id="defaultFormRegisterNameEx"
            className="form-control"
            placeholder="password"
            type="password"
            value={password}
            onChange={updatePassword}
          />

          <br />

          <input
            id="defaultFormRegisterNameEx"
            className="form-control"
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            onChange={updateConfirmPassword}
          />

          <div className="text-center mt-4">
            <MDBBtn color="red darken-4" type="submit" onClick={handleSubmit}>
              <strong>Register</strong>
            </MDBBtn>
            <MDBLink to="/login">Have an Account? Login</MDBLink>
          </div>
        </form>
      </MDBCol>
    </>

  );
};

export default FormPage;
