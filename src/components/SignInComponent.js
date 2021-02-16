import React, { useState } from "react";
import icon from "../images/kidsloop_min_logo.svg";
import "./styles.css";

export default function SignInComponent() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [usersDB, setUsersDB] = useState(
    {
      userID: "Susan",
      password: "123",
    },
    {
      userID: "James",
      password: "456",
    }
  );

  function handleChange(e) {
    e.preventDefault();
    switch (e.target.name) {
      case "userID":
        setUserID(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  }

  function onSubmit(e) {
    // e.preventDefault();
    if (false) {
      alert(`Welcome back ${userID}`);
    } else {
      alert("Email, phone number or/and password are not recognised.");
    }
  }

  return (
    <React.Fragment>
      <div className="signInComponent">
        <img src={icon} alt="KidsLoop icon" width="80px" />
        <p className="header">Sign In</p>
        <form className="signInForm">
          <input
            className="inputField"
            name="userID"
            placeholder="Email or Phone *"
            value={userID}
            type="text"
            onChange={handleChange}
          />
          <input
            className="inputField"
            name="password"
            placeholder="Password *"
            value={password}
            type="password"
            onChange={handleChange}
          />
          <div>
            <a
              className="label"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forgot Password?
            </a>
            <button type="submit" className="submitButton" onClick={onSubmit}>
              Sign In
            </button>
          </div>
        </form>
        <a
          className="label"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create an account
        </a>
      </div>
    </React.Fragment>
  );
}
