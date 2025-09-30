import React, { useState } from "react";    

export default function RecruiterProfile() {
  // Dummy data (replace later with backend API)
  const [profile, setProfile] = useState({
    companyName: "TechCorp Ltd",
    email: "hr@techcorp.com",
    contact: "+234 800 123 4567",
    description: "We connect the best talents with global opportunities.",
    logo: "https://via.placeholder.com/120x120.png?text=Logo",
  });

  const jobHistory = [
    { id: 1, title: "Frontend Developer", status: "Open" },
    { id: 2, title: "Data Analyst", status: "Closed" },
  ];

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="recruiter-profile">
      <h1>👤 Recruiter Profile</h1>

      <div className="profile-card">
        <div className="profile-header">
          <img src={profile.logo} alt="Company Logo" className="company-logo" />
          <div>
            <h2>{profile.companyName}</h2>
            <p>{profile.email}</p>
            <p>{profile.contact}</p>
          </div>
        </div>

        <textarea
          name="description"
          value={profile.description}
          onChange={handleChange}
          className="description-box"
        />

        <button className="save-btn">💾 Save Changes</button>
      </div>

      <h2 className="history-title">📜 Job Posting History</h2>
      <div className="job-history">
        {jobHistory.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className={`status ${job.status.toLowerCase()}`}>{job.status}</p>
            <button className="view-btn">🔍 View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
