import React, { useState } from 'react';
import Login from '../components/auth/Login';
import SignIn from '../components/auth/SignIn';

const Home = () => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const handleClickLogin = () => {
        setLogin(true)
        setRegister(false)
    }

    const handleClickSignIn = () => {
        setRegister(true)
        setLogin(false)
    }
   
    return (
        <div>
            <button onClick={handleClickLogin}>Login</button>
            <button onClick={handleClickSignIn}>Register</button>
            {login ? <Login/> : null}
            {register ? <SignIn/> : null}
        </div>
    )
}
export default Home;