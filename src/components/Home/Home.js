import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Hero from '../Hero';
import Contact from '../Contact';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Home.css'
import { homeCanvas } from '../Canvas/Canvas';

export default function Home() {

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        homeCanvas();
    })

    const scrollToHero = () => {
        const element = document.getElementById('hero');
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    const scrollToPortfolio = () => {
        const element = document.getElementById('portfolio');
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <>
            <Hero />

            <nav id="header-container-sticky">
                <div id="link-container">
                    <span className="link-category">
                        <span className="name-tag"> &lt;</span>
                        <span className="name" onClick={scrollToHero}>PHILLIP</span>
                        <span className="name-tag">&gt;</span>
                    </span>
                    <span className="link-category" onClick={scrollToAbout}>About</span>
                    <span className="link-category" onClick={scrollToPortfolio}>Projects</span>
                    <span className="link-category" onClick={scrollToContact}>Contact</span>
                </div>
            </nav>


            <div id="home-wrapper">
                <canvas id="home-canvas"></canvas>

                <About />
                <Portfolio />
                <Contact />

            </div>


            <div id="footer-container-sticky">
                <div id="footer-closing-tag">
                    <span className="link-category">
                        <span className="name-tag"> &lt;</span>
                        <span className="name-header" onClick={scrollToHero}>/ NGUYEN</span>
                        <span className="name-tag">&gt;</span>
                    </span>
                </div>
            </div>
            <footer>
                Phillip Nguyen @2024
            </footer>

        </>
    )
}
