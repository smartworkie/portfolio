import React, {useRef, useState} from 'react';

import emailjs from '@emailjs/browser';
import Spinner from '../Spinner/spinner.js';

import './contact.css'

const Contact = () => {

    const [contact, setContact] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
        setLoading(true);
      emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setTimeout(()=>{setContact(true)},2000);
            setLoading(false);
        }, (error) => {
            console.log(error.text);
           setTimeout(()=> {setError(true)},2000);
           setLoading(false);
        });
    };
    return (
    <form ref={form} onSubmit={sendEmail}>

        <div className='wrapper-contact' id='contact'>
            <h1> Leave A Message</h1>
           {loading &&  <Spinner />}
            {contact && 
                <p id='message1'>Message Received!</p>
            }
            {error && <p id='message1'>Error! Try Again or Check Your Connection</p>}
            <div className='boxes'>
                <input type='text' name='user_name' id = 'name' placeholder='Name' required/>
                <input type='email' name='user_email' id = 'email' placeholder='Email' required/>
                <input type='textarea' name='message' id='message' placeholder='Message' required/>
                <input type="submit" value="Send" className='submit'/>
            </div>
        </div>
        </form>
    )
}
export default Contact;