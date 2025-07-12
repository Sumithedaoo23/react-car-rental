import React, { useState } from "react";
import "./loginpop.css";

function LoginPopup({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "sumithedaoo02@gmail.com" && password === "Sumit2003") {
      setSuccess(true);
      setError("");
      setTimeout(() => {
        onLogin(); // Proceed after delay
      }, 1000);
    } else {
      setError("❌ Invalid credentials");
      setSuccess(false);
    }
  };

  return (
    <div className="login-popup-bg">
      <div className="login-popup">
        <h2>🚗 Login to CarRetal</h2>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">✅ Login Successful!</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
