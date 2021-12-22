import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "components/private-route";
import Profile from "components/profile";
import Login from "components/login";

const App = () => (
  <Router>
    <PrivateRoute path="/app/profile" component={Profile} />
    <Login path="/app/login" />
  </Router>
);

export default App;
