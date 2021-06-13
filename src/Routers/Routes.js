import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginContainer from "../container/loginContainer";
import SignupContainer from "../container/signupContainer";
import NavbarContainer from "../container/NavbarContainer";
import DashboardComponent from "../container/DashboardContainer";
import DashboardContainer from "../container/DashboardContainer";
import Post from "../components/Post";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavbarContainer />
          <LoginContainer />
        </Route>
        <Route path="/signup" exact>
          <SignupContainer />
        </Route>

        <Route path="/dashboard" exact>
          <NavbarContainer />
          <DashboardContainer />
        </Route>
        <Route path="/dashboard/post/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
