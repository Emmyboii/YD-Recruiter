import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedAdminRoutes = () => {
  const token = localStorage.getItem("youtoken");
  const user = JSON.parse(localStorage.getItem("youUser") || "{}");
  const location = useLocation();

  const isAuthenticated = token && token !== "undefined" && token !== "null";
  const isAdmin = user.role === "admin";

  // If not logged in, go to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in but not an admin, deny access
  if (!isAdmin) {
    return <Navigate to="/recruiter/dashboard" replace />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoutes;
