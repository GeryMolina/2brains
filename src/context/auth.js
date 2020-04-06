import React, { useState, useEffect } from 'react';
import App from '../config/firebase';

export const Context = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [collab, setCollab]= useState([]);
    const [id]= useState('') 
    useEffect(() => {
        App.authChange(setCurrentUser);
        const apiCall = async ()=>{
            const data = await fetch('https://randomuser.me/api/?results=20');
            const users = await data.json()
            setCollab(users.results);

        }
        apiCall()
    }, []);


    return (<Context.Provider value={{ currentUser, collab, id}}>{children}</Context.Provider>)
}