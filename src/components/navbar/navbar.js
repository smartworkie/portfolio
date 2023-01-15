import React from 'react';

const Navbar = () => {

return (
    <div className='wrapper'>
    <div className='left'>
       <div className='name'>Michael</div> 
    </div> 
    <div className='right'>
        <div className='list'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Portfolio</li>
                
            </ul>
            <button className='contact'>
                Contact Us
            </button>
        </div>
        </div>
        </div>
    
)
}

export default Navbar;