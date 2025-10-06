import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminJobRequests() {
  // Mock job requests (replace with API fetch later)
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      recruiter: "TechCorp",
      location: "Lagos, Nigeria",
      status: "Pending",
      description: "We are looking for a frontend developer skilled in React, CSS, and JavaScript.",
      requirements: "2+ years experience, familiarity with Git, good communication skills.",
      salary: "$1500 - $2000 / month"
    },
    {
      id: 2,
      title: "Data Analyst",
      recruiter: "DataWorks",
      location: "Abuja, Nigeria",
      status: "Pending",
      description: "DataWorks seeks a data analyst to process and visualize business data.",
      requirements: "Strong SQL, Python (Pandas), and Tableau skills.",
      salary: "$1200 - $1600 / month"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      recruiter: "DesignHub",
      location: "Remote",
      status: "Approved",
      description: "Join our team to design user-friendly and visually appealing digital products.",
      requirements: "Figma, Adobe XD, creativity, portfolio required.",
      salary: "$1000 - $1500 / month"
    },
  ]);

  const [expandedJob, setExpandedJob] = useState(null);

  const handleAction = (id, newStatus) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: newStatus } : job));
  };

  const toggleExpand = (id) => setExpandedJob(expandedJob === id ? null : id);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-8 md:p-12 md:pl-[306px]">
        <header className="mb-8">
          <h1 className="sm:text-4xl text-3xl font-bold text-blue-900 mb-2">💼 Job Requests</h1>
          <p className="text-blue-700">
            Review and manage all job postings submitted by recruiters.
          </p>
        </header>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`bg-white shadow-lg rounded-2xl border-l-4 ${job.status === "Pending" ? "border-yellow-500" : job.status === "Approved" ? "border-green-500" : "border-red-500"} transition cursor-pointer`}
              onClick={() => toggleExpand(job.id)}
            >
              {/* Job header */}
              {/* Job header */}
              <div className="p-6 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-900">{job.title}</h2>
                    <p className="text-sm text-gray-500">{job.recruiter} • {job.location}</p>
                    <p className="text-xs text-gray-400 mt-1 italic">Click to view details</p> {/* Hint text */}
                  </div>
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-semibold ${job.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : job.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Actions for Pending jobs */}
                {job.status === "Pending" && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleAction(job.id, "Approved"); }}
                      className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition"
                    >
                      ✅ Approve
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleAction(job.id, "Rejected"); }}
                      className="flex-1 bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600 transition"
                    >
                      ❌ Reject
                    </button>
                  </div>
                )}
              </div>

              {/* Expanded Details */}
              {expandedJob === job.id && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-700 text-sm space-y-2">
                  <p><strong>Description:</strong> {job.description}</p>
                  <p><strong>Requirements:</strong> {job.requirements}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}