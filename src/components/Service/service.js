import React from 'react';
import './service.css';
import Resume from '../download/resume1.pdf';

const Service = () => {

return(
    <div className='service' id='service'>
        <h1 className='header'>Professional Services</h1>
        <div className='development'>
            <h1 className='fullstack'>Fullstack Development</h1>
           <div className='frontback'> <h1 className='frontend'>Front-End Development</h1>
         
            <h1 className='backend'>Back-End Development</h1></div>
             </div>
             <button  className='contact' id='download' href={Resume}><a  href={Resume} download >Download CV</a></button>
        
    </div>    
)
}
export default Service;