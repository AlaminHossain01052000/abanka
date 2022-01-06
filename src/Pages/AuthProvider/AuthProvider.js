import React, { createContext } from 'react';
import useFirebasee from '../hooks/useFirebasee';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebasee();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;