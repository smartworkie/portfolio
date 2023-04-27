import React from 'react';
import './mobile.css';
import Faq from '../../img/faq.png';
import { HashLink as Link } from 'react-router-hash-link';



import logo from '../../img/logo.jpg'
import Whatsapp from '../../img/whatsapp.png';
import Mail from '../../img/email.png';
import Phone from '../../img/phone.jpeg';

const Mobile = () => {

return (
    <div className ='mobile-wrapper'>
  <div className='logomob-wrapper' >  <img src = {logo} id='logomob' alt='logomob'/> 
  <p>Casuist Errand Services</p> 
  </div>
   <div className='mobile-image'> <a href='https://wa.me/23409028085676'
    target='_blank' rel="noopener noreferrer"><img src ={Whatsapp} className='whatsappmob' alt='whatsappmob'/></a>
   <Link to='#contact'smooth> <img src = {Mail} className='mailmob' alt='mailmob' id='#contact'/></Link>
    <a href ='tel:09028085676'><img src = {Phone} className='phonemob' alt='phonemob'/></a>
    <Link to='#faq' smooth ><img src={Faq} className='faq'/></Link></div>
    </div>
)
}
export default Mobile;