import React, { createContext, useState, useContext, useEffect } from 'react';

// Context create karen
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // User ko localStorage ya sessionStorage se check karein
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Agar user data ho to state update karein
        }
    }, []);

    const login = (userData) => {
        setUser(userData);  // User ko login hone ke baad set karein
        localStorage.setItem('user', JSON.stringify(userData));  // Local storage mein save karein
    };

    const logout = () => {
        setUser(null);  // Logout karne par user ko null kar dein
        localStorage.removeItem('user');  // Local storage se remove karein
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
