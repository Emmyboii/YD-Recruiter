import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminStudentRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: "John Doe", course: "Frontend Development", recruiter: "TechCorp", status: "Pending" },
    { id: 2, name: "Sarah Lee", course: "Data Science", recruiter: "DataWorks", status: "Pending" },
    { id: 3, name: "Michael Brown", course: "UI/UX Design", recruiter: "DesignHub", status: "Approved" },
  ]);

  const handleAction = (id, newStatus) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  const [copied, setCopied] = useState(null);

  const getStudentProfileLink = (id) =>
    `https://yd-recruiter.vercel.app/recruiter/students/${id}`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-8 md:p-12 md:pl-[306px]">
        <header className="mb-8">
          <h1 className="sm:text-4xl text-3xl font-bold text-blue-900 mb-2">📥 Student Requests</h1>
          <p className="text-blue-700">
            Review and approve student requests submitted by recruiters.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req) => (
            <div
              key={req.id}
              className={`bg-white shadow-lg rounded-2xl border-l-4 ${req.status === "Pending" ? "border-yellow-500" : req.status === "Approved" ? "border-green-500" : "border-red-500"} transition cursor-pointer hover:shadow-xl`}
            >
              <div className="p-6 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-900">{req.name}</h2>
                    <p className="text-sm text-gray-500">{req.course} • {req.recruiter}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full font-semibold ${req.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                    req.status === "Approved" ? "bg-green-100 text-green-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                    {req.status}
                  </span>
                </div>

                {req.status === "Pending" && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleAction(req.id, "Approved")}
                      className="flex-1 bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition"
                    >
                      ✅ Approve
                    </button>
                    <button
                      onClick={() => handleAction(req.id, "Rejected")}
                      className="flex-1 bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600 transition"
                    >
                      ❌ Reject
                    </button>
                  </div>
                )}

                {req.status === "Approved" && (
                  <div className="mt-4 p-3 bg-green-50 rounded-xl">
                    <p className="text-green-700 text-sm font-medium">
                      ✅ Approved! Share this student profile:
                    </p>

                    <a
                      href={`mailto:?subject=Student Approval Update - ${req.name}`}
                      className="text-blue-700 underline text-sm"
                    >
                      Compose Email to Recruiter
                    </a>

                    <br />

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `Student ${req.name} has been approved.\nProfile: ${getStudentProfileLink(req.id)}`
                        )
                        setCopied(req.id);
                        setTimeout(() => setCopied(null), 2000);
                      }}
                      className="text-sm text-blue-700 underline"
                    >
                      {copied === req.id ? "Copied!" : "Copy Message Template"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}