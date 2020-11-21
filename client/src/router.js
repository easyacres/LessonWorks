import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import NewAccountPage from "./pages/NewAccountPage/index"
import AdminLoginPage from "./pages/AdminLoginPage/index"
import LoginPage from "./pages/LoginPage/index"
import AdminProfilePage from "./pages/AdminProfilePage"
import Navigation from "./components/Nav"
import TeacherProfilePage from "./pages/TeacherProfilePage"
import LessonOnly from './pages/LessonPlanPage'
import LandingPage from "./pages/LandingPage"

function Routes () {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact>
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
          <LessonOnly />
        </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;