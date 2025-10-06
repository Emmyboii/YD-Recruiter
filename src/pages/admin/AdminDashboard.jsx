import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Mock data (replace with API fetch)
  const [stats, setStats] = useState({
    totalStudents: 1200,
    totalRecruiters: 85,
    totalJobs: 320,
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: "jobPosted", title: "Frontend Developer Posted", time: "2h ago" },
    { id: 2, type: "studentRequest", title: "New Student Request: John Doe", time: "5h ago" },
    { id: 3, type: "recruiterApproved", title: "Recruiter Jane Smith Approved", time: "1d ago" },
  ]);

  const [quickActions, setQuickActions] = useState([
    { id: 1, label: "Approve Student Requests", action: () => navigate("/admin/studentrequest") },
    { id: 2, label: "Review Job Postings", action: () => navigate("/admin/jobrequest") },
    { id: 3, label: "Manage Recruiters", action: () => navigate("/admin/recruiterslist") },
  ]);

  // Example: simulate fetching new activity
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRecentActivity((prev) => [
  //       { id: Date.now(), type: "jobPosted", title: "New Job Posted", time: "Just now" },
  //       ...prev.slice(0, 4), // keep latest 5 items
  //     ]);
  //   }, 30000); // every 30s, just demo

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 md:pl-[306px]">
        <header className="mb-10">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-blue-900">🛠️ Admin Dashboard</h1>
          <p className="text-blue-700 mt-2">
            Welcome! Here’s an overview of the platform.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Platform Stats */}
          <section className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="sm:text-2xl text-xl mb-2">📊 Platform Stats</h2>
            <p>Total Students: {stats.totalStudents}</p>
            <p>Total Recruiters: {stats.totalRecruiters}</p>
            <p>Total Jobs Posted: {stats.totalJobs}</p>
          </section>

          {/* Recent Activity */}
          <section className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="sm:text-2xl text-xl mb-2">🕒 Recent Activity</h2>
            <ul className="space-y-2">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity) => (
                  <li key={activity.id} className="text-gray-700">
                    <span className="font-semibold">{activity.title}</span>{" "}
                    <span className="text-sm text-gray-400">({activity.time})</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No recent activity.</li>
              )}
            </ul>
          </section>

          {/* Quick Actions */}
          <section className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="sm:text-2xl text-xl mb-2">⚡ Quick Actions</h2>
            <ul className="space-y-3">
              {quickActions.map((action) => (
                <li key={action.id}>
                  <button
                    onClick={action.action}
                    className="w-full bg-yellow-500 text-blue-900 py-2 px-4 rounded-xl font-semibold hover:bg-yellow-400 transition"
                  >
                    {action.label}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Optional additional metrics */}
          <section className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="sm:text-2xl text-xl mb-2">📁 System Overview</h2>
            <p>Active Recruiters: 72</p>
            <p>Pending Student Requests: 15</p>
            <p>Open Jobs: 47</p>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="sm:text-2xl text-xl mb-2">📌 Notes</h2>
            <p>Monitor recent activities and ensure all new job postings and student requests are processed timely.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
