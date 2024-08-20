import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './About.css'

export default function About() {
    return (
        <>
            <div id="about">
                    <h2>ABOUT ME: </h2>
                <div id="about-wrapper">
                    <div id="about-container">
                        <p>
                            Always thinking about how to make life exciting, I'm a full-stack developer who's passionate about crafting sophisticated, elegant, and creative solutions. I love exploring ways to innovate on things I deeply care about. To me, programming is the perfect blend of creativity , and structure. The front end is my canvas, where I unleash my imagination and the backend grounds me, providing the logic and structure to bring my ideas to life. Web development allows me to express creativity both logically and visually, making it the perfect outlet for my skills.
                            <br />
                            <br />
                            In my free time, you can find me sending bouldering problems, testing my reactions in fighting games, or immersing myself in live music.
                        </p>
                        <div className="professional-links">
                                <NavLink to="https://github.com/philliam-fancyson" target="_blank"><i className="devicon-github-original"></i></NavLink>
                                <NavLink to="https://www.linkedin.com/in/phillnguyen/" target="_blank"><i className="devicon-linkedin-plain"></i></NavLink>
                        </div>
                    </div>
                    <div id="tech-container">
                        <div className="tech-column">
                            <i className="tech-icon devicon-javascript-plain colored"></i>
                            <i className="tech-icon devicon-python-plain-wordmark colored"></i>
                        </div>
                        <div className="tech-column">
                            <i className="tech-icon devicon-react-original colored"></i>
                            <i className="tech-icon devicon-redux-original colored"></i>
                            <i className="tech-icon devicon-express-original-wordmark"></i>
                            <i className="tech-icon devicon-nodejs-plain-wordmark colored"></i>
                        </div>
                        <div className="tech-column">
                            <i className="tech-icon devicon-sequelize-plain-wordmark colored"></i>
                            <i className="tech-icon devicon-sqlalchemy-plain-wordmark"></i>
                            <i className="tech-icon devicon-postgresql-plain-wordmark colored"></i>
                            <i className="tech-icon devicon-flask-original-wordmark"></i>
                        </div>
                        <div className="tech-column">
                            <i className="tech-icon devicon-docker-plain-wordmark colored"></i>
                            <i className="tech-icon devicon-amazonwebservices-plain-wordmark colored"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
