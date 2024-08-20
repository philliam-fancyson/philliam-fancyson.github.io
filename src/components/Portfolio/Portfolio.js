import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgWebsite } from "react-icons/cg";
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <>
            <div id="portfolio">
                <div id="portfolio-showcase">
                    <div className="portfolio-box">
                        <div className="portfolio-image">
                            <img src="https://pinpix-bucket.s3.us-west-1.amazonaws.com/PinPix-snapshot1.png" />
                        </div>
                        <div className="portfolio-info">
                            <h3>PinPix</h3>
                            <p>
                            PinPix is digital platform dedicated to the exploration and sharing of unique aesthetics and visual inspirations, where users can discover, save, and showcase a diverse collection of images and ideas, curating personalized boards that reflect their style and interests.
                            </p>
                            <div className="portfolio-links">
                                <span>
                                <NavLink to=""><i className="devicon-github-original portfolio-icon"></i>Github</NavLink>
                                </span>
                                <span>
                                <NavLink to=""><CgWebsite className="portfolio-icon"/>Live Site</NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-box-reverse">
                    <div className="portfolio-image">
                        <img src="https://pinpix-bucket.s3.us-west-1.amazonaws.com/ShareSage-snapshot1.png" />
                        </div>
                        <div className="portfolio-info">
                            <h3>ShareSage</h3>
                            <p>
                            ShareSage is a full stack web application, influenced by Splitwise, that allows users to easily track, split, and settle bills, making it effortless to balance group spending.
                            </p>
                            <div className="portfolio-links">
                                <span>
                                <NavLink to=""><i className="devicon-github-original portfolio-icon"></i>Github</NavLink>
                                </span>
                                <span>
                                <NavLink to=""><CgWebsite className="portfolio-icon"/>Live Site</NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
