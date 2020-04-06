import React, { useState, useContext } from 'react';
import Firebase from '../../config/firebase';
import { Context } from '../../context/auth';
import { Redirect } from 'react-router-dom';
import '../style.css'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {currentUser}= useContext(Context)

    const handleChangeEmail = e => {
        setEmail(e.target.value);
    }
    const handleChangePassword = e => {
        setPassword(e.target.value);
    }
    const handleClick = () => {
        Firebase.login(email, password)
            .catch(err => alert(err));
    }
    const redirectTo = redirect;
    
    if(redirectTo){
        return <Redirect to="/dashboard" />
    }
    if(currentUser){
        setRedirect(true)
    }
    return (
        <div className='login'>
            <h3>Login</h3>

            <h5>Email</h5>
            <input
                type="text"
                value={email}
                onChange={handleChangeEmail}
                name="email"/>

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