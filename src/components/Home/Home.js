import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import About from '../About/About';
import Portfolio from '../Portfolio';

export default function Home() {
    return (
        <>
            <nav className="nav-container">
                <div className="link-container">
                    <Link className="link-category" to="/">About</Link>
                    <NavHashLink className="link-category" to="#portfolio">Portfolio</NavHashLink>
                    <NavHashLink className="link-category"  to="#contact">Contact</NavHashLink>
                </div>
            </nav>
            <div className="name-container sticky-header">
                <span className="name-tag"> &lt;</span>
                <NavLink className="name-header" to="/">PHILLIP</NavLink>
                <span className="name-tag">&gt;</span>
            </div>

            <div className="home-wrapper">
                <About />
                <Portfolio />
            </div>

        </>
    )
}
