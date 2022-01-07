import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {

    const { admin, loading } = useAuth();



    const location = useLocation();
    if (loading) {
        return <div className='display-middle-container'>
            <div className="spinner-border text-primary mt-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    if (admin) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};
export default AdminRoute;