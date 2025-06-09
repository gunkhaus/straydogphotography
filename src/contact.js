
import "./Home.css";
import Navbar from "./navbar";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_b05pu4i', 'template_1grzv0i', form.current, {
            publicKey: '3iBFqULPvRYIUQnjT',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    
     
    return(
        <div className="entireContactPageContainer">
        <Navbar />
       
       <div className="contactContent">
            
                <div className="formBox">

                    
                    <form className="emailForm" ref={form} onSubmit={sendEmail}>
                     
                        <div id="contactTitle">contact</div>
                       
                        <input type="text" name="user_name" placeholder="name" />
                        
                        <input type="email" name="user_email" placeholder="email" />
                        
                        <textarea name="message" placeholder="message" />
                        <input className="submitButton" type="submit" value="Send" />
                    </form>
                </div>
            </div>
            </div>
    );
}

export default Contact;