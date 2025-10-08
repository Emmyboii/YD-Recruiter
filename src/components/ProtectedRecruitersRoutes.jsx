import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRecruiterRoutes = () => {
  const token = localStorage.getItem("youtoken");
  const user = JSON.parse(localStorage.getItem("youUser") || "{}");
  const location = useLocation();

  const isAuthenticated = token && token !== "undefined" && token !== "null";
  const isRecruiter = user.role === "user" || user.role === "recruiter";

  // If not logged in, go to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in but not a recruiter, deny access
  if (!isRecruiter) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
};

export default ProtectedRecruiterRoutes;
