history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {

	// SCROLLING ANIM
	let options = {
	    threshold: 0
	}
	let callback = function(entries, observer) {
	    entries.forEach(entry => {
	    	if (entry.isIntersecting) entry.target.classList.add('in-view');
      	});
	};
	let observer = new IntersectionObserver(callback, options),
		animated = qsa('.animated');

	animated.forEach(el => {
		if (observer) {
			observer.observe(el)
		} else {
			el.classList.remove('animated');
		}
	});
	// END SCROLLING ANIM


	
	// FAQ
	let questions = qsa('.question');

	questions.forEach(el => {
		el.onclick = (e) => {
			let answer = el.nextElementSibling;
			if(el.classList.contains('active')) {
				el.classList.remove('active');
				answer.style.height = '0px';
			} else {
				el.classList.add('active');
				if(window.innerWidth > 767) {
					answer.style.height = answer.scrollHeight + 60 + 'px';
				} else {
					answer.style.height = answer.scrollHeight + 30 + 'px';
				}
				
			}
		};
	})
	// END FAQ


	// ANCHORS HEADER
	qsa('a[data-scroll]').forEach(el => {
		el.onclick = (e) => {
			e.preventDefault();
			if(window.innerWidth < 768) {
				qs('.header__nav').classList.remove('active');
			}
			let scrollToY = offsetTop(qs(el.dataset.scroll));
			scrollTo(scrollToY);
		}
	})
	const requestAnimationFrame = window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.oRequestAnimationFrame ||
	    window.msRequestAnimationFrame;

	function scrollTo(to) {
	    const start = window.scrollY || window.pageYOffset;
	    const time = Date.now();
	    const duration = Math.abs(start - to) / 2;

	    (function step() {
	        var dx = Math.min(1, (Date.now() - time) / duration)
	        var pos = start + (to - start) * easeInOutCubic(dx)

	        window.scrollTo(0, pos)

	        if (dx < 1) {
	            requestAnimationFrame(step)
	        }
	    })()
	}
	function easeInOutCubic(x) {
		return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
	}
	function offsetTop(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return rect.top + scrollTop;
	}
	// ANCHORS HEADER

	var container = qs('.minter-page');
	if(container) {
		container.style.minHeight = window.innerHeight + 'px';
		window.addEventListener('resize', () => {
		  container.style.minHeight = window.innerHeight + 'px';
		});
	}
	

	
	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}

	(function fairyDustCursor() {
	  
		var possibleColors = ["#fff"];
		var width = window.innerWidth;
		var height = window.innerHeight;
		var cursor = {x: width/2, y: width/2};
		var particles = [];
		
		function init() {
		  bindEvents();
		  loop();
		}
		
		// Bind events that are needed
		function bindEvents() {
		  document.addEventListener('mousemove', onMouseMove);
		  document.addEventListener('touchmove', onTouchMove);
		  document.addEventListener('touchstart', onTouchMove);
		  
		  window.addEventListener('resize', onWindowResize);
		}
		
		function onWindowResize(e) {
		  width = window.innerWidth;
		  height = window.innerHeight;
		}
		
		function onTouchMove(e) {
		  if( e.touches.length > 0 ) {
			for( var i = 0; i < e.touches.length; i++ ) {
			  addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
			}
		  }
		}
		
		function onMouseMove(e) {    
		  cursor.x = e.clientX;
		  cursor.y = e.clientY;
		  
		  addParticle( cursor.x, cursor.y, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
		}
		
		function addParticle(x, y, color) {
		  var particle = new Particle();
		  particle.init(x, y, color);
		  particles.push(particle);
		}
		
		function updateParticles() {
		  
		  // Updated
		  for( var i = 0; i < particles.length; i++ ) {
			particles[i].update();
		  }
		  
		  // Remove dead particles
		  for( var i = particles.length -1; i >= 0; i-- ) {
			if( particles[i].lifeSpan < 0 ) {
			  particles[i].die();
			  particles.splice(i, 1);
			}
		  }
		  
		}
		
		function loop() {
		  requestAnimationFrame(loop);
		  updateParticles();
		}
		
		/**
		 * Particles
		 */
		
		function Particle() {
  
		  // this.character = "*";
		  this.lifeSpan = 120; //ms
		  this.initialStyles ={
			"position": "absolute",
			"display": "block",
			"width": "10px",
			"height": "10px",
			"background": "url('') no-repeat center center/contain",
			// "text-shadow": "0 0 100px #fff",
			"pointerEvents": "none",
			"z-index": "10000000",
			// "fontSize": "25px",
			"will-change": "transform"
		  };
  
		  // Init, and set properties
		  this.init = function(x, y, color) {
  
			this.velocity = {
			  x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
			  y: 1
			};
			
			this.position = {x: x - 10, y: y - 20};
			this.initialStyles.color = color;
  
			this.element = document.createElement('span');
			// this.element.innerHTML = this.character;
			applyProperties(this.element, this.initialStyles);
			this.update();
			
			document.querySelector('.container').appendChild(this.element);
		  };
		  
		  this.update = function() {
			this.position.x += this.velocity.x;
			this.position.y += this.velocity.y;
			this.lifeSpan--;
			
			this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
		  }
		  
		  this.die = function() {
			this.element.parentNode.removeChild(this.element);
		  }
		  
		}
		
		/**
		 * Utils
		 */
		
		// Applies css `properties` to an element.
		function applyProperties( target, properties ) {
		  for( var key in properties ) {
			target.style[ key ] = properties[ key ];
		  }
		}
		
		init();
	  })();
});