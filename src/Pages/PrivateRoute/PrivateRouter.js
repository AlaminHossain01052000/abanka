import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className='display-middle-container'>
            <div className="spinner-border text-primary mt-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    }
    if (user.email) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};

export default PrivateRouter;