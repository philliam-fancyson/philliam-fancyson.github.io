import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import About from '../About';
import Portfolio from '../Portfolio';
import Hero from '../Hero';
import Contact from '../Contact';
import './Home.css'

export default function Home() {
    return (
        <>
            <Hero />

            <nav id="header-container-sticky">
                <div id="link-container">
                    <span className="link-category">
                        <span className="name-tag"> &lt;</span>
                        <NavHashLink className="name-header" to="#hero">PHILLIP</NavHashLink>
                        <span className="name-tag">&gt;</span>
                    </span>
                    <NavHashLink className="link-category" to="#about">About</NavHashLink>
                    <NavHashLink className="link-category" to="#portfolio">Projects</NavHashLink>
                    <NavHashLink className="link-category"  to="#contact">Contact</NavHashLink>
                </div>
            </nav>

            <div className="home-wrapper">
                <About />
                <Portfolio />
                <Contact />
            </div>


            <div id="footer-container-sticky">
                <div id="footer-closing-tag">
                    <span className="name-tag"> &lt;</span>
                    <NavLink className="name-header" to="/">/ NGUYEN</NavLink>
                    <span className="name-tag">&gt;</span>
                </div>
            </div>
            <footer>
                Phillip Nguyen @2024
            </footer>

        </>
    )
}
