import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // You can implement your own authentication check here
    const isAuthenticated = true; // This should be replaced with your actual auth check

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
