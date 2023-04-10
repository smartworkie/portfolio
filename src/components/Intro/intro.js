import React from 'react';
import './intro.css';
import Laptop from '../../img/laptop.png';
import Github from '../../img/github.png'
import React1 from '../../img/react.png';
import Node from '../../img/node.png';
import MongoDB from '../../img/mongodb.png';
import CSS from '../../img/css.png';
import JavaScript from '../../img/javascript.png';
import LinkedIn from '../../img/linkedin.png';
import {HashLink as Link} from 'react-router-hash-link'


const Intro = () => {

return(
 <div className='intro' id='skill'>
    <div className='left-intro'>
        <div className='name2'>
            <span>Hi, I Am </span>
            <span>Michael</span>
            <span>Builds Responsive Websites with Easy-to-Use User Interface </span>
        </div>
        <Link to ='#contact' smooth><button className='contact hire'  >Hire Me</button></Link>.
        <div className='icons'>
         
            <a href='https://github.com/smartworkie' target="_blank" rel="noreferrer" className='link'><img src={Github} alt='' className='github'/> 
             </a>  
           <a href='https://www.linkedin.com/in/micheal-soboyejo-a77861263' target="_blank" rel ="noreferrer" className='link'> <img src={LinkedIn} alt='' className='linkedin'/>   </a>
                        </div>
    </div>
    <div className='right-intro'>
        <h1 className='skills' >Expertise</h1>
        <div className='lapima'><img className = 'laptop' src = {Laptop} alt='laptop' />
        <div className='images'>
        <img className='node' alt='node' src={Node}/>
        <img className='react' alt='react' src = {React1}/>
        <img className='css' alt='react' src = {CSS}/>
        <img className='javascript' alt='javascript' src = {JavaScript}/>
        <img className='mongoDB' alt='mongoDB' src={MongoDB}/></div>
        </div>
        </div>
 </div>
)
}
export default Intro;