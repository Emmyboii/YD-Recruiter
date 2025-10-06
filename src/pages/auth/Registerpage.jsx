import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUserShield } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import recruiter from "../../Images/recruiter.jpg";

const BASE_URL = "https://your-api-base-url.com";

export default function Register() {
  const [role, setRole] = useState("recruiter");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const endpoint =
        role === "recruiter"
          ? `${BASE_URL}/auth/recruiter/register`
          : `${BASE_URL}/auth/admin/register`;

      const response = await axios.post(endpoint, {
        name: fullName,
        email,
        password,
      });

      // Save token (if your API returns one)
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", role);
      }

      // Redirect after successful signup
      if (role === "admin") navigate("/admin/dashboard");
      else navigate("/recruiter/dashboard");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Left Branding Section */}
      <div className="hidden md:flex w-1/2 bg-blue-800 text-white items-center justify-center flex-col px-12 relative overflow-hidden">

        <img
          src={recruiter}
          alt="Our team at work"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />

        <motion.h1
          className="text-5xl font-extrabold mb-6 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          YOU <span className="text-yellow-400">Hire</span>
        </motion.h1>
        <motion.p
          className="text-blue-100 sm:text-lg text-center max-w-md z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Build your hiring network and access top-performing students for your
          company. Create your account to get started.
        </motion.p>

        <div className="absolute -bottom-32 -right-32 bg-blue-600 opacity-30 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 bg-yellow-400 opacity-20 w-80 h-80 rounded-full blur-3xl"></div>
      </div>

      {/* Right Form Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center h-[100vh] py-16 px-6 md:px-12 bg-white">
        <motion.div
          className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="sm:text-3xl text-2xl font-bold text-gray-800 text-center mb-2">
            Create an Account
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Sign up to start hiring or managing job requests
          </p>

          {/* Role Toggle */}
          <div className="flex mb-8 bg-gray-100 rounded-full p-1">
            <button
              type="button"
              className={`flex-1 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition ${role === "recruiter"
                ? "bg-blue-700 text-white"
                : "text-gray-600 hover:text-blue-700"
                }`}
              onClick={() => setRole("recruiter")}
            >
              <FaUserTie /> Recruiter
            </button>
            <button
              type="button"
              className={`flex-1 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition ${role === "admin"
                ? "bg-blue-700 text-white"
                : "text-gray-600 hover:text-blue-700"
                }`}
              onClick={() => setRole("admin")}
            >
              <FaUserShield /> Admin
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4 text-center text-sm font-medium">
              {error}
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="sm:space-y-5 space-y-3">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full px-4 sm:py-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 sm:py-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 sm:py-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="w-full px-4 sm:py-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : `Register as ${role}`}
            </button>
          </form>

          {/* Link to Login */}
          <div className="text-center text-sm text-blue-700 mt-6">
            <a href="/login" className="hover:underline">
              Already have an account? Login
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
