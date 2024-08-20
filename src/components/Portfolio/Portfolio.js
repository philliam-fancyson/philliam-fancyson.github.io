import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <>
            <div id="portfolio">
                <div id="portfolio-showcase">
                    <div className="portfolio-box">
                        <div class="portfolio-image">
                            <img src="https://pinpix-bucket.s3.us-west-1.amazonaws.com/PinPix-snapshot1.png" />
                        </div>
                    </div>
                    <div className="portfolio-box-reverse">
                        <p>Picture Here</p>
                    </div>
                </div>
            </div>
        </>
    )
}
