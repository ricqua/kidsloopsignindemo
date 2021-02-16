import React, { useState, useEffect, useRef } from "react";
import icon from "../images/kidsloop_min_logo.svg";
import { useAuth } from "../contexts/AuthContext";
import "./SignIn.css";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
import Loading from "./Loading";

function SignIn() {
  const userIDRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin, currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    userIDRef.current.focus();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(userIDRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError(
        "* Failed to sign in.  Please ensure your sign in credentials are correct."
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <React.Fragment>
      <div className="signInComponent">
        <img src={icon} alt="KidsLoop icon" width="80px" />
        <p className="header">Sign In</p>
        {/* {currentUser && currentUser.email} */}
        {error && <div className="error">{error}</div>}
        <form className="signInForm" onSubmit={handleSubmit}>
          <input
            className="inputField1"
            ref={userIDRef}
            placeholder="Email or Phone *"
            type="text"
            required
          />
          <input
            className="inputField1"
            ref={passwordRef}
            placeholder="Password *"
            type="password"
            required
          />
          <div>
            <p
              className="label"
              onClick={() => {
                alert("Function still in development");
              }}
            >
              Forgot Password?
            </p>
            <button type="submit" className="submitButton">
              Sign In
            </button>
            {loading ? <Loading /> : ""}
          </div>
        </form>
        <Link className="label" to="/signup">
          Create an account
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SignIn;
