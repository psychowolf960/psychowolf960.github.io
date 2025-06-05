const words = [
            "Alexis Jules", "6,310 Jours",
            "Dessin", "Echecs", "Développement web",
            "Théâtre", "Gamedev", "Gamedesign",
            "Animation", "Motivation", "Poker", "User Experience"
        ];
        
        const floatingContainer = document.getElementById('floating-layer');
        const wordObjects = [];
        const minSpeed = 0.2; // Vitesse minimale pour éviter l'arrêt complet
        
        words.forEach(text => {
            const el = document.createElement("div");
            el.className = "word";
            el.textContent = text;
            floatingContainer.appendChild(el);
            
            const obj = {
                el,
                x: Math.random() * (window.innerWidth - 200),
                y: Math.random() * (window.innerHeight - 100),
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2,
                dragging: false
            };
            
            // Assurer une vitesse minimale initiale
            if (Math.abs(obj.vx) < minSpeed) {
                obj.vx = obj.vx >= 0 ? minSpeed : -minSpeed;
            }
            if (Math.abs(obj.vy) < minSpeed) {
                obj.vy = obj.vy >= 0 ? minSpeed : -minSpeed;
            }
            
            el.style.left = obj.x + "px";
            el.style.top = obj.y + "px";
            el.style.transform = `rotate(${obj.rotation}deg)`;
            
            makeDraggable(obj);
            wordObjects.push(obj);
        });
        
        function makeDraggable(obj) {
            let offsetX, offsetY, lastX, lastY;
            
            obj.el.addEventListener("mousedown", e => {
                obj.dragging = true;
                offsetX = e.clientX - obj.x;
                offsetY = e.clientY - obj.y;
                lastX = obj.x;
                lastY = obj.y;
                obj.el.classList.add("dragging");
                e.preventDefault();
            });
            
            window.addEventListener("mousemove", e => {
                if (obj.dragging) {
                    obj.x = e.clientX - offsetX;
                    obj.y = e.clientY - offsetY;
                    
                    const newVx = (obj.x - lastX) * 0.3;
                    const newVy = (obj.y - lastY) * 0.3;
                    obj.vx = newVx;
                    obj.vy = newVy;
                    
                    obj.rotationSpeed += (Math.abs(newVx) + Math.abs(newVy)) * 0.4;
                    
                    lastX = obj.x;
                    lastY = obj.y;
                }
            });
            
            window.addEventListener("mouseup", () => {
                if (obj.dragging) {
                    obj.dragging = false;
                    obj.el.classList.remove("dragging");
                    
                    // Assurer une vitesse minimale après le lâcher
                    if (Math.abs(obj.vx) < minSpeed && Math.abs(obj.vy) < minSpeed) {
                        obj.vx = (Math.random() - 0.5) * minSpeed * 4;
                        obj.vy = (Math.random() - 0.5) * minSpeed * 4;
                    }
                }
            });
        }
        
        function animate() {
            for (const obj of wordObjects) {
                if (!obj.dragging) {
                    // Mouvement
                    obj.x += obj.vx;
                    obj.y += obj.vy;
                    
                    // Collision avec les bords
                    const maxX = window.innerWidth - obj.el.offsetWidth;
                    const maxY = window.innerHeight - obj.el.offsetHeight;
                    
                    if (obj.x <= 0) {
                        obj.x = 0;
                        obj.vx = Math.abs(obj.vx);
                        obj.rotationSpeed += 2;
                    }
                    if (obj.x >= maxX) {
                        obj.x = maxX;
                        obj.vx = -Math.abs(obj.vx);
                        obj.rotationSpeed -= 2;
                    }
                    if (obj.y <= 0) {
                        obj.y = 0;
                        obj.vy = Math.abs(obj.vy);
                        obj.rotationSpeed += 2;
                    }
                    if (obj.y >= maxY) {
                        obj.y = maxY;
                        obj.vy = -Math.abs(obj.vy);
                        obj.rotationSpeed -= 2;
                    }
                    
                    obj.vx *= 0.998;
                    obj.vy *= 0.998;
                    
                    if (Math.abs(obj.vx) < minSpeed) {
                        obj.vx = obj.vx >= 0 ? minSpeed : -minSpeed;
                    }
                    if (Math.abs(obj.vy) < minSpeed) {
                        obj.vy = obj.vy >= 0 ? minSpeed : -minSpeed;
                    }
                }
                
                obj.rotation += obj.rotationSpeed;
                obj.rotationSpeed *= 0.9;
                
                if (Math.abs(obj.rotationSpeed) < 0.1) {
                    obj.rotationSpeed = obj.rotationSpeed >= 0 ? 0.1 : -0.1;
                }
                
                obj.el.style.left = obj.x + "px";
                obj.el.style.top = obj.y + "px";
                obj.el.style.transform = `rotate(${obj.rotation}deg)`;
            }
            
            requestAnimationFrame(animate);
        }
        
        // Gérer le redimensionnement de la fenêtre
        window.addEventListener('resize', () => {
            for (const obj of wordObjects) {
                const maxX = window.innerWidth - obj.el.offsetWidth;
                const maxY = window.innerHeight - obj.el.offsetHeight;
                
                if (obj.x > maxX) obj.x = maxX;
                if (obj.y > maxY) obj.y = maxY;
            }
        });
        
        animate();

const landingVideo = document.getElementById("main-video");
const stickyNav = document.getElementById("sticky-nav");
const landingNavButtons = document.querySelector("#landing .nav-buttons");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        landingVideo.style.transform = "scale(0.5) translateY(-100px)";
        landingVideo.style.opacity = "0";
        stickyNav.classList.add("show");
        landingNavButtons.classList.add("fade-out");
    } else {
        landingVideo.style.transform = "scale(1) translateY(0)";
        landingVideo.style.opacity = "1";
        stickyNav.classList.remove("show");
        landingNavButtons.classList.remove("fade-out");
    }
});



// CAROUSEL FUNCTIONALITY
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const container = document.getElementById('carousel-container');
const dotsContainer = document.getElementById('carousel-dots');

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

function updateCarousel() {
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-play carousel
setInterval(() => {
    changeSlide(1);
}, 4000);

// SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe timeline items
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});


//Implémenté de: https://codepen.io/hakimel/pen/bzrZGo

/*          *     .        *  .    *    *   . 
 .  *  move your mouse to over the stars   .
 *  .  .   change these values:   .  *
   .      * .        .          * .       */
const STAR_COLOR = '#fff';
const STAR_SIZE = 1;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 25;
const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 16;

const canvas = document.querySelector( 'canvas' ),
      context = canvas.getContext( '2d' );

let scale = 1, // device pixel ratio
    width,
    height;

let stars = [];

let pointerX,
    pointerY;

let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

let touchInput = false;

generate();
resize();
step();

window.onresize = resize;
document.onmousemove = onMouseMove;
document.ontouchmove = onTouchMove;
document.ontouchend = onMouseLeave;
document.onmouseleave = onMouseLeave

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

  velocity.tx *= 0.6;
  velocity.ty *= 0.6;

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

function movePointer( x, y ) {

  if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {

    let ox = x - pointerX,
        oy = y - pointerY;

    velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
    velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );

  }

  pointerX = x;
  pointerY = y;

}

function onMouseMove( event ) {

  touchInput = false;

  movePointer( event.clientX, event.clientY );

}

function onTouchMove( event ) {

  touchInput = true;

  movePointer( event.touches[0].clientX, event.touches[0].clientY, true );

  event.preventDefault();

}

function onMouseLeave() {

  pointerX = null;
  pointerY = null;

}
