import "./App.css";
import { Switch, Route } from "react-router-dom";
import CreatePostPage from "./components/pages/CreatePostPage";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import Navbar from "./components/Navbar";
import FooterPage from "./components/FooterPage";

import { AuthContext } from "./context/useAuthContext";
import { useAuthHook } from "./hooks/useAuthHook";

function App() {
  const { token, login, logout, userId } = useAuthHook();

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
