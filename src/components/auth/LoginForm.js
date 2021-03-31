import React, { useContext, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import axios from "axios";
import { AuthContext } from "../../context/useAuthContext";
import jwt from "jwt-decode";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const auth = useContext(AuthContext);

  const [password, setPassword, resetPassword] = useInputState("");
  const [email, setEmail, resetEmail] = useInputState("");

  const login = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/login",
        {
          email: email,
          password: password,
        }
      );

      if (res.status === 200) {
        const token = res.data.token;
        const { user_id } = jwt(res.data.token);

        if (token) {
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
        }
      }
    } catch (err) {
      alert("ERROR ON LOGIN");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
    resetPassword();
    resetEmail();
    return <Redirect to="/" />;
  };

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              placeholder="youremail@domain.com"
              value={email}
              onChange={setEmail}
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              placeholder="password"
              onChange={setPassword}
              value={password}
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <div className="mt-4 d-flex justify-content-center">
              <MDBBtn gradient="blue" onClick={handleLogin}>
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;
