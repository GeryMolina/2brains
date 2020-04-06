import React, { useState } from 'react';
import Firebase from '../../config/firebase'
import { Redirect } from 'react-router-dom';
import '../style.css'


const SignIn = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const handleChangeName = e => {
        setName(e.target.value);
    }
    const handleChangeEmail = e => {
        setEmail(e.target.value);
    }
    const handleChangePassword = e => {
        setPassword(e.target.value);
    }

    async function onRegister() {
        try{
            Firebase.signIn(email, password, name)  
            .then(setRedirect(true))
            
        }
        catch(error){
            alert(error.message)
        } 
    }
    const handleClick = ()=>{
        onRegister()
    }
    const redirectTo = redirect;
    
    if(redirectTo){
        return <Redirect to="/dashboard" />
    }


    return (
        <div className= 'register'>
            
            <h3>Register</h3>

            <h5>Name</h5>
            <input
                type="text"
                onChange={(handleChangeName)}
                name="email" />

            <h5>Email</h5>
            <input
                type="email"
                onChange={handleChangeEmail}
                name="email" />

            <h5>Password</h5>
            <input
                type="password"
                onChange={handleChangePassword}
                name="password" />

            <button onClick={handleClick}>Register</button>


        </div>

    )
}

export default SignIn;