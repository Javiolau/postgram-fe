import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import SignupInputField from "./SignupInputField";
import axios from "axios";
import { Redirect } from "react-router-dom";
import useToggle from "../../hooks/useToggle";

const FormPage = (props) => {
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
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center ">
        <MDBCol md="6">
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

            <SignupInputField
              label="Enter your First Name"
              placeholder="Name"
              value={firstName}
              onChange={updateFirstName}
            />

            <SignupInputField
              label="Enter your Last Name"
              placeholder="Last Name"
              value={lastName}
              onChange={updateLastName}
            />

            <SignupInputField
              label="Enter your @handle"
              placeholder="@handle"
              value={handle}
              onChange={updateHandle}
            />

            <SignupInputField
              label="Enter your Email"
              placeholder="youremail@domain.com"
              type="email"
              value={email}
              onChange={updateEmail}
            />

            <SignupInputField
              label="Enter your Password"
              placeholder="password"
              type="password"
              value={password}
              onChange={updatePassword}
            />

            <SignupInputField
              label="Confirm your Password"
              placeholder="confirm password"
              type="password"
              value={confirmPassword}
              onChange={updateConfirmPassword}
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
