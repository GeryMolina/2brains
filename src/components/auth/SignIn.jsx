import React, { useState } from 'react';


const SignIn = () => {
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

    return (
        <div>
            <h3>Register</h3>

            <h5>Name</h5>
            <input
                type="text"
                value={name}
                onChange={handleChangeName}
                name="email" />

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

            <button>Login</button>


        </div>

    )
}

export default SignIn;