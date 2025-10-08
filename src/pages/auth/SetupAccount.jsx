import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import recruiter from "../../Images/recruiter.jpg";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const BASE_URL = "https://devm.westus2.cloudapp.azure.com/uhire/api";

export default function SetupAccount() {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    businessname: "",
    aos: "",
    noOfEmployee: "",
    phone: "",
    email: "",
    location: "",
    password: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [name]: value,
      // If the user changes from "Other" to another option, clear customIndustry
      ...(name === 'aos' && value !== 'Other' ? { customIndustry: '' } : {})
    }));
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const industryToSend =
      company.aos === "Other" ? company.customIndustry : company.aos;

    const payload = {
      ...company,
      aos: industryToSend,
    };

    try {
      const response = await fetch(`${BASE_URL}/business/onboard`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed. Please try again.");
      }

      setSuccess(true);

      // Redirect to login after success
      setTimeout(() => {
        setSuccess(false);
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-blue-100 font-sans relative">
      {/* LEFT SIDE — Branding Section */}
      <div className="hidden md:flex w-1/2 bg-blue-900 text-white flex-col items-center justify-center relative overflow-hidden">
        <img
          src={recruiter}
          alt="Recruiter"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 text-center px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6"
          >
            YOU <span className="text-yellow-400">Hire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-100 text-lg leading-relaxed max-w-md mx-auto"
          >
            Create your recruiter account and start connecting with top talents
            effortlessly. Let’s build your hiring network today.
          </motion.p>
        </div>
        <div className="absolute -bottom-32 -right-32 bg-blue-700 opacity-30 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 bg-yellow-400 opacity-20 w-80 h-80 rounded-full blur-3xl"></div>
      </div>

      {/* RIGHT SIDE — Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center items-center p-6 sm:p-12"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-6 sm:p-10 space-y-6 border border-gray-100"
        >
          <h2 className="sm:text-3xl text-2xl font-bold text-gray-800 text-center">
            Create an Account
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Join our recruiter network and connect with skilled students ready to work.
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-xl text-center text-sm font-medium">
              {error}
            </div>
          )}

          {/* Company Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="businessname"
              value={company.businessname}
              onChange={handleChange}
              placeholder="Enter company name"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Industry & Size */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Industry <span className="text-red-500">*</span>
              </label>

              <select
                name="aos"
                value={company.aos}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
              </select>

              {/* Conditionally show this input when 'Other' is selected */}
              {company.aos === 'Other' && (
                <div className="mt-3">
                  <input
                    type="text"
                    name="customIndustry"
                    value={company.customIndustry || ''}
                    onChange={handleChange}
                    placeholder="Please specify your industry"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              )}
            </div>


            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Company Size <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="noOfEmployee"
                value={company.noOfEmployee}
                onChange={handleChange}
                placeholder="Number of employees"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Phone number & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={company.phone}
                onChange={handleChange}
                placeholder="08023476543"
                maxLength={11}
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={company.email}
                onChange={handleChange}
                placeholder="contact@company.com"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={company.location}
              onChange={handleChange}
              placeholder="City, State, Country"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className='flex items-center'>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={company.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              {company.password && (
                showPassword ?
                  <IoEyeOffOutline onClick={togglePasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
                  :
                  <IoEyeOutline onClick={togglePasswordVisibility} className='ml-[-30px] size-4 cursor-pointer' />
              )}
            </div>
          </div>

          {/* About Company */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              About the Company <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={company.description}
              onChange={handleChange}
              rows={4}
              placeholder="Briefly describe your company"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Socials */}
          {/* <div className="grid md:grid-cols-2 gap-4">
            <input
              type="url"
              name="linkedin"
              value={company.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="url"
              name="twitter"
              value={company.twitter}
              onChange={handleChange}
              placeholder="Twitter URL"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div> */}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-200"
          >
            {loading ? "Creating account..." : "Register"}
          </motion.button>
          <div className="text-center text-sm text-blue-700 mt-6">
            <a href="/login" className="hover:underline">
              Already have an account? Login
            </a>
          </div>
        </form>
      </motion.div>

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
                Registration Successful!
              </h3>
              <p className="text-gray-600">
                Redirecting you to login page...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
