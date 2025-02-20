import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

// Dummy Authentication Variable
let isAuthenticated = false;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(isAuthenticated);
    const router = useRouter();

    const login = () => {
        isAuthenticated = true;
        setAuthState(true);
        router.push('/dashboard');
    };

    const logout = () => {
        isAuthenticated = false;
        setAuthState(false);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
