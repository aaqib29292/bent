$( document ).ready(function() {

  $('.parallax-landing').
          parallax({imageSrc: 'builds/dev/images/home.jpg',
                    position: 'top'});

  $('.parallax-testimonials').
          parallax({imageSrc: 'builds/dev/images/testimonial.jpg',
                    position: 'top'});

  $('.parallax-counter').
          parallax({imageSrc: 'builds/dev/images/fun_bg.jpg',
                    position: 'top'});



  $('#subscribeUs').
          parallax({imageSrc: 'builds/dev/images/subscribe.jpg',
                    position: 'top'});


  $('.video').fitVids();

  $("#owl-carousel").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  new WOW().init();



  // $("a[rel^='prettyPhoto']").prettyPhoto();


  var showNavbar = function () {
    $( "nav" ).addClass( "navbar-visible");
    $( "nav" ).removeClass( "navbar-invisible");
  };

  var hideNavbar = function () {
    $( "nav" ).removeClass( "navbar-visible");
    $( "nav" ).addClass( "navbar-invisible");
  };

  // Navbar displaying on sc

  // checking scrollPos on reloading and displaying
  var scrollPos = $(window).scrollTop();
  console.log(scrollPos);
  if(scrollPos >= 200) {
    showNavbar();
  } else {
    hideNavbar();
  }

  // Depending on scroll, displaying navbar

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if(scroll >= 200) {
          showNavbar();
      } else {
          hideNavbar();
      }
  });


  //Use smooth scrolling when clicking on navigation from CSS-Tricks

  var topoffset = 50;
  // scrollspy
  $('body').scrollspy({
     target: '.navbar-fixed-top',
     offset: topoffset
    })


  $('.navbar-nav a[href*="#"]:not(a[href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
    this.pathname.replace(/^\//,'') &&
    location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 800);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling


});
