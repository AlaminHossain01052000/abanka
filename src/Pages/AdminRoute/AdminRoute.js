import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {

    const { user, admin } = useAuth();

    console.log(admin);

    const location = useLocation();
    if (admin) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }

};
export default AdminRoute;