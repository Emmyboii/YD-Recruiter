import React, { useState } from "react";


export default function AdminJobRequests() {
  // Mock data (replace with API later)
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
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
  };

  const toggleExpand = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div className="job-requests">
      <h1>💼 Job Requests</h1>
      <table className="jobs-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Recruiter</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <React.Fragment key={job.id}>
              <tr 
                className={`${job.status.toLowerCase()} clickable`} 
                onClick={() => toggleExpand(job.id)}
              >
                <td>{job.title}</td>
                <td>{job.recruiter}</td>
                <td>{job.location}</td>
                <td className="status">{job.status}</td>
                <td>
                  {job.status === "Pending" && (
                    <>
                      <button
                        className="approve"
                        onClick={(e) => { e.stopPropagation(); handleAction(job.id, "Approved"); }}
                      >
                        ✅ Approve
                      </button>
                      <button
                        className="reject"
                        onClick={(e) => { e.stopPropagation(); handleAction(job.id, "Rejected"); }}
                      >
                        ❌ Reject
                      </button>
                    </>
                  )}
                  {job.status !== "Pending" && <span>—</span>}
                </td>
              </tr>
              {expandedJob === job.id && (
                <tr className="expanded-row">
                  <td colSpan="5">
                    <div className="job-details">
                      <p><strong>Description:</strong> {job.description}</p>
                      <p><strong>Requirements:</strong> {job.requirements}</p>
                      <p><strong>Salary:</strong> {job.salary}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
