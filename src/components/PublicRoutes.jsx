import { Navigate, useLocation } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
    const token = localStorage.getItem('youtoken');
    const user = JSON.parse(localStorage.getItem('youUser') || '{}');
    const location = useLocation();

    const isAuthenticated = token && token !== 'undefined' && token !== 'null';

    if (isAuthenticated) {
        // Determine correct dashboard path
        const defaultPath = user?.role === 'admin' ? '/admin/dashboard' : '/recruiter/dashboard';

        // If redirected from somewhere, go back there — else go to default
        const prevRoute = location.state?.from?.pathname || defaultPath;

        return <Navigate to={prevRoute} replace />;
    }

    // If not authenticated, show the child route (e.g., Login / Register)
    return children;
};

export default PublicRoutes;
