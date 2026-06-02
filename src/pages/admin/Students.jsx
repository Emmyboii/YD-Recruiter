import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function Students() {
    const [view, setView] = useState("grid");
    const [search, setSearch] = useState("");

    const students = useMemo(
        () => [
            {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                course: "Frontend Development",
                experience: 3,
                location: "Lagos",
                availability: "Immediate",
            },
            {
                id: 2,
                name: "Sarah Lee",
                email: "sarah@example.com",
                course: "Data Science",
                experience: 2,
                location: "Abuja",
                availability: "2 Weeks",
            },
            {
                id: 3,
                name: "Michael Brown",
                email: "michael@example.com",
                course: "Backend Development",
                experience: 4,
                location: "Remote",
                availability: "Immediate",
            },
        ],
        []
    );

    const filteredStudents = students.filter((student) =>
        `${student.name} ${student.email} ${student.course}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar />

            <main className="flex-1 p-8 md:p-12 md:pl-[304px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <motion.h1
                            className="text-3xl md:text-5xl font-extrabold text-blue-900"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            🎓 Student Management
                        </motion.h1>

                        <p className="text-gray-500 mt-2">
                            Manage all students on the platform.
                        </p>
                    </div>

                    <Link
                        to="/admin/students/add"
                        className="bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
                    >
                        + Add Student
                    </Link>
                </div>

                {/* Search + Toggle */}
                <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
                    <input
                        type="text"
                        placeholder="Search students..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
                    />

                    <div className="flex gap-2">
                        <button
                            onClick={() => setView("grid")}
                            className={`px-4 py-2 rounded-xl ${view === "grid"
                                    ? "bg-blue-700 text-white"
                                    : "bg-white border"
                                }`}
                        >
                            Grid
                        </button>

                        <button
                            onClick={() => setView("table")}
                            className={`px-4 py-2 rounded-xl ${view === "table"
                                    ? "bg-blue-700 text-white"
                                    : "bg-white border"
                                }`}
                        >
                            Table
                        </button>
                    </div>
                </div>

                {/* GRID VIEW */}
                {view === "grid" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredStudents.map((student) => (
                            <div
                                key={student.id}
                                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-bold text-blue-900">
                                    {student.name}
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    {student.course}
                                </p>

                                <p className="text-gray-600">
                                    Experience: {student.experience} yrs
                                </p>

                                <p className="text-gray-600">
                                    Location: {student.location}
                                </p>

                                <p className="text-gray-600">
                                    Availability: {student.availability}
                                </p>

                                <div className="flex gap-2 mt-5">
                                    <Link
                                        to={`/admin/students/${student.id}`}
                                        className="flex-1 bg-blue-700 text-white py-2 rounded-xl text-center"
                                    >
                                        View
                                    </Link>

                                    <Link
                                        to={`/admin/students/${student.id}/edit`}
                                        className="flex-1 bg-yellow-500 text-white py-2 rounded-xl text-center"
                                    >
                                        Edit
                                    </Link>

                                    <button className="flex-1 bg-red-500 text-white py-2 rounded-xl">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* TABLE VIEW */}
                {view === "table" && (
                    <div className="bg-white rounded-2xl shadow overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Course</th>
                                    <th className="p-4">Experience</th>
                                    <th className="p-4">Location</th>
                                    <th className="p-4">Availability</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredStudents.map((student) => (
                                    <tr
                                        key={student.id}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="p-4">{student.name}</td>
                                        <td className="p-4">{student.course}</td>
                                        <td className="p-4">
                                            {student.experience} yrs
                                        </td>
                                        <td className="p-4">{student.location}</td>
                                        <td className="p-4">
                                            {student.availability}
                                        </td>

                                        <td className="p-4 flex gap-3">
                                            <Link
                                                to={`/admin/students/${student.id}`}
                                                className="text-blue-600 font-semibold"
                                            >
                                                View
                                            </Link>

                                            <Link
                                                to={`/admin/students/${student.id}/edit`}
                                                className="text-yellow-600 font-semibold"
                                            >
                                                Edit
                                            </Link>

                                            <button className="text-red-600 font-semibold">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    );
}