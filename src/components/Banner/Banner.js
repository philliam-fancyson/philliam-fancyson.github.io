import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TweenLite } from 'gsap/gsap-core';
import { Tween } from 'gsap/gsap-core';
import { EasePack } from 'gsap/all';
import './Banner.css'


export default function Banner() {
    gsap.registerPlugin(useGSAP);
    const container = useRef();

    // !


    //!
    useGSAP(
        () => {
            // gsap code here...
                let width, height, banner, canvas, ctx, points, target, animateHeader = true;

                // Main
                initHeader();
                initAnimation();
                addListeners();

                function initHeader() {
                    width = window.innerWidth;
                    height = window.innerHeight;
                    target = {x: width/2, y: height/2};

                    banner = document.getElementById('banner');
                    banner.style.height = height+'px';

                    canvas = document.getElementById('banner-canvas');
                    canvas.width = width;
                    canvas.height = height;
                    ctx = canvas.getContext('2d');

                    // create points
                    points = [];
                    for(let x = 0; x < width; x = x + width/20) {
                        for(let y = 0; y < height; y = y + height/20) {
                            let px = x + Math.random()*width/20;
                            let py = y + Math.random()*height/20;
                            let p = {x: px, originX: px, y: py, originY: py };
                            points.push(p);
                        }
                    }

                    // for each point find the 5 closest points
                    for(let i = 0; i < points.length; i++) {
                        let closest = [];
                        let p1 = points[i];
                        for(let j = 0; j < points.length; j++) {
                            let p2 = points[j]
                            if(!(p1 == p2)) {
                                let placed = false;
                                for(let k = 0; k < 5; k++) {
                                    if(!placed) {
                                        if(closest[k] == undefined) {
                                            closest[k] = p2;
                                            placed = true;
                                        }
                                    }
                                }

                                for(let k = 0; k < 5; k++) {
                                    if(!placed) {
                                        if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                            closest[k] = p2;
                                            placed = true;
                                        }
                                    }
                                }
                            }
                        }
                        p1.closest = closest;
                    }

                    // assign a circle to each point
                    for(let i in points) {
                        let c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
                        points[i].circle = c;
                    }
                }

                // Event handling
                function addListeners() {
                    if(!('ontouchstart' in window)) {
                        window.addEventListener('mousemove', mouseMove);
                    }
                    window.addEventListener('resize', resize);
                    // window.addEventListener('scroll', scrollCheck);
                }

                function mouseMove(e) {
                    let posx = 0;
                    let posy = 0;
                    if (e.pageX || e.pageY) {
                        posx = e.pageX;
                        posy = e.pageY;
                    }
                    else if (e.clientX || e.clientY)    {
                        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                    }
                    target.x = posx;
                    target.y = posy;
                }

                // function scrollCheck() {
                //     if(document.body.scrollTop > height) animateHeader = false;
                //     else animateHeader = true;
                // }

                function resize() {
                    width = window.innerWidth;
                    height = window.innerHeight;
                    banner.style.height = height+'px';
                    canvas.width = width;
                    canvas.height = height;
                }

                // animation
                function initAnimation() {
                    animate();
                    for(let i in points) {
                        shiftPoint(points[i]);
                    }
                }

                function animate() {
                    if(animateHeader) {
                        ctx.clearRect(0,0,width,height);
                        for(let i in points) {
                            // detect points in range
                            if(Math.abs(getDistance(target, points[i])) < 4000) {
                                points[i].active = 0.3;
                                points[i].circle.active = 0.6;
                            } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                                points[i].active = 0.1;
                                points[i].circle.active = 0.3;
                            } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                                points[i].active = 0.02;
                                points[i].circle.active = 0.1;
                            } else {
                                points[i].active = 0;
                                points[i].circle.active = 0;
                            }

                            drawLines(points[i]);
                            points[i].circle.draw();
                        }
                    }
                    requestAnimationFrame(animate);
                }

                function shiftPoint(p) {
                    Tween.to(p, 1+2*Math.random(), {x:p.originX-50+Math.random()*100,
                        y: p.originY-50+Math.random()*100, ease:"circ.inOut",
                        onComplete: function() {
                            shiftPoint(p);
                        }});
                }

                // Canvas manipulation
                function drawLines(p) {
                    if(!p.active) return;
                    for(let i in p.closest) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p.closest[i].x, p.closest[i].y);
                        ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
                        ctx.stroke();
                    }
                }

                function Circle(pos,rad,color) {
                    let _this = this;

                    // constructor
                    (function() {
                        _this.pos = pos || null;
                        _this.radius = rad || null;
                        _this.color = color || null;
                    })();

                    this.draw = function() {
                        if(!_this.active) return;
                        ctx.beginPath();
                        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                        ctx.fillStyle = 'rgba(61, 207, 243,'+ _this.active+')';
                        ctx.fill();
                    };
                }

                // Util
                function getDistance(p1, p2) {
                    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
                }
        },
    ); // <-- scope is for selector text (optional)

    return (
        <>
            <div id="banner">
                <canvas id="banner-canvas"></canvas>
                <div id="banner-header">
					<h2>Hello, Phillip here.</h2>
                    <p>
                        Software Engineer
                        <br />
                        Full-Stack Developer
                        <br />
                        Hadoken Enjoyer
                    </p>
				</div>
            </div>
        </>
    )
}
