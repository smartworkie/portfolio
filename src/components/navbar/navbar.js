import React from 'react';
import './navbar.css';
import { HashLink as Link } from 'react-router-hash-link'

import logo from '../../img/logo.jpg'
import Whatsapp from '../../img/whatsapp.png';
import Mail from '../../img/email.png';
const Navbar = () => {

return (
    <div className='fixed'>
    <div className='wrapper' id ='home'>
    <div className='left'>
    <span>  <img src={logo} className='logo' alt='freepik'/></span>
       <span className='name' >Casuist Errand Services</span> 
    
     
    </div> 
    <div className='right'>
        <div className='list'>
            <ul style={{listStyleType:'none'}}>
             
             <Link to='#service' smooth>   <li>Services</li></Link>  
           <Link to ='#faq' smooth><li>FAQ</li></Link>
           
           <li id='contact1'><a href='https://wa.me/23409028085676'
    target='_blank' rel="noopener noreferrer">
           <img className='contact-image' src={Whatsapp} alt ='whatsapp'/>  </a>
           <Link to='#contact' smooth>    <img className='contact-image' src={Mail} alt = 'mail'/> </Link> </li>
          
            </ul>
          
            
        </div>
        </div>
        </div>
        </div>
    
)
}

export default Navbar;