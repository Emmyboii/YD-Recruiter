import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserTie, FaUserShield } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import recruiter from "../../Images/recruiter.jpg";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const BASE_URL = "https://devm.westus2.cloudapp.azure.com/uhire/api";

export default function Login() {
  const [role, setRole] = useState("recruiter");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [modalError, setModalError] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = `${BASE_URL}/business/login`

      const response = await axios.post(endpoint, { email, password });
      const data = response.data.data;

      // 🛡️ Role Mismatch Check
      if (
        (role === "admin" && data.user.role !== "admin") ||
        (role === "user" && data.user.role === "admin")
      ) {
        setModalError(
          `You do not have permission to log in as ${role}. Please select the correct role.`
        );
        setLoading(false);
        return;
      }

      // ✅ Save token & proceed
      localStorage.setItem("youtoken", data.accessToken);
      localStorage.setItem("youUser", JSON.stringify(data.user));

      setSuccess(true);

      // Redirect after modal
      setTimeout(() => {
        setSuccess(false);
        if (data.user.role === "admin") navigate("/admin/dashboard");
        else navigate("/recruiter/dashboard");
      }, 2500);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        "Invalid credentials. Please check your email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-blue-100">
      {/* LEFT — Branding */}
      <div className="hidden md:flex w-1/2 bg-blue-800 text-white items-center justify-center flex-col px-12 relative overflow-hidden">
        <img
          src={recruiter}
          alt="Recruiter"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
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
          Empowering recruiters and companies to discover the next generation
          of skilled talent — faster, smarter, and better.
        </motion.p>
      </div>

      {/* RIGHT — Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center py-16 px-6 md:px-12 bg-white">
        <motion.div
          className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Select your role and log in to continue
          </p>

          {/* Role Selector */}
          <div className="flex mb-8 bg-gray-100 rounded-full p-1">
            <button
              className={`flex-1 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition ${role === "recruiter"
                ? "bg-blue-700 text-white"
                : "text-gray-600 hover:text-blue-700"
                }`}
              onClick={() => setRole("recruiter")}
              type="button"
            >
              <FaUserTie /> Recruiter
            </button>
            <button
              className={`flex-1 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition ${role === "admin"
                ? "bg-blue-700 text-white"
                : "text-gray-600 hover:text-blue-700"
                }`}
              onClick={() => setRole("admin")}
              type="button"
            >
              <FaUserShield /> Admin
            </button>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4 text-center text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Password
              </label>
              <div className='flex items-center'>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                {password && (
                  showPassword ?
                    <IoEyeOffOutline onClick={togglePasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
                    :
                    <IoEyeOutline onClick={togglePasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : `Login as ${role}`}
            </button>
          </form>

          <div className="flex justify-between items-center text-sm text-blue-700 mt-6">
            <p className="hover:underline">Forgot Password?</p>
            <a href="/register" className="hover:underline">
              Create an Account
            </a>
          </div>
        </motion.div>
      </div>

      {/* ✅ SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-auto"
            >
              <div className="text-5xl text-green-500 mb-3">✅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Login Successful!
              </h3>
              <p className="text-gray-600">Redirecting to your dashboard...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ❌ ERROR MODAL (Role mismatch) */}
      <AnimatePresence>
        {modalError && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalError("")}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-auto"
            >
              <div className="text-5xl text-red-500 mb-3">❌</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Access Denied
              </h3>
              <p className="text-gray-600">{modalError}</p>
              <button
                onClick={() => setModalError("")}
                className="mt-5 bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition"
              >
                Okay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
