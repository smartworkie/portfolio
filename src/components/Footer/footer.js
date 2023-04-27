import React from 'react';
import './footer.css';
import {HashLink as Link} from 'react-router-hash-link';
const Footer = () => {

return(
<div className='footer-wrapper'>
    <div className='footer'>
<div className='footer1'>
    <p><Link to='#service' smooth>Service</Link></p>  
</div>
<div className='footer2'> 
    <p><Link to='#faq' smooth>FAQ</Link></p>
</div>
    </div>
<h3 className='copy'>Copyright 2023. All Right Reserved.</h3>
</div>
);
}

export default Footer;
