import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aurq6h8', 'template_yogm3tc', form.current, '1P9HC03FswJyQqGUz')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='article__option'>
            <AiOutlineMail className='contact__icon'/>
            <h4>Email</h4>
            <h5>Ibrahim Nasser</h5>
            <a href="mailto:himanaser86@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='article__option'>
            <BsMessenger className='contact__icon'/>
            <h4>Messenger</h4>
            <h5>himanaser86@gmail.com</h5>
            <a href="https://m.me/100008558927155" target="_blank">Send a message</a>
          </article>
          <article className='article__option'>
            <BsWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <h5>+201068184721</h5>
            <a href="https://api.whatsapp.com/send?phone=01068184721" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Your Full Name' required />
          <input type="email" name="from_name" placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" required placeholder='Your Message'></textarea>
          <button type='submit' value="Send" className='btn btn-primary'>Send A Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
