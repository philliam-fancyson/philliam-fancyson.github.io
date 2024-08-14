import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './About.css'

export default function About() {
    return (
        <>
            <div id="about">
                <p>
                I’m passionate about creating sophisticated, elegant, and user-friendly solutions. To me, programming is the perfect blend of creativity , and structure. The front end is my canvas, where I unleash my imagination. The backend grounds me, providing the logic and structure to bring my ideas to life. Full-stack development allows me to express creativity both logically and visually, making it the perfect outlet for my skills.
                </p>
            </div>
            <div className="tech-container">
                <h2>
                    Technologies
                </h2>
                <div className="tech">
                    <i className="tech-icon devicon-javascript-plain colored"></i>
                    <i className="tech-icon devicon-python-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-react-original colored"></i>
                    <i className="tech-icon devicon-redux-original colored"></i>
                    <i className="tech-icon devicon-postgresql-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-sequelize-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-sqlalchemy-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-express-original-wordmark colored"></i>
                    <i className="tech-icon devicon-flask-original-wordmark colored"></i>
                    <i className="tech-icon devicon-amazonwebservices-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-nodejs-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-git-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-docker-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-html5-plain-wordmark colored"></i>
                    <i className="tech-icon devicon-css3-plain-wordmark colored"></i>
                </div>
            </div>
        </>
    )
}
