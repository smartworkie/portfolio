import React, {useState} from 'react';
import './header.css';
import { HashLink as Link } from 'react-router-hash-link'
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
        const [show, setShow]=useState(false);
        const handleShow = () =>{
            setShow(!show);
        }
    return (
        <div className='header-wrapper'>
        <button  id ='bar' onClick={handleShow} >
  {!show? <FaBars  className = 'bars'/>:<AiOutlineClose  className = 'bars'/>}
        
 </button>
   {show &&  (     <div  className='header-wrappers'>
            <ul style={{listStyleType:'none'}}>
              <Link to='#home' smooth> <li>Home</li></Link>
               <Link to='#service' smooth> <li>Services</li> </Link>
              <Link to ="#skill" smooth>  <li>Skills</li> </Link>
               <Link to="#project" smooth> <li>Projects</li> </Link>
               <Link to="#contact" smooth><li>Contact Us</li> </Link>     
            </ul>
        </div>)}
    </div>
    )
}
export default Header;