import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';

const Header = (props) => {
    const {currentUser} = useContext(AuthContext);

    if (currentUser != null) {
    return <div><h1>hello!{currentUser.displayName}</h1></div>
    }
    else {
        return <h1>You need login</h1>
    }
    
}
export default Header 