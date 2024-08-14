import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Banner.css'

export default function Banner() {
    return (
        <>
            <div id="banner">
                <header>
					<h2>Hello, Phillip here.</h2>
				</header>
                    <p>
                        Software Engineer
                        <br />
                        Full-Stack Developer
                        <br />
                        Hadoken Enjoyer
                    </p>
            </div>
        </>
    )
}
