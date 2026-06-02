import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function StudentDetails() {
    const { id } = useParams();

    // Mock data (replace with API later)
    const student = {
        id,
        name: "John Doe",
        email: "john@example.com",
        phone: "+2348012345678",
        course: "Frontend Development",
        experience: 3,
        location: "Lagos, Nigeria",
        availability: "Immediate",
        skills: ["React", "Next.js", "Tailwind"],
        bio: "Passionate frontend developer focused on building scalable UI systems.",
        requests: [
            { company: "TechCorp", status: "Pending" },
            { company: "DevStudio", status: "Approved" },
        ],
        cv: "john_doe_cv.pdf",
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
                    <h1 className="text-4xl font-extrabold text-blue-900">
                        👤 {student.name}
                    </h1>
                    <p className="text-gray-500">{student.course}</p>
                </motion.div>

                {/* Info */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-2xl shadow space-y-3">
                        <p><b>Email:</b> {student.email}</p>
                        <p><b>Phone:</b> {student.phone}</p>
                        <p><b>Location:</b> {student.location}</p>
                        <p><b>Experience:</b> {student.experience} yrs</p>
                        <p><b>Availability:</b> {student.availability}</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h3 className="font-bold mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {student.skills.map((s, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
                        <h3 className="font-bold mb-2">Bio</h3>
                        <p className="text-gray-600">{student.bio}</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
                        <h3 className="font-bold mb-2">CV</h3>

                        {student.cv ? (
                            <a
                                href="/path/to/cv.pdf"
                                className="text-blue-700 underline"
                            >
                                📄 View CV ({student.cv})
                            </a>
                        ) : (
                            <p className="text-gray-500">No CV uploaded</p>
                        )}
                    </div>

                    {/* Recruiter Requests */}
                    <div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
                        <h3 className="font-bold mb-4">Recruiter Requests</h3>

                        <div className="space-y-3">
                            {student.requests.map((req, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between border p-3 rounded-xl"
                                >
                                    <span>{req.company}</span>
                                    <span
                                        className={`font-semibold ${req.status === "Approved"
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                            }`}
                                    >
                                        {req.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-8">
                    <Link
                        to={`/admin/students/${id}/edit`}
                        className="bg-yellow-500 text-white px-5 py-3 rounded-xl"
                    >
                        Edit Student
                    </Link>

                    <button className="bg-red-500 text-white px-5 py-3 rounded-xl">
                        Delete Student
                    </button>
                </div>
            </main>
        </div>
    );
}