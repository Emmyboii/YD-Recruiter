import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminSidebar() {
    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Update desktop/mobile state on resize
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const links = [
        { to: "/admin/dashboard", label: "Dashboard", icon: "🏠" },
        { to: "/admin/jobrequest", label: "Job Requests", icon: "💼" },
        { to: "/admin/studentrequest", label: "Student Requests", icon: "📥" },
        { to: "/admin/recruiterslist", label: "Recruiters List", icon: "🧑‍💼" },
    ];

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            {/* Mobile toggle button */}
            {!isDesktop && (
                <button
                    onClick={() => setMobileOpen(true)}
                    className="fixed top-4 left-4 z-50 sm:text-2xl text-white bg-blue-700 p-2 rounded-md"
                >
                    <FaBars />
                </button>
            )}

            {/* Sidebar */}
            <AnimatePresence>
                {(isDesktop ? open : mobileOpen) && (
                    <motion.aside
                        className={`bg-blue-800 text-white h-screen flex flex-col transition-all duration-300 z-50 ${isDesktop
                            ? open
                                ? "w-64 fixed top-0"
                                : "w-20 fixed top-0"
                            : "fixed top-0 left-0 w-[70%]"
                            }`}
                        initial={{ x: isDesktop ? 0 : -20 }}
                        animate={{ x: 0 }}
                        exit={{ x: isDesktop ? 0 : -20 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-blue-700">
                            <a
                                href="/admin/dashboard"
                                className={`font-extrabold text-xl ${!open && isDesktop && "hidden"}`}
                            >
                                Admin Panel
                            </a>
                            <button
                                onClick={() => (isDesktop ? setOpen(!open) : setMobileOpen(false))}
                                className="text-white sm:text-2xl text-xl focus:outline-none"
                            >
                                {isDesktop ? (open ? null : <FaBars />) : <FaTimes />}
                            </button>
                        </div>

                        {/* Links */}
                        <ul className="flex flex-col flex-grow mt-6 space-y-2">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className={`flex items-center gap-3 px-5 py-3 rounded-xl mx-2 transition-all duration-200 ${location.pathname === link.to ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"
                                            }`}
                                    >
                                        <span className="sm:text-lg">{link.icon}</span>
                                        {(!isDesktop || open) && <span>{link.label}</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Logout at bottom */}
                        <div className="mt-auto p-4">
                            <button
                                onClick={() => setShowLogoutModal(true)}
                                className="flex items-center gap-3 w-full px-5 py-3 rounded-xl transition-all duration-200 border border-red-500 text-red-500 hover:bg-red-600 hover:text-white"
                            >
                                <span className="sm:text-lg">🚪</span>
                                {(!isDesktop || open) && <span>Logout</span>}
                            </button>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Mobile overlay */}
            {!isDesktop && mobileOpen && (
                <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileOpen(false)} />
            )}

            {/* Logout Modal */}
            <AnimatePresence>
                {showLogoutModal && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center px-4 bg-black/50 z-50"
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
                            <h2 className="sm:text-2xl text-xl font-bold mb-4">Confirm Logout</h2>
                            <p className="text-gray-700 mb-6">Are you sure you want to logout?</p>
                            <div className="flex justify-between gap-4">
                                <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-xl hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
