import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { googleSignIn, logOut } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogIn = () => {
        googleSignIn(navigate, from);
    }
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div>
            <button onClick={handleGoogleLogIn}>Google</button>
            <button onClick={handleLogOut}>Logout</button>

        </div>
    );
};

export default Login;