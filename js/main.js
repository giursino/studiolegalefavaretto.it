(function($) {
  "use strict";

  /*--------------------------
    Preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
    TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
    Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
    Wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  /*----------------------------
    Nivo slider
  ------------------------------ */
  $('#desktop-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 3500,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: false,
    manualAdvance: false,
  });

  $('#mobile-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 2500,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: false,
    manualAdvance: false,
  });

  /*----------------------------
    Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*----------------------------
    Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   Collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /*---------------------
   Google Maps loader
  --------------------- */
  $(window).on('load', function(){
    var maps = document.getElementById('maps').contentWindow
    maps.location.replace('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.465872422657!2d11.885143806110813!3d45.41333827756262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda5ee25f565f%3A0xdb2d2c586c09f5a8!2sVia+Bellini%2C+12%2C+35131+Padova+PD!5e0!3m2!1sit!2sit!4v1554830304648!5m2!1sit!2sit')
  });

  /*---------------------
   Privacy loader
  --------------------- */
  $('#privacy').on('show.bs.modal', function(){
    $('#privacy-body').load("privacy.html")
  });

  /*---------------------
   Legal advices loader
  --------------------- */
  $('#note-legali').on('show.bs.modal', function(){
    $('#note-legali-body').load("notelegali.html")
  });

})(jQuery);
