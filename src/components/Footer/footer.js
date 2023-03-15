import React from 'react';
import './footer.css';
import Fiverr from '../../img/fiverr.png';
const Footer = () => {

return(
<div className='footer-wrapper'>
<img src={Fiverr} alt='' className='fiverr'/>
<h5 className='copy'>Copyright 2023. All Right Reserved.</h5>
</div>
);
}

export default Footer;
