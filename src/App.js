import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import Navbar from "./components/navigation/Navbar";
import HomePageNav from "./components/homePageNav/HomepageNav";
import AboutPage from "./components/pages/About";
import ContactPage from "./components/pages/ContactPage";
import { AuthContext } from "./context/useAuthContext";
import { useAuthHook } from "./hooks/useAuthHook";

function App() {
  const { token, login, logout, userId, userInfo } = useAuthHook();

  let authRoutes = (
    <div className="App">
      <Switch>
        <Route exact path="/signup">
          <SignupPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>

        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );

  if (!!token)
    authRoutes = (
      <div className="App">
        <Switch>
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
        </Switch>
      </div>
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
        {!token && <HomePageNav />}
        {token && <Navbar />}
        {authRoutes}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
