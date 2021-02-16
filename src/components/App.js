import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";

import { AuthProvider } from "../contexts/AuthContext";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <Router>
          <AuthProvider>
            <Switch>
              {/* <Route exact path="/" /> */}
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <PrivateRoute path="/" component={Dashboard} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
