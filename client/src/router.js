import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewAccountPage from "./pages/NewAccountPage/index";
import AdminLoginPage from "./pages/AdminLoginPage/index";
import LoginPage from "./pages/LoginPage/index";
import AdminProfilePage from "./pages/AdminProfilePage";
import Navigation from "./components/Nav";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import LessonPlanPage from "./pages/LessonPlanPage";
import LandingPage from "./pages/LandingPage";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import PrivateRoute from "./components/Private-Route/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/newaccount">
            <NewAccountPage />
          </Route>
          <Route path="/adminlogin">
            <AdminLoginPage />
          </Route>
          <Route path="/adminprofile">
            <Navigation />
            <AdminProfilePage />
          </Route>
          <Route path="/teacherprofile">
            <Navigation />
            <TeacherProfilePage />
          </Route>
          <Route path="/lessonplan">
            <Navigation />
            <LessonPlanPage />
          </Route>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Routes;
