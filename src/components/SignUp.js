import React, { useState, useEffect, useRef } from "react";
import icon from "../images/kidsloop_min_logo.svg";
import { useAuth } from "../contexts/AuthContext";
import "./SignUp.css";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import Loading from "./Loading";

function SignUp() {
  const userIDRef = useRef(); //{current: 0}
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  //   userIDRef.current.focus();
  // }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(userIDRef.current.value, passwordRef.current.value);
      history.push("/signin");
    } catch {
      setError(
        "* Failed to create an account. Please ensure you use a valid email address and select a password longer than 5 characters."
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <React.Fragment>
      <div className="signUpComponent">
        <img src={icon} alt="KidsLoop icon" width="80px" />
        <p className="header">Sign Up</p>
        {/* {currentUser && currentUser.email} */}
        {error && <p className="error">{error}</p>}
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
            {loading ? <Loading /> : ""}
          </div>
        </form>
        <Link className="label" to="/signin">
          Already have an account? Sign In
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SignUp;
