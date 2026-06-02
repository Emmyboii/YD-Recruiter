import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-700/20 blur-3xl" />
                </div>

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-blue-700">
                    404
                </h1>

                <div className="mt-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Page Not Found
                    </h2>

                    <p className="mt-4 text-gray-400 text-lg">
                        The page you're looking for doesn't exist, has been moved,
                        or the link may be incorrect.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
                    >
                        <Home size={18} />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 font-semibold text-white transition hover:border-blue-700 hover:bg-blue-700/10"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                {/* Optional */}
                <div className="mt-12 text-sm text-gray-500">
                    Error Code: 404
                </div>
            </div>
        </div>
    );
}