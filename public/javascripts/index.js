!(function($) {
  "use strict";
  var nav = $('nav');
  var navHeight = nav.outerHeight();

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
  /*--/ End Scrolling nav /--*/

  

  // -----------Navbar toggler control for sidebar, Written by Neutrino Okoye
  $('.navbar-toggler').on('click' , function () {
    if ($('#side-menu').hasClass('side-nav') ) {
      $('#side-menu').addClass('side-nav-out')  
      $('#side-menu').removeClass('side-nav')
      $('#main').addClass('black')
      $('#main').removeClass('main')
    }
    else {
      $('#side-menu').addClass('side-nav')
      $('#side-menu').removeClass('side-nav-out')
      $('#main').addClass('main')
      $('#main').removeClass('black')
    }
  })

  // ----------Clicking on main body to close sidebar, Written by Neutrino Okoye
  $('#main').on('click' , function () {
    if ($('#side-menu').hasClass('side-nav-out') ) {
      $('#side-menu').addClass('side-nav')
      $('#side-menu').removeClass('side-nav-out')
      $('#main').addClass('main')
      $('#main').removeClass('black')
    }
  })


  // --------------Clicking on sidebar links to close sidebar, Written by Neutrino Okoye
  
  
  $('.side').on('click' , function () {
    if ($('#side-menu').hasClass('side-nav-out') ) {
      $('#side-menu').addClass('side-nav')
      $('#side-menu').removeClass('side-nav-out')
      $('#main').addClass('main')
      $('#main').removeClass('black')
    }
  })
  

  	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () { 
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  });

  /*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 20)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

  



})(jQuery);
//new WOW().init();
