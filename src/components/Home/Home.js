import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import About from '../About';
import Portfolio from '../Portfolio';
import Banner from '../Banner';
import Contact from '../Contact';

export default function Home() {
    return (
        <>
            <nav className="header-nav-container-sticky">
                <span className="name-tag"> &lt;</span>
                <NavLink className="name-header" to="/">PHILLIP</NavLink>
                <span className="name-tag">&gt;</span>
                <div className="link-container">
                    <NavHashLink className="link-category" to="#portfolio">Portfolio</NavHashLink>
                    <NavHashLink className="link-category"  to="#contact">Contact</NavHashLink>
                </div>
            </nav>

            <div className="home-wrapper">
                <Banner />
                <About />
                <Portfolio />
                <Contact />
            </div>
            <footer id="footer-container">
                <div id="footer-container-sticky">
                    <span className="name-tag"> &lt;</span>
                    <NavLink className="name-header" to="/">/ Nguyen</NavLink>
                    <span className="name-tag">&gt;</span>
                </div>
                Phillip Nguyen @2024
            </footer>
        </>
    )
}
