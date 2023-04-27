import React, {useEffect, useState} from 'react';
import './service.css';
import Image from '../data';
import Whatsapp from '../../img/whatsapp.png';
const Service = () => {
    const [appear, setAppear] = useState(0);
    useEffect(()=> {
        const timer = setTimeout(()=>{
            if(appear===2){
                setAppear(0)
            }
            else{
                setAppear(appear+1)
            }
        }, 3000)
    return ()=> clearTimeout(timer);
    },
[appear])
    
return (
    <div className='wrapper-service' id="service">
         <div className='service'>
         <h1>Our Services</h1>
         <div className ='paragraph'>
            <p>Laundry pick up and drop</p>
            <p>Prescription Picking</p>
            <p>Food Delivery</p>
            <p>Emergency Pick Up and Delivery</p>
            <p>Online Order Pick Up</p>
            <p> Personal Errand</p>
           
            <div/>
           <a href='https://wa.me/23409028085676'
    target='_blank' rel="noopener noreferrer" > <button className='button'><p>  Get in Touch</p>
                <img  alt ='whatsapp1' 
            className='contact-image1' src={Whatsapp} /></button></a>
            <span className ='purple'></span>
       </div>      
    </div>

    <div className='image'>
        <img className='flier1' src = {Image[appear].src} alt='image'/>
        <span className='orange'></span>
    </div>
    </div>

)
}

export default Service;