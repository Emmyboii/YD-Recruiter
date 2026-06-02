import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecruiterSidebar from "../../components/RecruiterSidebar";

export default function RecruiterStudentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // mock (replace with API later)
    const student = {
        id,
        name: "John Doe",
        course: "Frontend Development",
        experience: 2,
        location: "Lagos, Nigeria",
        availability: "Immediate",
        skills: ["React", "Next.js", "Tailwind"],
        bio: "Frontend developer passionate about UI/UX and performance optimization.",
        email: "john@example.com",
        phone: "+2348012345678",
        cvUrl: "#"
    };

    return (
        <div className="flex min-h-screen bg-white">
            <RecruiterSidebar />

            <main className="flex-1 p-8 md:p-12 md:pl-[304px]">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-blue-700 font-semibold"
                >
                    ← Back
                </button>

                <div className="bg-white shadow rounded-2xl p-8 border">
                    <h1 className="text-3xl font-bold text-blue-900">{student.name}</h1>
                    <p className="text-gray-600 mt-1">{student.course}</p>

                    <div className="mt-6 space-y-2 text-gray-700">
                        <p><b>Experience:</b> {student.experience} years</p>
                        <p><b>Location:</b> {student.location}</p>
                        <p><b>Availability:</b> {student.availability}</p>
                        <p><b>Email:</b> {student.email}</p>
                        <p><b>Phone:</b> {student.phone}</p>
                    </div>

                    <div className="mt-6">
                        <b>Skills:</b>
                        <div className="flex gap-2 flex-wrap mt-2">
                            {student.skills.map((s, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <b>Bio:</b>
                        <p className="text-gray-600">{student.bio}</p>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <a
                            href={student.cvUrl}
                            className="bg-black text-white px-4 py-2 rounded-xl"
                        >
                            📄 View CV
                        </a>

                        <button className="bg-blue-700 text-white px-4 py-2 rounded-xl">
                            📩 Request Student
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}