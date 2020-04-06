import React, { useState } from 'react';
import Firebase from '../../config/firebase';
import { Redirect } from 'react-router-dom';
import '../style.css'


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
        <div className='login'>
            <h3>Login</h3>

            <h5>Email</h5>
            <input
                type="text"
                value={email}
                onChange={handleChangeEmail}
                name="email" 
                prefix='https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png' />

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