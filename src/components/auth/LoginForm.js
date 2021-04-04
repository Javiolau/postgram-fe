import React, { useContext, useState } from "react";
import { MDBLink, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import useInputState from "../../hooks/useInputState";
import axios from "axios";
import { AuthContext } from "../../context/useAuthContext";
import jwt from "jwt-decode";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const auth = useContext(AuthContext);

  const [password, setPassword, resetPassword] = useInputState("");
  const [email, setEmail, resetEmail] = useInputState("");
  const [error, setError] = useState(false);

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
          resetPassword();
          resetEmail();
          const userInfo = res2.data.credentials;
          auth.login(user_id, token, userInfo);
        }
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
    return <Redirect to="/" />;
  };

  function onChangePassword(e) {
    setError(false);
    setPassword(e);
  }

  function onChangeEmail(e) {
    setError(false);
    setEmail(e);
  }

  return (
    <MDBCol size="12" md="6" lg="4" className="signup">
      <form>
        <p className="h4 text-center mb-4">Login</p>
        {error && (
          <div className="loginError">
            <h6>
              <MDBIcon icon="exclamation" className="mr-2 red-text" />
              The information provided do not match our records
            </h6>
          </div>
        )}
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input
          placeholder="youremail@domain.com"
          value={email}
          onChange={onChangeEmail}
          type="email"
          className={error ? "form-control formInputError" : "form-control"}
        />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input
          type="password"
          placeholder="password"
          onChange={onChangePassword}
          value={password}
          id="defaultFormLoginPasswordEx"
          className={error ? "form-control formInputError" : "form-control"}
        />
        <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
          <MDBLink to="/signup">Don't Have an Account? Sign Up</MDBLink>
          <MDBBtn color="red darken-4" onClick={handleLogin}>
            <strong>Login</strong>
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  );
};

export default LoginForm;
