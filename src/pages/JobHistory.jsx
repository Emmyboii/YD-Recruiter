import React, { useMemo, useState } from "react";


export default function JobHistory() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  // Mock data (replace with API data)
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "YOU Discovery", date: "2025-08-01", status: "Active" },
    { id: 2, title: "Data Analyst",        company: "YOU Discovery", date: "2025-07-15", status: "Closed" },
    { id: 3, title: "UI/UX Designer",      company: "YOU Discovery", date: "2025-07-10", status: "Pending" },
    { id: 4, title: "Backend Engineer",    company: "YOU Discovery", date: "2025-06-22", status: "Active" },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter(j => {
      const matchesText =
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q);
      const matchesStatus = status === "All" ? true : j.status === status;
      return matchesText && matchesStatus;
    });
  }, [jobs, query, status]);

  return (
    <div className="job-history with-sidebar">
      <div className="content">
        {/* Header */}
        <div className="header-row">
          <h1>📋 Job History</h1>
          <div className="toolbar">
            <input
              className="search"
              placeholder="Search title or company…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              className="filter"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>Closed</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="job-table">
            <colgroup>
              <col style={{ width: "36%" }} />
              <col style={{ width: "28%" }} />
              <col style={{ width: "20%" }} />
              <col style={{ width: "16%" }} />
            </colgroup>
            <thead>
              <tr>
                <th className="left">Job Title</th>
                <th className="left">Company</th>
                <th>Date Posted</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty">
                    No jobs match your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((job) => (
                  <tr key={job.id}>
                    <td className="left">{job.title}</td>
                    <td className="left">{job.company}</td>
                    <td>{job.date}</td>
                    <td>
                      <span className={`badge ${job.status.toLowerCase()}`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
