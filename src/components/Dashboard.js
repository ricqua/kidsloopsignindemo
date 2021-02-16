import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Loading from "./Loading";

function Dashboard() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError("");
    setLoading(true);
    try {
      await signout();
      history.push("./signin");
    } catch {
      setError("Failed to log out");
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h2>{currentUser.email}</h2>
      {error && <p>{error}</p>}
      <button onClick={handleLogOut}>Log Out</button>
      {loading ? <Loading /> : ""}
    </div>
  );
}

export default Dashboard;
