import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../../components/RecruiterSidebar";

export default function RequestedStudents() {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("All");
    const [expanded, setExpanded] = useState(null);

    const students = useMemo(
        () => [
            {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com",
                program: "Executive Mini MBA",
                cohort: "Cohort 2",
                dateRequested: "2025-09-28",
                status: "Pending",
                phone: "+1 (234) 567-8901",
                country: "United States",
                approvalDate: "-",
                notes: "Awaiting review from admin.",
            },
            {
                id: 2,
                name: "Sarah Johnson",
                email: "sarah.j@example.com",
                program: "Executive Advanced Diploma",
                cohort: "Cohort 1",
                dateRequested: "2025-09-10",
                status: "Approved",
                phone: "+44 789 342 9090",
                country: "United Kingdom",
                approvalDate: "2025-09-15",
                notes: "Approved and enrolled successfully.",
            },
            {
                id: 3,
                name: "Michael Brown",
                email: "michael.b@example.com",
                program: "Professional Courses",
                cohort: "Cohort 3",
                dateRequested: "2025-08-14",
                status: "Rejected",
                phone: "+234 812 555 0192",
                country: "Nigeria",
                approvalDate: "-",
                notes: "Application rejected due to incomplete KYC.",
            },
            {
                id: 4,
                name: "Linda White",
                email: "linda.w@example.com",
                program: "Executive Diploma",
                cohort: "Cohort 2",
                dateRequested: "2025-09-05",
                status: "Approved",
                phone: "+1 (646) 900-2233",
                country: "United States",
                approvalDate: "2025-09-09",
                notes: "Excellent candidate for leadership track.",
            },
        ],
        []
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return students.filter((s) => {
            const matchesText =
                s.name.toLowerCase().includes(q) ||
                s.email.toLowerCase().includes(q) ||
                s.program.toLowerCase().includes(q);
            const matchesStatus = status === "All" ? true : s.status === status;
            return matchesText && matchesStatus;
        });
    }, [students, query, status]);

    return (
        <div className="flex min-h-screen bg-gray-50">
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
                            🧑‍🎓 Student <span className="text-yellow-500">Requests</span>
                        </motion.h1>
                        <p className="text-gray-500 mt-1">
                            Manage and review all student registration or enrollment requests.
                        </p>
                    </div>
                </div>

                {/* Search + Filter */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="🔍 Search name, email, or program..."
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
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>
                </div>

                {/* Table or Empty State */}
                <section className="bg-white rounded-2xl shadow-md overflow-hidden">
                    {filtered.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            <p className="sm:text-lg mb-3">No student requests found.</p>
                            <p className="text-sm">
                                Try changing your search or filter options.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse text-left text-nowrap text-gray-700">
                                <thead className="bg-blue-50 border-b">
                                    <tr>
                                        <th className="p-4 font-semibold">Name</th>
                                        <th className="p-4 font-semibold">Email</th>
                                        <th className="p-4 font-semibold">Program</th>
                                        <th className="p-4 font-semibold">Cohort</th>
                                        <th className="p-4 font-semibold">Date Requested</th>
                                        <th className="p-4 font-semibold">Status</th>
                                        <th className="p-4 font-semibold text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((student) => (
                                        <React.Fragment key={student.id}>
                                            {/* Row */}
                                            <tr
                                                className="border-b hover:bg-gray-50 transition"
                                            >
                                                <td className="p-4">{student.name}</td>
                                                <td className="p-4">{student.email}</td>
                                                <td className="p-4">{student.program}</td>
                                                <td className="p-4">{student.cohort}</td>
                                                <td className="p-4">{student.dateRequested}</td>
                                                <td className="p-4">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-sm font-medium ${student.status === "Approved"
                                                                ? "bg-green-100 text-green-700"
                                                                : student.status === "Pending"
                                                                    ? "bg-yellow-100 text-yellow-700"
                                                                    : "bg-red-100 text-red-700"
                                                            }`}
                                                    >
                                                        {student.status}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <button
                                                        onClick={() =>
                                                            setExpanded(
                                                                expanded === student.id ? null : student.id
                                                            )
                                                        }
                                                        className="text-blue-600 font-semibold hover:underline"
                                                    >
                                                        {expanded === student.id ? "Hide" : "View"}
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Expandable Row */}
                                            <AnimatePresence>
                                                {expanded === student.id && (
                                                    <motion.tr
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="bg-gray-50 border-b"
                                                    >
                                                        <td colSpan="7" className="p-6">
                                                            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                                                                <div>
                                                                    <p>
                                                                        <span className="font-semibold">
                                                                            Phone:
                                                                        </span>{" "}
                                                                        {student.phone}
                                                                    </p>
                                                                    <p>
                                                                        <span className="font-semibold">
                                                                            Country:
                                                                        </span>{" "}
                                                                        {student.country}
                                                                    </p>
                                                                    <p>
                                                                        <span className="font-semibold">
                                                                            Approval Date:
                                                                        </span>{" "}
                                                                        {student.approvalDate}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p>
                                                                        <span className="font-semibold">
                                                                            Notes:
                                                                        </span>{" "}
                                                                        {student.notes}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </motion.tr>
                                                )}
                                            </AnimatePresence>
                                        </React.Fragment>
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
