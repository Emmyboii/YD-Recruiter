import React, { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("recruiter");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role}...`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">YOU Hire</h1>
        <h2>Welcome Back</h2>
        <p>Select your role and log in to continue</p>

        {/* Role Selector */}
        <div className="role-selector">
          <button
            className={role === "recruiter" ? "active" : ""}
            onClick={() => setRole("recruiter")}
          >
            Recruiter
          </button>
          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="cta">Login</button>
        </form>

        <div className="extra-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Create an Account</a>
        </div>
      </div>
    </div>
  );
}
