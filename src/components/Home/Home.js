import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Hero from '../Hero';
import Contact from '../Contact';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { homeCanvas } from '../Canvas/Canvas';
import './Home.css'

export default function Home() {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        homeCanvas();
        let about = document.getElementById("home-wrapper")
        let hero = document.getElementById('hero')
        console.log(about);
        let stickyHeader = document.getElementById("header-container-sticky")
        gsap.to(stickyHeader, {
            backgroundColor: "#2f3841",
            scrollTrigger: {
                trigger: hero,
                start: "bottom top+=60px",
                end: "bottom top",
                scrub: true,
                toggleActions: "restart none none reverse"
            }
          });
        gsap.to(".link-category", {
            opacity: 1,
            scrollTrigger: {
                start: "top top+=60px",
                end: "top top-=40px",
                trigger: stickyHeader,
                toggleActions: "restart none none reverse"
            }
          });
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
            behavior: 'smooth',
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
                        <span className="name-tag" onClick={scrollToHero}>PHILLIP</span>
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



            <footer>
                <div id="spacer" />
                <span id = "footer-links">
                    EMAIL: philliam.nguyen@gmail.com
                    <div id="footer-links-icon">
                        <i class="devicon-github-original"></i>
                        <i class="devicon-linkedin-plain"></i>
                    </div>
                </span>
                <div id="footer-closing-tag">
                    <span className="link-category">
                        <span className="name-tag"> &lt;</span>
                        <span className="name-tag" onClick={scrollToHero}>/ NGUYEN</span>
                        <span className="name-tag">&gt;</span>
                    </span>
                </div>

            </footer>

        </>
    )
}
