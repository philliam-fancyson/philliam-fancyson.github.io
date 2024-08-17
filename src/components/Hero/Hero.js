import React from "react";
import "./Hero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroCanvas } from "../Canvas/Canvas";

export default function Hero() {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
        heroCanvas();
	});

	const scrollToAbout = () => {
		const element = document.getElementById("about");
		element?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<>
			<div id="hero">
				<canvas id="hero-canvas"></canvas>
				<div id="hero-header">
					<h2>
						Hello, <span>Phillip</span> here.
					</h2>
                    <div id="hero-titles">
					    <p>
					    	Software Engineer
					    </p>
                        <p>
					    	Full-Stack Developer
                        </p>
                        <p>
					    	Hadoken Enjoyer
                        </p>
                    </div>
					<span id="hero-about" onClick={scrollToAbout}>
						Learn about me
					</span>
				</div>
			</div>
		</>
	);
}
