import React, {useState} from 'react';
import './header.css';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
        const [show, setShow]=useState(false);
        const handleShow = () =>{
            setShow(!show);
        }
    return (
        <div>
        <button  id ='bar' onClick={handleShow} >
  {!show? <FaBars  className = 'bars'/>:<AiOutlineClose  className = 'bars'/>}
        
 </button>
   {!show &&  (     <div  className='header-wrapper'>
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Projects</li> 
                <li>Contact Us</li>      
            </ul>
        </div>)}
    </div>
    )
}
export default Header;