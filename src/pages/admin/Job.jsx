import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminJobs() {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("All");
    const [expanded, setExpanded] = useState(null);

    const jobs = useMemo(
        () => [
            {
                id: 1,
                title: "Frontend Developer",
                recruiter: "TechCorp",
                location: "Lagos, Nigeria",
                status: "Pending",
                salary: "$1500 - $2000",
                description:
                    "We are looking for a React developer with strong UI skills.",
                requirements:
                    "React, JavaScript, Tailwind, Git",
            },
            {
                id: 2,
                title: "Data Analyst",
                recruiter: "DataWorks",
                location: "Abuja, Nigeria",
                status: "Approved",
                salary: "$1200 - $1600",
                description:
                    "Analyze and visualize business datasets.",
                requirements: "SQL, Python, PowerBI",
            },
            {
                id: 3,
                title: "UI/UX Designer",
                recruiter: "DesignHub",
                location: "Remote",
                status: "Rejected",
                salary: "$1000 - $1500",
                description:
                    "Design modern and user-friendly interfaces.",
                requirements: "Figma, Adobe XD, Portfolio",
            },
        ],
        []
    );

    const filteredJobs = jobs.filter((job) => {
        const q = query.toLowerCase();

        const matchesQuery =
            job.title.toLowerCase().includes(q) ||
            job.recruiter.toLowerCase().includes(q);

        const matchesStatus =
            status === "All" ? true : job.status === status;

        return matchesQuery && matchesStatus;
    });

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar />

            <main className="flex-1 p-8 md:p-12 md:pl-[304px]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900">
                        💼 Company Jobs
                    </h1>
                    <p className="text-gray-500 mt-2">
                        View all jobs posted by companies on the platform.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-8 mb-6">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search jobs or companies..."
                        className="w-full md:w-1/2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="p-3 border rounded-xl"
                    >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            onClick={() => toggleExpand(job.id)}
                            className="bg-white rounded-2xl shadow border-l-4 border-blue-200 cursor-pointer hover:shadow-lg transition"
                        >
                            {/* Top */}
                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-xl font-bold text-blue-900">
                                            {job.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm">
                                            {job.recruiter} • {job.location}
                                        </p>
                                    </div>

                                    <span
                                        className={`px-3 py-1 flex items-center justify-center text-sm rounded-full font-semibold ${job.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : job.status === "Approved"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {job.status}
                                    </span>
                                </div>

                                <p className="text-gray-600 mt-3 text-sm">
                                    💰 {job.salary}
                                </p>
                            </div>

                            {/* Expanded */}
                            <AnimatePresence>
                                {expanded === job.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="px-6 pb-6 text-sm text-gray-700 space-y-2"
                                    >
                                        <p>
                                            <b>Description:</b>{" "}
                                            {job.description}
                                        </p>
                                        <p>
                                            <b>Requirements:</b>{" "}
                                            {job.requirements}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}