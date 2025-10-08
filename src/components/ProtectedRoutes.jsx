import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('youtoken');
    const isAuthenticated = token && token !== 'undefined' && token !== 'null';
    const location = useLocation();

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default ProtectedRoutes