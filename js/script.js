$(".slider").slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});

new WOW().init();

$(document).ready(function() {
    $('.hamburger').click(function(event) {
        $('.header__navbar-list, .header__navbar-btn, .hamburger__logo, .hamburger__close').toggleClass('active');
    });
    $('.header__navbar-link').click(function (event) {
      $('.header__navbar-list, .header__navbar-btn, .hamburger__logo, .hamburger__close').removeClass('active');
    })
});