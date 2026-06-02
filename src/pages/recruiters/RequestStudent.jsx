import React, { useState } from "react";
import { motion } from "framer-motion";
import RecruiterSidebar from "../../components/RecruiterSidebar";
import { useNavigate } from "react-router-dom";

export default function RequestStudent() {
  const [chatUser, setChatUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  // const openChat = (student) => setChatUser(student);

  const sendMessage = () => {
    if (newMessage.trim() && chatUser) {
      setMessages([...messages, { to: chatUser.name, text: newMessage }]);
      setNewMessage("");
    }
  };

  // Mock students data
  const [students] = useState([
    { id: 1, name: "John Doe", course: "Frontend Development", experience: 2, location: "Lagos, Nigeria", availability: "Immediate" },
    { id: 2, name: "Sarah Lee", course: "Data Science", experience: 1, location: "Abuja, Nigeria", availability: "2 Weeks" },
    { id: 3, name: "Michael Brown", course: "UI/UX Design", experience: 3, location: "Remote", availability: "Immediate" },
    { id: 4, name: "Emma White", course: "Backend Development", experience: 4, location: "Lagos, Nigeria", availability: "Immediate" },
    { id: 5, name: "David Okoro", course: "Cybersecurity", experience: 2, location: "Port Harcourt, Nigeria", availability: "1 Month" },
    { id: 6, name: "Grace Tan", course: "Frontend Development", experience: 5, location: "Kano, Nigeria", availability: "Immediate" },
    { id: 7, name: "Amina Bello", course: "Data Science", experience: 2, location: "Abuja, Nigeria", availability: "2 Weeks" },
    { id: 8, name: "Charles Kim", course: "Backend Development", experience: 3, location: "Remote", availability: "Immediate" },
    { id: 9, name: "Sophia Martins", course: "UI/UX Design", experience: 4, location: "Lagos, Nigeria", availability: "Immediate" },
  ]);

  // Criteria for AI-powered matching
  const [criteria, setCriteria] = useState({ course: "", minExperience: 0, location: "" });
  const handleCriteriaChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  // Filter top matches
  const topMatches = students.filter(
    (s) =>
      (criteria.course === "" || s.course.toLowerCase().includes(criteria.course.toLowerCase())) &&
      (criteria.location === "" || s.location.toLowerCase().includes(criteria.location.toLowerCase())) &&
      s.experience >= criteria.minExperience
  );

  return (
    <div className="flex min-h-screen bg-white">
      <RecruiterSidebar />

      <main className="flex-1 px-6 md:px-12 py-12 md:pl-[304px] overflow-y-auto bg-white">
        <motion.h1
          className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-blue-900 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🧑‍🎓 Request <span className="text-yellow-500">Skilled Students</span>
        </motion.h1>

        {/* AI-Powered Matching */}
        {/* <div className="mb-16">
          <h2 className="sm:text-2xl text-xl font-bold text-blue-900 mb-2">🤖 AI-Powered Matching</h2>
          <p className="text-gray-700 mb-6">
            Let our smart algorithm suggest top student candidates that match your hiring criteria.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 mb-1 font-medium">Filter by Course</label>
              <input
                type="text"
                name="course"
                value={criteria.course}
                onChange={handleCriteriaChange}
                placeholder="e.g. Frontend Development"
                className="p-3 w-full border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1 font-medium">Minimum Experience (years)</label>
              <input
                type="number"
                name="minExperience"
                value={criteria.minExperience}
                onChange={handleCriteriaChange}
                placeholder="e.g. 2"
                className="p-3 w-full border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1 font-medium">Filter by Location</label>
              <input
                type="text"
                name="location"
                value={criteria.location}
                onChange={handleCriteriaChange}
                placeholder="e.g. Lagos"
                className="p-3 w-full border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>
          </div>

          {topMatches.length === 0 ? (
            <p className="text-gray-600 italic">No matching students found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topMatches.map((student) => (
                <div
                  key={student.id}
                  className="bg-white p-6 rounded-2xl w-full shadow hover:shadow-lg transition border-l-4 border-yellow-400"
                >
                  <h3 className="text-xl font-semibold">{student.name}</h3>
                  <p className="text-gray-600">{student.course}</p>
                  <p className="text-gray-600">Experience: {student.experience} yrs</p>
                  <p className="text-gray-600">Location: {student.location}</p>
                  <p className="text-gray-600">Availability: {student.availability}</p>
                  <div className="mt-4 flex gap-2 w-full">
                    <button
                      onClick={() => alert(`Request sent for ${student.name}`)}
                      className="w-full bg-yellow-500 text-white py-2 rounded-xl font-semibold hover:bg-yellow-600 transition"
                    >
                      📩 Request
                    </button>
                    <button
                      onClick={() => openChat(student)}
                      className="bg-gray-200 w-full text-gray-800 py-2 rounded-xl hover:bg-gray-300 transition"
                    >
                      💬 Chat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}

        {/* Available Students Section */}
        <div>
          <h2 className="sm:text-2xl text-xl font-bold text-blue-900 mb-2">🎯 Available Students</h2>
          <p className="text-gray-700 mb-6">
            Browse all available students and directly send requests or chat with them.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 mb-1 font-medium">Filter by Course</label>
              <input
                type="text"
                name="course"
                value={criteria.course}
                onChange={handleCriteriaChange}
                placeholder="e.g. Frontend Development"
                className="p-3 w-full border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1 font-medium">Minimum Experience (years)</label>
              <input
                type="number"
                name="minExperience"
                value={criteria.minExperience}
                onChange={handleCriteriaChange}
                placeholder="e.g. 2"
                className="p-3 w-full border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1 font-medium">Filter by Location</label>
              <input
                type="text"
                name="location"
                value={criteria.location}
                onChange={handleCriteriaChange}
                placeholder="e.g. Lagos"
                className="p-3 w-full border rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
              />
            </div>
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topMatches.map((student) => (
              <div
                key={student.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{student.name}</h3>
                <p className="text-gray-600">{student.course}</p>
                <p className="text-gray-600">Experience: {student.experience} yrs</p>
                <p className="text-gray-600">Location: {student.location}</p>
                <p className="text-gray-600">Availability: {student.availability}</p>
                <div className="mt-4 flex gap-2 w-full">
                  <button
                    onClick={() => navigate(`/recruiter/students/${student.id}`)}
                    className="w-full bg-gray-200 text-gray-800 py-2 rounded-xl font-semibold hover:bg-gray-300 transition"
                  >
                    👁 View Details
                  </button>
                  <button
                    onClick={() => alert(`Request sent for ${student.name}`)}
                    className="w-full bg-blue-900 text-white py-2 rounded-xl font-semibold hover:bg-blue-800 transition"
                  >
                    📩 Request
                  </button>
                  {/* <button
                    onClick={() => openChat(student)}
                    className="bg-gray-200 w-full text-gray-800 py-2 rounded-xl hover:bg-gray-300 transition"
                  >
                    💬 Chat
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Modal */}
        {chatUser && (
          <motion.div
            className="fixed bottom-4 right-4 w-80 bg-white rounded-2xl shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center p-3 border-b border-gray-200">
              <span className="font-semibold text-blue-900">Chat with {chatUser.name}</span>
              <button className="text-gray-500 font-bold" onClick={() => setChatUser(null)}>✖</button>
            </div>
            <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-64">
              {messages.filter((m) => m.to === chatUser.name).map((m, i) => (
                <div key={i} className="bg-blue-100 p-2 rounded-xl text-gray-800">{m.text}</div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-200 flex gap-2">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 p-2 border rounded-xl"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-900 text-white py-1 px-3 rounded-xl hover:bg-blue-800 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
