import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ContactUsConstants } from '../constant';
import './css/ContactUs.style.css';

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmil] = useState('');
    const [feedback, setFeedback] = useState('');
    const [contact, setContact] = useState('');
    const form = useRef();

    const handlerForSend = (e) => {
        e.preventDefault();
        
        const serviceId = "service_ca85t6h";
        const templateId = "template_uwows88";
        const publicKey = "fvEz7P1aQydxXV-YB";

        const templateParams = {
            to_name: "PrinTek",
            from_name: name,
            message: feedback,
            from_contact: contact,
            from_email: email
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response);
            setName('');
            setContact('');
            setEmil('');
            setFeedback('');
        })
        .catch((error) => {
          console.log('Failed in sending Email...', error);
        });
    }
    
  return (
    <form onSubmit={handlerForSend} className='contactUs' ref={form}>

        <div className='contactUs-heading'> 
            <span className='contactUs-MainHeading'>{ContactUsConstants.contactUs}</span>
            <span className='contactUs-subHeading'>{ContactUsConstants.contactUsMessage}</span>
        </div>

        <div className='contactUs-inputFields'>
            <div className='contactUs-input-name-contact'>
                <input 
                    type='text'
                    placeholder='Your Full Name'
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)} />

                {/* <label>Your Contact</label> */}
                <input 
                    type='text'
                    placeholder='Your Contact'
                    required
                    value={contact}
                    onChange={(event) => setContact(event.target.value)} />
            </div>

            <div className='contactUs-email'>
                <input 
                    className='contactUs-input-email'
                    type='text'
                    placeholder='Your email'
                    required
                    value={email}
                    onChange={(event) => setEmil(event.target.value)} />
            </div>
            

            {/* <label>Your Feedback or Requirment</label> */}
            <div className='contactUs-feedback'>
                <textarea 
                    type='text'
                    placeholder='Enter Your feedback or requirment'
                    required
                    value={feedback}
                    onChange={(event) => setFeedback(event.target.value)} />
            </div>

        </div>

        <div className='contactUs-button'>
            <button>Cancel</button>
            <button type='submit'>Send</button>
        </div>
  
    </form>
  )
}

export default ContactUs;
