import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
      <h2 className="logo">YOU Hire</h2>
      <ul>
        <li>
          <Link to="/jobhistory">📋 My Jobs</Link>
        </li>
        <li>
          <Link to="/requeststudent">🧑‍🎓 Student Requests</Link>
        </li>
        <li>
          <Link to="/postjob">➕ Post New Job</Link>
        </li>
        <li>
          <Link to="/jobrecruitersettings">⚙️ Settings</Link>
        </li>
        <li>
          <Link to="/logout">🚪 Logout</Link>
        </li>
      </ul>
    </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Recruiter Dashboard</h1>

        {/* Job Posts Table */}
        <section className="table-section">
          <h2>My Job Posts</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Applicants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend Developer</td>
                <td>Web Development</td>
                <td className="status open">Open</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Data Analyst</td>
                <td>Data Science</td>
                <td className="status closed">Closed</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Student Requests Table */}
        <section className="table-section">
          <h2>Student Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Quantity</th>
                <th>Date Requested</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UI/UX Design</td>
                <td>3</td>
                <td>2025-08-10</td>
                <td className="status pending">Pending</td>
              </tr>
              <tr>
                <td>Data Science</td>
                <td>5</td>
                <td>2025-08-05</td>
                <td className="status completed">Completed</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}