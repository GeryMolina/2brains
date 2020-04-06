import React, { useContext, useState } from 'react';
import Age from '../../assets/age.png';
import Email from '../../assets/email.png';
import Adress from '../../assets/adress.png';
import Phone from '../../assets/phone.png';
import Local from '../../assets/local.png';
import Arrow from '../../assets/arrow.png';
import '../style.css'

import { Context } from '../../context/auth'

const Collabs = () => {
    const { collab } = useContext(Context);
    const [id, setId] = useState('');
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [panel, setPanel]= useState(true);
   
   
    const handleClick = id => {
        setId(id)
        setUser(collab.filter(e => e.login.uuid === id));
        setShow(true)
        setPanel(true)
    }
    const handleShow = () =>{
        setPanel(true)
        setShow(false)
    }
    
    
    return (
        <div className='colab'>
            
            { show ?
            <section className='files'>
                {user.map(item => (
                    <section className='containerFile' key={item.phone} >
                        <img src={Arrow} alt="" onClick={handleShow} className='arrow'/>
                        <img className='photo' src={item.picture.large} alt='' />
                        <h5>{item.name.first} {item.name.last}</h5>
                        <section>
                            <p><img className='icons' src={Age} alt='' /> {item.dob.age}</p>
                            <p><img className='icons' src={Phone} alt='' /> {item.cell}</p>
                            <p><img className='icons' src={Email} alt='' /> {item.email}</p>
                            <p><img className='icons' src={Adress} alt='' /> {item.location.street.number} {item.location.street.name}</p>
                            <p><img className='icons' src={Local} alt='' /> {item.location.city}, {item.location.country}</p>
                        </section>
                        <h6>Registered: {item.registered.age} years</h6>
                    </section>
                ))}
            </section> : null}
            {panel ?
            <div >
                {collab.map(item => (
                    <section className='info'  key={item.phone} onClick={handleClick.bind(null, item.login.uuid)}>
                        <img src={item.picture.medium} alt='' />
                        <section >
                            <h5>{item.name.first} {item.name.last}</h5>
                            <p>{item.email}</p>
                        </section>
                    </section>
                ))}
            </div> : null}
        </div>

    )
}
export default Collabs;