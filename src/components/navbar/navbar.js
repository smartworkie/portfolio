import React from 'react';
import './navbar.css';
import HeartEmoji from '../../img/heartemoji.png'
const Navbar = () => {

return (
    <div className='wrapper'>
    <div className='left'>
       <span className='name'>Hello World</span> 
     <span>  <img src={HeartEmoji} className='heart' alt='freepik'/></span>
     
    </div> 
    <div className='right'>
        <div className='list'>
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Projects</li>       
            </ul>
            <button className='contact button'>
                Contact Us
            </button>
            
        </div>
        </div>
        </div>
    
)
}

export default Navbar;