import React from "react";
import {  useNavigate } from "react-router-dom";


export default function AdminDashboard() {

    const navigate =useNavigate()
  const handleLogout = () => {
    // Clear auth tokens or session
    localStorage.removeItem("authToken");
    // Redirect to login
    window.location.href = "/login";
  };

  return (
    <div className="admin-dashboard with-sidebar">
      <header className="admin-header">
        <h1>🛠️ Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </header>

      <div className="content">
        <section onClick={()=>navigate('/adminstudentrequest')} className="card">
          <h2>📥 Student Requests</h2>
          <p>All incoming student requests will be displayed here...</p>
        </section> 
        

        <section onClick={()=>navigate('/adminjobrequest')} className="card">
          <h2>💼 Job Postings</h2>
          <p>All recruiter job postings will be displayed here...</p>
        </section>
      </div>
    </div>
  );
}