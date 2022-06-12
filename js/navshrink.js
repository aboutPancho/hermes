//PRELOADER ANIMATION

window.addEventListener('load', () => {
	const preload = document.querySelector('.preload');
	preload.classList.add('preload-finish');
	//ANIMACION HEADER
	gsap.registerPlugin(ScrollTrigger);
	var tl = gsap.timeline();

	tl.from('.home', {
		opacity: 0,
		duration: 3,
		ease: Power4.easeOut,
	})
	tl.from('.stagger1', {
		opacity: 0,
		duration: 1.5,
		ease: Power4.easeOut,
		y: '-20%',
		stagger: .3,
	}, "-=2.5")
	tl.from('.stagger2', {
		opacity: 0,
		duration: 2,
		ease: Power4.easeOut,
		y: '20%',
		stagger: .1,
	}, "-=1.5")
	tl.from('.stagger3', {
		opacity: 0,
		duration: 2,
		ease: Power4.easeOut,
		stagger: .3,
	}, "-=1.5")
	tl.from('.stagger4', {
		opacity: 0,
		duration: 2,
		ease: Power4.easeOut,
		stagger: .5,
	}, "-=1.5")

	gsap.from(".scrollUp1", {
		scrollTrigger: {
			trigger: '.scrollUp1',
			start: "top bottom"
		},
		y: '50%',
		opacity: 0,
		duration: 1.5,
		stagger: .5,
		ease: Expo.easeOut,
	})
	gsap.from(".scrollUp2", {
		scrollTrigger: {
			trigger: '.scrollUp2',
			start: "top bottom"
		},
		y: '50%',
		opacity: 0,
		duration: 1.5,
		stagger: .3,
		ease: Expo.easeOut,
	}, "+=1.5")
	gsap.from(".scrollUp3", {
		scrollTrigger: {
			trigger: '.scrollUp3',
			start: "top bottom"
		},
		y: '50%',
		opacity: 0,
		duration: 1.5,
		stagger: .3,
		ease: Expo.easeOut,
	}, "+=1.5")
	gsap.from(".scrollUp4", {
		scrollTrigger: {
			trigger: '.scrollUp4',
			start: "top bottom"
		},
		y: '50%',
		opacity: 0,
		duration: 1.5,
		stagger: .2,
		ease: Expo.easeOut,
	}, "+=1.5")
	gsap.from(".scrollUp5", {
		scrollTrigger: {
			trigger: '.scrollUp5',
			start: "top bottom"
		},
		y: '50%',
		opacity: 0,
		duration: 1.5,
		stagger: .5,
		ease: Expo.easeOut,
	}, "+=1.5");
});

//NAV SHRINK
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('nav').addClass('shrink');
    }
    else {
    $('nav').removeClass('shrink');
    }
  });
});

jQuery(document).ready(function($) {
	var alterClass = function() {
		var ww = document.body.clientWidth;
		if (ww < 420) {
      $('.dr-container').removeClass('dropdown-menu');
    } else if (ww >= 421) {
      $('.dr-container').addClass('dropdown-menu');
    };
	};
	$(window).resize(function(){
		alterClass();
	});
	//Fire it when the page first loads:
	alterClass();
	});

	jQuery(document).ready(function($) {
		var alterClass = function() {
			var ww = document.body.clientWidth;
			if (ww < 420) {
	      $('.nav-drop-btn').removeClass('dropdown-toggle');
	    } else if (ww >= 421) {
	      $('.nav-drop-btn').addClass('dropdown-toggle');
	    };
		};
		$(window).resize(function(){
			alterClass();
		});
		//Fire it when the page first loads:
		alterClass();
		});
