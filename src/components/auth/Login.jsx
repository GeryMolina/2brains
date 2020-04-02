import React, {useState} from 'react';
import Firebase from '../../config/firebase'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = e =>{
        setEmail(e.target.value);
    }
    const handleChangePassword = e =>{
        setPassword(e.target.value);
    }
    const handleClick = () => {
        Firebase.login(email, password)
        
        // .then(props.history.push('./dashboard')
        .catch(err => alert(err));
    }
    return (
        <div>
            <h3>Login</h3>

            <h5>Email</h5>
            <input
                type="text"
                value= {email}
                onChange= {handleChangeEmail}
                name="email" />

            <h5>Password</h5>
            <input
                type="password"
                value = {password}
                onChange= {handleChangePassword}
                name="password"/>

            <button onClick={handleClick}>Login</button>


        </div>

    )
}

export default Login;