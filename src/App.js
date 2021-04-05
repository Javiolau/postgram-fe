import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import Navbar from "./components/navigation/Navbar";
import FooterPage from "./components/navigation/FooterPage";

import { AuthContext } from "./context/useAuthContext";
import { useAuthHook } from "./hooks/useAuthHook";

function App() {
  const { token, login, logout, userId, userInfo } = useAuthHook();

  let authRoutes = (
    <Switch>
      <div className="App">
        <Route exact path="/signup">
          <SignupPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/">
          <MainPage />
        </Route>
      </div>
    </Switch>
  );

  if (!!token)
    authRoutes = (
      <Switch>
        <div className="App">
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/profile/:handle" component={ProfilePage} />
          <Route exact path="/profile">
            <MainPage />
          </Route>
          <Route exact path="/login">
            <Redirect to="/" />
          </Route>
        </div>
      </Switch>
    );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token, //To Know if its logged in
        token: token, //Token received
        login: login, //Login function
        logout: logout, //logout function
        userId: userId, //user ID
        userInfo: userInfo,
      }}
    >
      <div className="mainBG">
        <Navbar />
        {authRoutes}
        {!token && <FooterPage className="Footer" />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
