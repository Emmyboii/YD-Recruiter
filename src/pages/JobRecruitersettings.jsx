import React, { useState } from "react";

export default function JobRecuiterSettings() {
  const [formData, setFormData] = useState({
    name: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    console.log(formData);
    // Later: Send to backend API
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      alert("Account deleted");
      // Later: Send delete request to backend
    }
  };

  return (
    <div className="settings-container">
      <h1>Account Settings</h1>

      {/* Change Name */}
      <form onSubmit={handleSaveChanges} className="settings-form">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter new full name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Change Password */}
        <label>Current Password</label>
        <input
          type="password"
          name="currentPassword"
          placeholder="Enter current password"
          value={formData.currentPassword}
          onChange={handleChange}
        />

        <label>New Password</label>
        <input
          type="password"
          name="newPassword"
          placeholder="Enter new password"
          value={formData.newPassword}
          onChange={handleChange}
        />

        <label>Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" className="cta">Save Changes</button>
      </form>

      {/* Delete Account */}
      <div className="delete-section">
        <h2>Danger Zone</h2>
        <p>Once you delete your account, there is no going back.</p>
        <button className="delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
}
