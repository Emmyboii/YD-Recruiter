import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminRecruitersList() {
    const [recruiters, setRecruiters] = useState([
        {
            id: 1,
            name: "Alice Johnson",
            company: "TechCorp",
            email: "alice@techcorp.com",
            phone: "08012345678",
            status: "Active",
            industry: "Technology",
            city: "Lagos",
            state: "Lagos",
            country: "Nigeria",
            size: "51-200 employees",
            website: "https://techcorp.com",
            about: "TechCorp is a leading software solutions provider, specializing in web and mobile development."
        },
        {
            id: 2,
            name: "Bob Smith",
            company: "DataWorks",
            email: "bob@dataworks.com",
            phone: "08023456789",
            status: "Inactive",
            industry: "Data Analytics",
            city: "Abuja",
            state: "FCT",
            country: "Nigeria",
            size: "11-50 employees",
            website: "https://dataworks.com",
            about: "DataWorks focuses on data-driven solutions for businesses, helping them visualize and analyze complex datasets."
        },
        {
            id: 3,
            name: "Clara Lee",
            company: "DesignHub",
            email: "clara@designhub.com",
            phone: "08034567890",
            status: "Active",
            industry: "Design",
            city: "Remote",
            state: "-",
            country: "-",
            size: "5-20 employees",
            website: "https://designhub.com",
            about: "DesignHub is a creative studio delivering UI/UX and branding solutions for startups and enterprises."
        },
    ]);

    const [expandedId, setExpandedId] = useState(null);
    const [deleteModal, setDeleteModal] = useState({ open: false, recruiterId: null });
    const [search, setSearch] = useState("");

    const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

    const handleDelete = () => {
        setRecruiters(recruiters.filter(r => r.id !== deleteModal.recruiterId));
        setDeleteModal({ open: false, recruiterId: null });
    };

    const filteredRecruiters = recruiters.filter(
        r => r.name.toLowerCase().includes(search.toLowerCase()) || r.company.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar />

            <main className="flex-1 p-8 md:p-12 md:pl-[306px] w-full">
                <header className="mb-6">
                    <h1 className="text-4xl font-bold text-blue-900 mb-2">🧑‍💼 Recruiters List</h1>
                    <p className="text-blue-700">
                        Review, manage, and remove recruiters from the platform.
                    </p>
                </header>

                {/* Search */}
                <div className="mb-4 flex sm:justify-end">
                    <input
                        type="text"
                        placeholder="Search by name or company..."
                        className="p-2 rounded-xl border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Recruiters Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-2xl text-nowrap shadow-lg">
                        <thead>
                            <tr className="bg-blue-900 text-white">
                                <th className="py-3 px-6 text-left rounded-tl-2xl">Name</th>
                                <th className="py-3 px-6 text-left">Company</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Phone</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-center rounded-tr-2xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRecruiters.map(r => (
                                <React.Fragment key={r.id}>
                                    <tr className="border-b hover:bg-gray-50 transition cursor-pointer" onClick={() => toggleExpand(r.id)}>
                                        <td className="py-3 px-6">{r.name}</td>
                                        <td className="py-3 px-6">{r.company}</td>
                                        <td className="py-3 px-6">{r.email}</td>
                                        <td className="py-3 px-6">{r.phone}</td>
                                        <td className="py-3 px-6">
                                            <span className={`px-2 py-1 rounded-full text-sm font-semibold ${r.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                                {r.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setDeleteModal({ open: true, recruiterId: r.id }); }}
                                                className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600 transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Expanded Details */}
                                    <AnimatePresence>
                                        {expandedId === r.id && (
                                            <motion.tr
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="bg-gray-50"
                                            >
                                                <td colSpan="6" className="px-6 py-4">
                                                    <div className="bg-white p-4 rounded-2xl shadow-inner space-y-2 border-l-4 border-blue-500">
                                                        <p><strong>Industry:</strong> {r.industry}</p>
                                                        <p><strong>Location:</strong> {r.city}, {r.state}, {r.country}</p>
                                                        <p><strong>Company Size:</strong> {r.size}</p>
                                                        <p><strong>Website:</strong> <a href={r.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{r.website}</a></p>
                                                        <p><strong>About:</strong> {r.about}</p>
                                                        <p className="text-gray-400 text-sm mt-2 italic">Click the row to collapse details.</p>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        )}
                                    </AnimatePresence>
                                </React.Fragment>
                            ))}
                            {filteredRecruiters.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-gray-500">No recruiters found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Delete Modal */}
                <AnimatePresence>
                    {deleteModal.open && (
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white rounded-2xl p-8 w-96 text-center shadow-lg"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <h2 className="sm:text-2xl text-xl font-bold mb-4">Confirm Delete</h2>
                                <p className="text-gray-700 mb-6">
                                    Are you sure you want to delete this recruiter? This action cannot be undone.
                                </p>
                                <div className="flex justify-between gap-4">
                                    <button
                                        onClick={() => setDeleteModal({ open: false, recruiterId: null })}
                                        className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-xl hover:bg-gray-400 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
