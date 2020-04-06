import React, { useState } from 'react';
import Firebase from '../../config/firebase';
import { Redirect } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleChangeEmail = e => {
        setEmail(e.target.value);
    }
    const handleChangePassword = e => {
        setPassword(e.target.value);
    }
    const handleClick = () => {
        Firebase.login(email, password)
            .then(setRedirect(true))
            .catch(err => alert(err));
    }
    const redirectTo = redirect;
    
    if(redirectTo){
        return <Redirect to="/dashboard" />
    }
    return (
        <div>
            <h3>Login</h3>

            <h5>Email</h5>
            <input
                type="text"
                value={email}
                onChange={handleChangeEmail}
                name="email" />

            <h5>Password</h5>
            <input
                type="password"
                value={password}
                onChange={handleChangePassword}
                name="password" />

            <button onClick={handleClick}>Login</button>


        </div>

    )
}

export default  Login;