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
                <form
                action="https://formspree.io/f/xdkndnvv"
                method="POST"
                // onSubmit={handleSubmit}
                >
                    <label>
                        Name:
                        <input type="name" name="name" />
                    </label>
                    <label>
                        Your email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Your message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}
