import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user } = useAuth();
    const location = useLocation();
    if (user.email) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};

export default PrivateRouter;