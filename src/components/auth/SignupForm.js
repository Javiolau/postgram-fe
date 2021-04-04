import React from "react";
import { MDBCol, MDBBtn, MDBLink } from "mdbreact";
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
    <MDBCol size="12" md="6" lg="4" className="signup my-5">
      <form>
        <p className="h4 text-center mb-4">Sign up</p>

        <SignupInputField
          label="First Name"
          placeholder="First Name"
          name="firstname"
          value={firstName}
          onChange={updateFirstName}
          isValid={generalValidation(firstName)}
          msg="The first name should only contain [a-z A-Z]"
        />

        <SignupInputField
          label="Last Name"
          placeholder="Last Name"
          name="lastname"
          value={lastName}
          onChange={updateLastName}
          isValid={generalValidation(lastName)}
          msg="The last name should only contain [a-z A-Z]"
        />

        <SignupInputField
          label="@Handle"
          placeholder="@handle"
          name="username"
          value={handle}
          onChange={updateHandle}
          isValid={validateHandle(handle)}
          msg="The handle should only contain alphanumerical characters"
        />

        <SignupInputField
          label="Email"
          placeholder="youremail@domain.com"
          type="email"
          name="email"
          value={email}
          onChange={updateEmail}
          isValid={validateEmail(email)}
          msg='The email should be in the following format  "example.domain.com" '
        />

        <SignupInputField
          label="Password"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={updatePassword}
          isValid={validatePassword(password)}
          msg="Password does not meet the complexity requirements"
        />

        <SignupInputField
          label="Confirm Password"
          placeholder="Re-Password"
          type="password"
          name="password"
          value={confirmPassword}
          onChange={updateConfirmPassword}
          isValid={validatePasswordConfirm(password, confirmPassword)}
          msg="The passwords does not match"
        />

        <div className="text-center mt-4">
          <MDBBtn color="red darken-4" type="submit" onClick={handleSubmit}>
            <strong>Register</strong>
          </MDBBtn>
          <MDBLink to="/login">Have an Account? Login</MDBLink>
        </div>
      </form>
    </MDBCol>
  );
};

export default FormPage;
