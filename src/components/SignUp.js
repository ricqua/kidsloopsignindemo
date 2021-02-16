import React, { useState, useEffect, useRef } from "react";
import icon from "../images/kidsloop_min_logo.svg";
import { useAuth } from "../contexts/AuthContext";
import "./SignUp.css";

function SignUp() {
  const userIDRef = useRef(); //{current: 0}
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userIDRef.current.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(userIDRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <React.Fragment>
      <div className="signUpComponent">
        <img src={icon} alt="KidsLoop icon" width="80px" />
        <p className="header">Sign Up</p>
        {error && <p>{error}</p>}
        <form className="signUpForm" onSubmit={handleSubmit}>
          <input
            className="inputField"
            name="userID"
            ref={userIDRef}
            placeholder="Email or Phone *"
            type="text"
            required
          />
          <input
            className="inputField"
            name="password"
            ref={passwordRef}
            placeholder="Password *"
            type="password"
            required
          />
          <input
            className="inputField"
            name="password-confirm"
            ref={passwordConfirmRef}
            placeholder="Password Confirmation*"
            type="password"
            required
          />
          <div>
            <button type="submit" className="submitButton" disabled={loading}>
              Sign Up
            </button>
            {loading ? <p>Loading</p> : ""}
            <button
              onClick={() => {
                userIDRef.current.focus();
              }}
            >
              Focus
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
