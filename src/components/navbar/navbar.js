import React from 'react';
import './navbar.css';
import { HashLink as Link } from 'react-router-hash-link'

import HeartEmoji from '../../img/heartemoji.png'
const Navbar = () => {

return (
    <div className='wrapper' id ='home'>
    <div className='left'>
       <span className='name' >Hello World</span> 
     <span>  <img src={HeartEmoji} className='heart' alt='freepik'/></span>
     
    </div> 
    <div className='right'>
        <div className='list'>
            <ul style={{listStyleType:'none'}}>
             <Link to ='#home'>   <li>Home</li></Link>
             <Link to='#service'>   <li>Services</li></Link>
             <Link to='#skill'>   <li>Skills</li></Link>
             <Link to='#project'>   <li>Projects</li>  </Link>   
            </ul>
           <Link to='#contact'> <button className='contact button'>
                Contact Us
            </button></Link>
            
        </div>
        </div>
        </div>
    
)
}

export default Navbar;