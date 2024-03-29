import React, { useContext } from "react";
import { MDBLink, MDBCol, MDBBtn } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import axios from "axios";
import { AuthContext } from "../../context/useAuthContext";
import jwt from "jwt-decode";
import { Redirect } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "../../icons/profile.svg";
import { ReactComponent as Wave } from "../../icons/Wave.svg";
import useToggle from "../../hooks/useToggle";
import Modal from "../utils/Modal";

const LoginForm = () => {
  const auth = useContext(AuthContext);

  const [password, setPassword, resetPassword] = useInputState("");
  const [email, setEmail, resetEmail] = useInputState("");
  const [errorModal, toggleErrorModal] = useToggle(false);

  const handleLogin = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/login",
          {
            email: email,
            password: password,
          }
        );

        const token = res.data.token;
        const { user_id } = jwt(res.data.token);

        const res2 = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user`,
          {
            headers: {
              Authorization: "Bearer " + token, //the token is a variable which holds the token
            },
          }
        );

        const userInfo = res2.data.credentials;
        auth.login(user_id, token, userInfo);
      } catch (err) {
        toggleErrorModal();
      }
    })();

    resetPassword();
    resetEmail();
    return <Redirect to="/" />;
  };

  return (
    <>
      <Modal
        show={errorModal}
        icon="fas fa-exclamation-circle"
        title="Login Error"
        message="An error has occurred when trying to login. Please check your credentials and try again"
        toggleShow={toggleErrorModal}
      />

      <Wave />
      <MDBCol
        size="12"
        md="6"
        lg="4"
        className="signup"
        style={{ backgroundColor: "white", marginTop: "-10%" }}
      >
        <form>
          <p className="h4 text-center mb-4">Login</p>
          <ProfileIcon />
          <input
            placeholder="email"
            value={email}
            onChange={setEmail}
            type="email"
            id="defaultFormLoginEmailEx"
            className="form-control"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={setPassword}
            value={password}
            id="defaultFormLoginPasswordEx"
            className="form-control"
          />
          <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
            <MDBLink to="/signup">Don't Have an Account? Sign Up</MDBLink>
            <MDBBtn color="red darken-4" onClick={handleLogin}>
              <strong>Login</strong>
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </>
  );
};

export default LoginForm;
