import { Link } from "react-router-dom";
import Sidebar from "../../components/RecruiterSidebar";
import { motion } from "framer-motion";

export default function Dashboard() {
  // Mock Data
  const jobPosts = [
    { title: "Frontend Developer", category: "Web Development", status: "Open", applicants: 12 },
    { title: "Data Analyst", category: "Data Science", status: "Closed", applicants: 8 },
  ];

  const studentRequests = [
    { course: "UI/UX Design", quantity: 3, date: "2025-08-10", status: "Pending" },
    { course: "Data Science", quantity: 5, date: "2025-08-05", status: "Completed" },
  ];

  // const [topMatches, setTopMatches] = useState([
  //   { id: 1, name: "John Doe", course: "Frontend Development", skills: ["React", "CSS", "JavaScript"], location: "Lagos, Nigeria" },
  //   { id: 2, name: "Sarah Lee", course: "Data Science", skills: ["Python", "SQL", "Tableau"], location: "Abuja, Nigeria" },
  //   { id: 3, name: "Michael Brown", course: "UI/UX Design", skills: ["Figma", "Adobe XD"], location: "Remote" },
  // ]);

  // const [chatUser, setChatUser] = useState(null);
  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState("");

  // const openChat = (student) => setChatUser(student);

  // const sendMessage = () => {
  //   if (newMessage.trim() && chatUser) {
  //     setMessages([...messages, { to: chatUser.name, text: newMessage }]);
  //     setNewMessage("");
  //   }
  // };

  // const requestStudent = (student) => alert(`✅ Request sent to ${student.name}`);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 md:pl-[304px] overflow-y-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
          <motion.h1
            className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-blue-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🏢 Recruiter <span className="text-yellow-500">Dashboard</span>
          </motion.h1>
          <Link
            to="/recruiter/postjob"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            + New Job
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-900">12</span>
            <span className="text-gray-600 mt-2">Pending Requests</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-900">120</span>
            <span className="text-gray-600 mt-2">Total Students</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-900">8</span>
            <span className="text-gray-600 mt-2">Unread Messages</span>
          </div>
        </div>

        {/* My Job Posts */}
        <section className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">My Job Posts</h2>
          {jobPosts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="mb-3 sm:text-lg">You haven’t posted any jobs yet.</p>
              <Link to="/recruiter/postjob" className="inline-block bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Post Your First Job
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-nowrap text-left text-gray-700">
                <thead>
                  <tr className="bg-blue-50 border-b">
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Applicants</th>
                  </tr>
                </thead>
                <tbody>
                  {jobPosts.map((job, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-4">{job.title}</td>
                      <td className="p-4">{job.category}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${job.status === "Open" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="p-4">{job.applicants}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Student Requests */}
        <section className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="sm:text-2xl text-xl font-semibold text-gray-800">Student Requests</h2>
          {studentRequests.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="mb-3 sm:text-lg">You haven’t requested any students yet.</p>
              <Link to="/recruiter/requeststudent" className="inline-block bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Request Students
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-nowrap text-gray-700">
                <thead>
                  <tr className="bg-blue-50 border-b">
                    <th className="p-4 font-semibold">Course</th>
                    <th className="p-4 font-semibold">Quantity</th>
                    <th className="p-4 font-semibold">Date Requested</th>
                    <th className="p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentRequests.map((req, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-4">{req.course}</td>
                      <td className="p-4">{req.quantity}</td>
                      <td className="p-4">{req.date}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${req.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                          {req.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* AI-Powered Matches
        <section className="space-y-4">
          <h2 className="sm:text-2xl text-xl font-bold text-blue-900">🤖 Top Student Matches</h2>
          <p className="text-gray-600">Our AI algorithm suggests top candidates for your requirements.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {topMatches.map((student) => (
              <div key={student.id} className="bg-white p-6 rounded-2xl shadow flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-blue-900">{student.name}</h3>
                <p className="text-gray-600"><strong>Course:</strong> {student.course}</p>
                <p className="text-gray-600"><strong>Skills:</strong> {student.skills.join(", ")}</p>
                <p className="text-gray-600"><strong>Location:</strong> {student.location}</p>
                <div className="mt-auto flex gap-2">
                  <button onClick={() => requestStudent(student)} className="flex-1 bg-blue-900 text-white py-2 rounded-xl font-semibold hover:bg-blue-800 transition">📩 Request</button>
                  <button onClick={() => openChat(student)} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-xl hover:bg-gray-300 transition">💬 Chat</button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Analytics & Insights
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Engagement</h3>
            <p className="text-gray-600">Track student interactions with your requests.</p>
            <div className="mt-4 bg-gray-100 h-36 rounded-lg flex items-center justify-center text-gray-400">Chart Placeholder</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Application Trends</h3>
            <p className="text-gray-600">Analyze applications by course, location, and skills.</p>
            <div className="mt-4 bg-gray-100 h-36 rounded-lg flex items-center justify-center text-gray-400">Chart Placeholder</div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
