import gsap from "gsap";

export function heroCanvas() {
    let width,
    height,
    hero,
    canvas,
    ctx,
    points,
    target,
    animateHeader = true;

// Main
initHeader();
initAnimation();
addListeners();

function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    hero = document.getElementById("hero");
    hero.style.height = height + "px";

    canvas = document.getElementById("hero-canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    // create points
    points = [];
    createPoints();
}

function createPoints() {
    for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
            let px = x + (Math.random() * width) / 20;
            let py = y + (Math.random() * height) / 20;
            let p = { x: px, originX: px, y: py, originY: py };
            points.push(p);
        }
    }

    // for each point find the 5 closest points
    for (let i = 0; i < points.length; i++) {
        let closest = [];
        let p1 = points[i];
        for (let j = 0; j < points.length; j++) {
            let p2 = points[j];
            if (!(p1 == p2)) {
                let placed = false;
                for (let k = 0; k < 5; k++) {
                    if (!placed) {
                        if (closest[k] == undefined) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }

                for (let k = 0; k < 5; k++) {
                    if (!placed) {
                        if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
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
    for (let i in points) {
        let c = new Circle(
            points[i],
            2 + Math.random() * 2,
            "rgba(255,255,255,0.3)"
        );
        points[i].circle = c;
    }
}

// Event handling
function addListeners() {
    if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("resize", resize);
    // window.addEventListener('scroll', scrollCheck);
}

function mouseMove(e) {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx =
            e.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft;
        posy =
            e.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    hero.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;

    // Reinitialize points to adapt to new dimensions
    points = [];
    createPoints();

    for (let i in points) {
        shiftPoint(points[i]);
    }

    // Redraw after resizing
    animate();
}

// animation
function initAnimation() {
    animate();
    for (let i in points) {
        shiftPoint(points[i]);
    }
}

function animate() {
    if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
            // detect points in range
            if (Math.abs(getDistance(target, points[i])) < 7000) {
                points[i].active = 0.2;
                points[i].circle.active = 0.4;
            } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                points[i].active = 0.1;
                points[i].circle.active = 0.3;
            } else if (Math.abs(getDistance(target, points[i])) < 80000) {
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
    gsap.to(p, {
        duration: 1 + 2 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        onComplete: function () {
            shiftPoint(p);
        },
    });
}

// Canvas manipulation
function drawLines(p) {
    if (!p.active) return;
    for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
        ctx.stroke();
    }
}

function Circle(pos, rad, color) {
    let _this = this;

    // constructor
    (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
    })();

    this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(61, 207, 243," + _this.active + ")";
        ctx.fill();
    };
}

// Util
function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}
}

export function homeCanvas() {
    const STAR_COLOR = '#9cd9f9d9';
    const STAR_SIZE = 1;
    const STAR_MIN_SCALE = 0.5;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 20;

    const canvas = document.getElementById( 'home-canvas' ),
          context = canvas.getContext( '2d' );

    let scale = 1, // device pixel ratio
        width,
        height;

    let stars = [];

    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };


    generate();
    resize();
    step();

    window.onresize = resize;

    function generate() {

       for( let i = 0; i < STAR_COUNT; i++ ) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
        });
       }

    }

    function placeStar( star ) {

      star.x = Math.random() * width;
      star.y = Math.random() * height;

    }

    function recycleStar( star ) {

      let direction = 'z';

      let vx = Math.abs( velocity.x ),
            vy = Math.abs( velocity.y );

      if( vx > 1 || vy > 1 ) {
        let axis;

        if( vx > vy ) {
          axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
        }
        else {
          axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
        }

        if( axis === 'h' ) {
          direction = velocity.x > 0 ? 'l' : 'r';
        }
        else {
          direction = velocity.y > 0 ? 't' : 'b';
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );

      if( direction === 'z' ) {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      }
      else if( direction === 'l' ) {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      }
      else if( direction === 'r' ) {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      }
      else if( direction === 't' ) {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      }
      else if( direction === 'b' ) {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }

    }

    function resize() {

      scale = window.devicePixelRatio || 1;

      width = window.innerWidth * scale;
      height = window.innerHeight * scale;

      canvas.width = width;
      canvas.height = height;

      stars.forEach( placeStar );
    }

    function step() {

      context.clearRect( 0, 0, width, height );

      update();
      render();

      requestAnimationFrame( step );

    }

    function update() {

      velocity.tx *= 0.96;
      velocity.ty *= 0.96;

      velocity.x += ( velocity.tx - velocity.x ) * 0.8;
      velocity.y += ( velocity.ty - velocity.y ) * 0.8;

      stars.forEach( ( star ) => {

        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += ( star.x - width/2 ) * velocity.z * star.z;
        star.y += ( star.y - height/2 ) * velocity.z * star.z;
        star.z += velocity.z;

        // recycle when out of bounds
        if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
          recycleStar( star );
        }

      } );

    }

    function render() {

      stars.forEach( ( star ) => {

        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5*Math.random();
        context.strokeStyle = STAR_COLOR;

        context.beginPath();
        context.moveTo( star.x, star.y );

        var tailX = velocity.x * 2,
            tailY = velocity.y * 2;

        // stroke() wont work on an invisible line
        if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
        if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;

        context.lineTo( star.x + tailX, star.y + tailY );

        context.stroke();

      } );

    }
}
