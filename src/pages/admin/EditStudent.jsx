import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        location: "",
        availability: "",
        skills: "",
        bio: "",
        cv: null,
    });

    useEffect(() => {
        // mock fetch
        setForm({
            name: "John Doe",
            email: "john@example.com",
            phone: "+2348012345678",
            course: "Frontend Development",
            experience: 3,
            location: "Lagos",
            availability: "Immediate",
            skills: "React, Next.js, Tailwind",
            bio: "Frontend dev",
        });
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const studentData = {
            ...form,
            cv: form.cv ? form.cv.name : null,
        };

        console.log("New Student:", studentData);

        navigate("/admin/students");
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar />

            <main className="flex-1 p-8 md:p-12 md:pl-[304px]">
                <motion.h1
                    className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ✏️ Edit Student
                </motion.h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow p-6 grid md:grid-cols-2 gap-6"
                >
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="experience"
                        value={form.experience}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="availability"
                        value={form.availability}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    {/* CV Upload */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 font-semibold text-blue-900">
                            Replace CV (PDF)
                        </label>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                                setForm({ ...form, cv: e.target.files[0] })
                            }
                            className="p-3 border rounded-xl w-full bg-white"
                        />

                        {form.cv && typeof form.cv === "string" && (
                            <p className="text-sm text-gray-600 mt-2">
                                Current CV: {form.cv}
                            </p>
                        )}
                    </div>

                    <input
                        name="skills"
                        value={form.skills}
                        onChange={handleChange}
                        className="p-3 border rounded-xl md:col-span-2"
                    />

                    <textarea
                        name="bio"
                        value={form.bio}
                        onChange={handleChange}
                        className="p-3 border rounded-xl md:col-span-2 h-28"
                    />

                    <div className="md:col-span-2 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => navigate("/admin/students")}
                            className="px-5 py-3 border rounded-xl"
                        >
                            Cancel
                        </button>

                        <button className="px-5 py-3 bg-blue-700 text-white rounded-xl">
                            Update Student
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}