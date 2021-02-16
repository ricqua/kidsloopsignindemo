import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Footer from "./Footer";
import { AuthProvider } from "../contexts/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div>
        <div className="wrapper">
          <div className="main">
            <SignUp />
            {/* <SignIn /> */}
            <Footer />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
