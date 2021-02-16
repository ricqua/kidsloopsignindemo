import React, { Component } from "react";
import SignInComponent from "./components/SignInComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main">
          <SignInComponent />
          <FooterComponent />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
