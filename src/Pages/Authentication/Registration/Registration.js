import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Registration.css';


const Register = () => {
    const [userInfo, setUserInfo] = useState({});
    const [rePassword, setRePassword] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const { registerNewUser, error, googleSignIn } = useAuth();

    const handleMatchingPassword = e => {
        setRePassword(e.target.value);
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...userInfo };
        newUser[field] = value;
        setUserInfo(newUser);
    }
    const handleUserRegistration = e => {
        e.preventDefault();
        if (userInfo.password === rePassword) {
            console.log(userInfo, location, navigate);
            registerNewUser(userInfo.displayName, userInfo.email, userInfo.password, location, navigate);
            alert("Registered Successfully");
        }
        else {
            alert("Password won't matched .Re type password carefully")
        }
    }

    const handleGoogleLogIn = () => {
        googleSignIn(navigate, from);
    }
    return (
        <div className="register-page mt-5">
            <h1 className='text-center font-poppins'>Register Here</h1>
            {
                error && <p className='text-center font-mukta'>{error}</p>

            }
            <form onSubmit={handleUserRegistration} className="register-form w-50 mx-auto">
                <input className="form-control mb-3"
                    required
                    placeholder="Your Name"
                    type="text"
                    name="displayName"
                    onChange={handleOnChange}

                />
                <input className="form-control mb-3"
                    required
                    placeholder="Your Email"
                    type="email"
                    onChange={handleOnChange}
                    name="email"


                />
                <input className="form-control mb-3"
                    required
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}

                />
                <input className="form-control mb-3"
                    required
                    placeholder="Re-Type Your Password"
                    type="password"
                    name="rePassword"
                    onChange={handleMatchingPassword}

                />
                <input className="form-control mb-3 btn btn-danger" type="submit" />
            </form>
            <div className='display-middle-container'>
                <button className='btn btn-warning text-white fw-bold' onClick={handleGoogleLogIn} title='click here to google log in'>Google</button>
            </div>

            <h2 className='text-center font-spline mt-4'>Already Registered ? Click
                <Link to="/login" className='text-primary' style={{ color: "#341f97", cursor: "pointer", textDecoration: "none" }}> Here </Link>
                to Sign in</h2>
        </div>
    );
};

export default Register;