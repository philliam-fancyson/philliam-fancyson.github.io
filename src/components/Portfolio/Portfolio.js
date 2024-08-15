import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <>
            <div id="portfolio">
                <h2>Projects</h2>
                <div id="portfolio-showcase">
                    <div className="portfolio-box">
                        <p>Picture Here</p>
                    </div>
                    <div className="portfolio-box">
                        <p>Picture Here</p>
                    </div>
                    <div className="portfolio-box">
                        <p>Picture Here</p>
                    </div>

                </div>
            </div>
        </>
    )
}
