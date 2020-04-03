import React, { useState } from 'react';
import Firebase from '../../config/firebase'


const SignIn = props => {
    console.log(props);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            Firebase.signIn(email, password, name);
            props.history.push('/dashbord');
        }
        catch(error){
            alert(error.message)
        } 
    }
    const handleClick = ()=>{
        onRegister()
    }
    return (
        <div>
            
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