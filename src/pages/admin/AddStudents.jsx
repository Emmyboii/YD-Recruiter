import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AddStudents() {
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
                {/* Header */}
                <motion.h1
                    className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ➕ Add Student
                </motion.h1>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow p-6 grid md:grid-cols-2 gap-6"
                >
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                        required
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="course"
                        placeholder="Course"
                        value={form.course}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="experience"
                        type="number"
                        placeholder="Experience (years)"
                        value={form.experience}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    <input
                        name="availability"
                        placeholder="Availability"
                        value={form.availability}
                        onChange={handleChange}
                        className="p-3 border rounded-xl"
                    />

                    {/* CV Upload */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 font-semibold text-blue-900">
                            Upload CV (PDF)
                        </label>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                                setForm({ ...form, cv: e.target.files[0] })
                            }
                            className="p-3 border rounded-xl w-full bg-white"
                        />

                        {form.cv && (
                            <p className="text-sm text-gray-600 mt-2">
                                Selected: {form.cv.name}
                            </p>
                        )}
                    </div>

                    <input
                        name="skills"
                        placeholder="Skills (comma separated)"
                        value={form.skills}
                        onChange={handleChange}
                        className="p-3 border rounded-xl md:col-span-2"
                    />

                    <textarea
                        name="bio"
                        placeholder="Bio"
                        value={form.bio}
                        onChange={handleChange}
                        className="p-3 border rounded-xl md:col-span-2 h-28"
                    />

                    {/* Actions */}
                    <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={() => navigate("/admin/students")}
                            className="px-5 py-3 rounded-xl border"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800"
                        >
                            Save Student
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}