// src/pages/AdminLogin.js
import React, { useState } from "react";
import AddCoffeeItem from "./adddataofcar"; // Adjust path as needed
import "./adminlogin.css";

function AdminLogin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@urbandrive.com" && password === "Admin123") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid admin credentials!");
    }
  };

  if (loggedIn) {
    return <AddCoffeeItem />;
  }

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>🔐 Admin Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
