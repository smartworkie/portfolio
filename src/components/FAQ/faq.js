import React, {useState} from 'react';
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import './faq.css';

const Faq =()=> {
        const [close, setClose] =useState(false);
        const [close1,setClose1] = useState(false);
        const [close2, setClose2] = useState(false);
        const handleClick = () => {
            setClose(!close);
        }
        const handleClick1=() => {
            setClose1(!close1)
        }
        const handleClick2=() => {
            setClose2(!close2);
        }
    return (
        <div className ='faq-wrapper' id ='faq' >
        <h1>Facts You Should Know</h1>
       <div className = 'faq-div' onClick ={handleClick}> <h2 className='faq-headline'>Why Choose a bicycle courier?</h2> 
     {close?  <FaAngleUp id ='angle'/> :<FaAngleDown id='angle'/>}
       </div>
       {close && <div>
        <p>They are fast with an ability to move through heavy traffic</p>
        <p>They are maneuverable, using them for courier services is quite excellent</p>
        <p>Bicycles are faster bettr for the environment than fuel-guzzling delivery trucks</p>
        </div>}
           <div className='faq-div' onClick={handleClick1}> 
            <h2 className='faq-headline'>Which locations do you cover?</h2>
      {close1?  <FaAngleUp id='angle'/> :  <FaAngleDown id='angle'/>}
       </div>
       {close1 && <div >
            <p>Our startup locations is Ota, Ogun state. But, we also cover some regions in the neigbouring state, Lagos state.
            We cover part of Ifako Ijaiye all through Abule Egba.
            </p>
        </div>}
        <div className='faq-div' onClick={handleClick2}><h2 className='faq-headline'>When do we make deliveries?</h2>
           {close2? <FaAngleUp id='angle'/>: <FaAngleDown id='angle'/>}
                    </div>
       {close2 && <div>
            <p>We are available from Monday to Friday between 8am and 6pm. Saturday between 
                10am and 6pm.
            </p>
        </div>}
       
        </div>
        
    )
}
export default Faq;