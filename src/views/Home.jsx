import React, { useState } from 'react';
import Login from '../components/auth/Login';
import SignIn from '../components/auth/SignIn';
import '../components/style.css';
import Logo from '../assets/logo.png';
import Image from '../assets/image.png'


const Home = () => {
    const [login, setLogin] = useState(true);
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
        <div className='container'>
            <section className='homeImg'><img  src={Image} alt='' /></section>
            <section className='home'>
                <section className='logo'><img src={Logo} alt='' /></section>
                <section className='homeBtn'>
                    <button className='btn-login' onClick={handleClickLogin}>Login</button>
                    <button className='btn-register' onClick={handleClickSignIn}>Register</button>
                </section>
                {login ? <Login /> : null}
                {register ? <SignIn /> : null}  
            </section>

            
        </div>
    )
}
export default Home;