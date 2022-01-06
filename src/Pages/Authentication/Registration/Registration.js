import React from 'react';
// import googleLogIn from '../../hooks/UseFirebase';
const Registration = () => {
    const handleGoogleLogin = () => {
        // googleLogIn();
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google</button>
        </div>
    );
};

export default Registration;