import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Contact.css'

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div id="contact">
                <h2>Get in touch!</h2>
                <form
                action="https://formspree.io/f/xdkndnvv"
                method="POST"
                id="contact-form"
                // onSubmit={handleSubmit}
                >
                    <div id="contact-id">
                        <input type="email" name="email" placeholder='Email'/>
                        <input type="name" name="name" placeholder='Name'/>
                    </div>
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}
