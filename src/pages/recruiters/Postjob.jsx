import React, { useState } from "react";
import { motion } from "framer-motion";
import RecruiterSidebar from "../../components/RecruiterSidebar";

export default function PostJob() {
  const [job, setJob] = useState({
    title: "",
    category: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Job posted successfully!");
    console.log(job);
    setJob({
      title: "",
      category: "",
      location: "",
      salary: "",
      description: "",
    });
    // Later: Send job data to backend API
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <RecruiterSidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 md:px-12 py-12 md:pl-[304px] overflow-y-auto bg-white">
        {/* Header */}
        <motion.h1
          className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-blue-900 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ➕ Post a <span className="text-yellow-500">New Job</span>
        </motion.h1>

        {/* Job Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
        >
          {/* Job Title */}
          <label className="block text-blue-900 font-semibold mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="E.g., Frontend Developer"
            value={job.title}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-50 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:outline-none mb-5"
          />

          {/* Job Category */}
          <label className="block text-blue-900 font-semibold mb-2">
            Category
          </label>
          <select
            name="category"
            value={job.category}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-50 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:outline-none mb-5"
          >
            <option value="">Select Job Category</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>UI/UX Design</option>
            <option>Digital Marketing</option>
            <option>Cybersecurity</option>
          </select>

          {/* Location */}
          <label className="block text-blue-900 font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="E.g., Remote or New York, USA"
            value={job.location}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-50 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:outline-none mb-5"
          />

          {/* Salary */}
          <label className="block text-blue-900 font-semibold mb-2">
            Salary Range
          </label>
          <input
            type="text"
            name="salary"
            placeholder="E.g., $2,000 - $3,000/month"
            value={job.salary}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-50 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:outline-none mb-5"
          />

          {/* Description */}
          <label className="block text-blue-900 font-semibold mb-2">
            Job Description
          </label>
          <textarea
            name="description"
            placeholder="Describe job responsibilities, requirements, and expectations..."
            value={job.description}
            onChange={handleChange}
            rows="5"
            required
            className="w-full p-3 rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:outline-none mb-8 resize-none"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-900 text-white font-semibold sm:text-lg py-3 rounded-xl shadow-md hover:bg-blue-800 transition-all duration-300"
          >
            🚀 Post Job
          </motion.button>
        </motion.form>
      </main>
    </div>
  );
}
