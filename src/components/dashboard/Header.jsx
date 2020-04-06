import React, { useContext, useState } from 'react';
import { Context } from '../../context/auth';
import Firebase from '../../config/firebase';
import Logout from '../../assets/logout.png';
import '../style.css'
import { Redirect } from 'react-router-dom';

const Header = () => {
    const {currentUser} = useContext(Context);
    const [redirect, setRedirect] = useState(false);
    
    const handleClick = ()=>{
        Firebase.logout();
        
    }
    const redirectTo = redirect;
    
    if(redirectTo){
        return <Redirect to="/" />
    }

    if (currentUser != null) {
       
    return <div className='header'>
        <h1>Hello {currentUser.displayName}!</h1>
        <button onClick={handleClick}><img src={Logout} alt=''/></button>
        </div>
        
    }
    else {
        setRedirect(true)

    }
    
}
export default Header;