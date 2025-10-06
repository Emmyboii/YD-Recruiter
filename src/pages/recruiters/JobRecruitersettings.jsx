import React, { useState } from "react";
import { motion } from "framer-motion";
import RecruiterSidebar from "../../components/RecruiterSidebar";

export default function JobRecruiterSettings() {
  const [companyData, setCompanyData] = useState({
    name: "TechCorp Ltd",
    logo: "",
    industry: "Technology",
    size: "50",
    website: "https://techcorp.com",
    email: "hr@techcorp.com",
    location: "Lagos, Nigeria",
    description: "We connect the best talents with global opportunities.",
  });

  const [accountData, setAccountData] = useState({
    fullName: "John Doe",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleCompanyChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo" && files[0]) {
      setCompanyData({ ...companyData, logo: URL.createObjectURL(files[0]) });
    } else {
      setCompanyData({ ...companyData, [name]: value });
    }
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData({ ...accountData, [name]: value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Company Data:", companyData);
    console.log("Account Data:", accountData);
    alert("✅ Changes saved successfully!");
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "⚠️ Are you sure you want to delete your company and account? This action cannot be undone."
      )
    ) {
      alert("🗑️ Company and account deleted successfully!");
      // Later: send delete request to backend
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <RecruiterSidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 md:px-12 py-12 md:pl-[304px] overflow-y-auto space-y-10">
        <motion.h1
          className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ⚙️ Company & Account <span className="text-yellow-500">Settings</span>
        </motion.h1>

        {/* Company Details */}
        <motion.form
          onSubmit={handleSaveChanges}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-3xl bg-blue-50/60 border border-blue-100 shadow-lg rounded-2xl sm:p-8 p-4 space-y-6"
        >
          <h2 className="sm:text-2xl text-xl font-bold text-blue-900 mb-4">
            🏢 Company Details
          </h2>

          {/* Company Name */}
          <input
            type="text"
            name="name"
            value={companyData.name}
            onChange={handleCompanyChange}
            placeholder="Company Name"
            className="w-full p-3 mb-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Company Logo */}
          <div className="mb-3">
            <label className="block text-blue-900 mb-2 font-semibold">Company Logo</label>
            <input type="file" name="logo" accept="image/*" onChange={handleCompanyChange} />
            {companyData.logo && (
              <img
                src={companyData.logo}
                alt="Company Logo"
                className="mt-2 w-32 h-32 object-cover rounded-full border"
              />
            )}
          </div>

          {/* Industry & Size */}
          <div className="flex flex-col md:flex-row gap-4 mb-3">
            <select
              name="industry"
              value={companyData.industry}
              onChange={handleCompanyChange}
              className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
            <input
              type="number"
              name="size"
              value={companyData.size}
              onChange={handleCompanyChange}
              placeholder="Company Size"
              className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Website & Email */}
          <div className="flex flex-col md:flex-row gap-4 mb-3">
            <input
              type="url"
              name="website"
              value={companyData.website}
              onChange={handleCompanyChange}
              placeholder="Website URL"
              className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              value={companyData.email}
              onChange={handleCompanyChange}
              placeholder="Email"
              className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Location */}
          <input
            type="text"
            name="location"
            value={companyData.location}
            onChange={handleCompanyChange}
            placeholder="Location"
            className="w-full p-3 mb-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Description */}
          <textarea
            name="description"
            value={companyData.description}
            onChange={handleCompanyChange}
            rows={4}
            placeholder="Company Description"
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          />

          {/* Account Details */}
          <h2 className="sm:text-2xl text-xl font-bold text-blue-900 mt-6 mb-3">👤 Account Details</h2>

          <input
            type="text"
            name="fullName"
            value={accountData.fullName}
            onChange={handleAccountChange}
            placeholder="Full Name"
            className="w-full p-3 mb-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="currentPassword"
            value={accountData.currentPassword}
            onChange={handleAccountChange}
            placeholder="Current Password"
            className="w-full p-3 mb-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="newPassword"
            value={accountData.newPassword}
            onChange={handleAccountChange}
            placeholder="New Password"
            className="w-full p-3 mb-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="confirmPassword"
            value={accountData.confirmPassword}
            onChange={handleAccountChange}
            placeholder="Confirm New Password"
            className="w-full p-3 mb-5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-yellow-400 text-blue-900 font-semibold py-3 rounded-xl hover:bg-yellow-300 transition-all duration-300"
          >
            💾 Save Changes
          </motion.button>
        </motion.form>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-3xl bg-red-50 border border-red-200 rounded-2xl p-8 shadow-md"
        >
          <h2 className="sm:text-2xl text-xl font-bold text-red-700 mb-3">⚠️ Danger Zone</h2>
          <p className="text-blue-900 mb-6">
            Deleting your company and account is <strong>permanent</strong>. All data will be lost.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDelete}
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-500 transition-all duration-300"
          >
            🗑️ Delete Company & Account
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
}
