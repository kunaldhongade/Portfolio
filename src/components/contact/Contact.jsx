import React from 'react'
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { SiMicrosoftteams } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_btpc6fn', 'template_7s82bwm', form.current, 'hvLTrV_Nla3wOOrm7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>thekunaldhongade@gmail.com</h5>
                        <a href="mailto:thekunaldhongade@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <SiMicrosoftteams className="contact__option-icon" />
                        <h4>Teams</h4>
                        <h5>kunaldhongade@outlook.com</h5>
                        <a href="https://teams.live.com/l/invite/FEANznoWS5wI8HnzwE" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>Get a call</h5>
                        <a href=" https://wa.me/919529599459" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Name" required />
                    <input type="email" name='email' placeholder='email@email.com' required />
                    <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
