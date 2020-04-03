import React, { useState, useEffect } from 'react';
import App from '../config/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        App.authChange(setCurrentUser);
    }, []);

    return (<AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>)
}