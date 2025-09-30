import React, { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("recruiter");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registering as ${role}...`);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="logo">YOU Hire</h1>
        <h2>Create an Account</h2>
        <p>Sign up to start hiring or managing job requests</p>

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

        {/* Register Form */}
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="cta">Register</button>
        </form>

        <div className="extra-links">
          <a href="#">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
}
