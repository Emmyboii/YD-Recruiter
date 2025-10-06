import { useMemo, useState } from "react";
import Sidebar from "../../components/RecruiterSidebar";
import { motion } from "framer-motion";

export default function JobHistory() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const jobs = useMemo(
    () => [
      { id: 1, title: "Frontend Developer", company: "YOU Discovery", date: "2025-08-01", status: "Active" },
      { id: 2, title: "Data Analyst", company: "YOU Discovery", date: "2025-07-15", status: "Closed" },
      { id: 3, title: "UI/UX Designer", company: "YOU Discovery", date: "2025-07-10", status: "Pending" },
      { id: 4, title: "Backend Engineer", company: "YOU Discovery", date: "2025-06-22", status: "Active" },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      const matchesText =
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q);
      const matchesStatus = status === "All" ? true : j.status === status;
      return matchesText && matchesStatus;
    });
  }, [jobs, query, status]);

  return (
    <div className="flex min-h-screen bg-gray-50 w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 md:pl-[304px] w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <motion.h1
              className="sm:text-4xl text-3xl md:text-5xl font-extrabold text-blue-900 mb-10"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              📋 Job <span className="text-yellow-500">History</span>
            </motion.h1>
            <p className="text-gray-500 mt-1">
              Review and track your previous job postings.
            </p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="🔍 Search title or company..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>All</option>
            <option>Active</option>
            <option>Closed</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Table or Empty State */}
        <section className="bg-white rounded-2xl shadow-md overflow-hidden">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="sm:text-lg mb-3">No jobs match your filters.</p>
              <p className="text-sm">
                Try adjusting your search or{" "}
                <span className="text-blue-700 font-semibold hover:underline cursor-pointer">
                  post a new job
                </span>
                .
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto text-nowrap">
              <table className="min-w-full border-collapse text-left text-gray-700">
                <thead className="bg-blue-50 border-b">
                  <tr>
                    <th className="p-4 font-semibold">Job Title</th>
                    <th className="p-4 font-semibold">Company</th>
                    <th className="p-4 font-semibold">Date Posted</th>
                    <th className="p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((job) => (
                    <tr
                      key={job.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-4">{job.title}</td>
                      <td className="p-4">{job.company}</td>
                      <td className="p-4">{job.date}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${job.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : job.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                            }`}
                        >
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
