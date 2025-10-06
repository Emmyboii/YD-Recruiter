import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SetupAccount() {
  const [company, setCompany] = useState({
    name: "",
    logo: "",
    industry: "",
    size: "",
    website: "",
    email: "",
    location: "",
    description: "",
    linkedin: "",
    twitter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setCompany({ ...company, logo: URL.createObjectURL(files[0]) });
    } else {
      setCompany({ ...company, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Profile Submitted:", company);
    alert("✅ Company profile saved!");
    // Later: send data to backend
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl sm:p-8 p-4 md:p-12 space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          🏢 Complete Your Company Profile
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Provide your company details so recruiters can get started
        </p>

        {/* Company Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            name="name"
            value={company.name}
            onChange={handleChange}
            placeholder="Your company name"
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Logo */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Company Logo</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {company.logo && (
            <img
              src={company.logo}
              alt="Company Logo"
              className="mt-2 w-32 h-32 object-cover rounded-full border"
            />
          )}
        </div>

        {/* Industry & Company Size */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Industry</label>
            <select
              name="industry"
              value={company.industry}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Industry</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Company Size</label>
            <input
              type="number"
              name="size"
              value={company.size}
              onChange={handleChange}
              placeholder="Number of employees"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Website & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Website</label>
            <input
              type="url"
              name="website"
              value={company.website}
              onChange={handleChange}
              placeholder="https://yourcompany.com"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={company.email}
              onChange={handleChange}
              placeholder="contact@company.com"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={company.location}
            onChange={handleChange}
            placeholder="City, State, Country"
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">About the Company</label>
          <textarea
            name="description"
            value={company.description}
            onChange={handleChange}
            rows={4}
            placeholder="Briefly describe your company"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="url"
            name="linkedin"
            value={company.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="url"
            name="twitter"
            value={company.twitter}
            onChange={handleChange}
            placeholder="Twitter URL"
            className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
        >
          🚀 Save Company Profile
        </button>
      </motion.form>
    </div>
  );
}
