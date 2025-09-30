import React, { useState } from "react";

export default function AdminStudentRequests() {
  // Mock student requests (replace with API later)
  const [requests, setRequests] = useState([
    { id: 1, name: "John Doe", course: "Frontend Development", recruiter: "TechCorp", status: "Pending" },
    { id: 2, name: "Sarah Lee", course: "Data Science", recruiter: "DataWorks", status: "Pending" },
    { id: 3, name: "Michael Brown", course: "UI/UX Design", recruiter: "DesignHub", status: "Approved" },
  ]);

  const handleAction = (id, newStatus) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <div className="student-requests">
      <h1>📥 Student Requests</h1>
      <table className="requests-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Recruiter</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className={req.status.toLowerCase()}>
              <td>{req.name}</td>
              <td>{req.course}</td>
              <td>{req.recruiter}</td>
              <td className="status">{req.status}</td>
              <td>
                {req.status === "Pending" && (
                  <>
                    <button
                      className="approve"
                      onClick={() => handleAction(req.id, "Approved")}
                    >
                      ✅ Approve
                    </button>
                    <button
                      className="reject"
                      onClick={() => handleAction(req.id, "Rejected")}
                    >
                      ❌ Reject
                    </button>
                  </>
                )}
                {req.status !== "Pending" && <span>—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
