"use client"; // This line makes this file a Client Component

import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserContextType {
    username: string | null;
    setUsername: (username: string | null) => void;
    logout: () => void; // Add logout function type
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    // Define the logout function
    const logout = () => {
        setUsername(null); // Clear the username state
        localStorage.removeItem('username'); // Remove username from local storage
        localStorage.removeItem('token'); // Remove token if applicable
    };

    return (
        <UserContext.Provider value={{ username, setUsername, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
