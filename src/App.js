import "./App.css";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CreatePostPage from "./components/pages/CreatePostPage";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import Navbar from "./components/Navbar";
import FooterPage from "./components/FooterPage";
import axios from "axios";

import { AuthContext } from "./context/useAuthContext";
import { useAuthHook } from "./hooks/useAuthHook";

function App() {
  const { token, login, logout, userId } = useAuthHook();

  useEffect(() => {
    const authToken =
      "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlMDBlOGZlNWYyYzg4Y2YwYzcwNDRmMzA3ZjdlNzM5Nzg4ZTRmMWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcG9zdGdyYW0tMTZiZjIiLCJhdWQiOiJwb3N0Z3JhbS0xNmJmMiIsImF1dGhfdGltZSI6MTYxNjU0ODI1MCwidXNlcl9pZCI6IkZwaERUMFk3c3laSFRBRXNqNk9sWTM0Szh5azIiLCJzdWIiOiJGcGhEVDBZN3N5WkhUQUVzajZPbFkzNEs4eWsyIiwiaWF0IjoxNjE2NTQ4MjUwLCJleHAiOjE2MTY1NTE4NTAsImVtYWlsIjoidGVzdHVzZXJAZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3R1c2VyQGVtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mh3O5c5Awptusp6jMq3dAVl3pn0jxd6YZuPBjML-bQhOlAAD55xLL1338kO3fpzkuzqggkJXfBGhhniiKsPKvDSMnEnsR-Q2Bs0wFMv8eT0GH65JyyRay5a-ZECNs9T8eqCEG-cBtJGWnGSBSjMehQXGCPai6RRanaQIo3IVVsLl4_vcap5E7H5DN1-LnqQ80OkierFeve-MN2nEhYmKOm6DfkpQR8mSL9kMmr1Uo6tjpHuF6-oJnElpb-pRGMRRjmXzwDzVAVFOuGLJyAC1xt-mfHLIRsgk6LWxzLRGl1pKwiAt2AyMUngJEPv2Kycl944aGWFqgZA_RbdOzJ00mA";

    axios.defaults.headers.common["Authorization"] = authToken;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token, //To Know if its logged in
        token: token, //Token received
        login: login, //Login function
        logout: logout, //logout function
        userId: userId, //user ID
      }}
    >
      <div className="mainBG">
        <Navbar />
        <Switch>
          <div className="App">
            <Route exact path="/createpost">
              <CreatePostPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/mainpage">
              <MainPage />
            </Route>
            <Route exact path="/Profile">
              <ProfilePage />
            </Route>
          </div>
        </Switch>
        <FooterPage className="Footer" />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
