$(document).ready(function() {

    /* Sticky navigation */
    $('.js-about-section').waypoint(function(direction) {
        if (direction == "down")
        {
            $('.js-nav').addClass('sticky');
        } else 
        {
            $('.js-nav').removeClass('sticky');
        }
    }, {
        offset: '80px;'
    });

    /* Animated Scrolling */
    $(".js-about-scroll").click(function() {
        $('html, body').animate({scrollTop: $(".js-about-section").offset().top}, 1000)
    });

    $(".js-portfolio-scroll").click(function() {
        $('html, body').animate({scrollTop: $(".js-portfolio-section").offset().top}, 1000)
    });

    $(".js-contact-scroll").click(function() {
        $('html, body').animate({scrollTop: $(".js-contact-section").offset().top}, 1000)
    });

    $(".js-blog").click(function() {
        alert("Not done yet.");
        history.back();
    });

    /* Animate on scroll  */
    $('.js-about-section').waypoint(function() {
        $('.js-about-picture').addClass('animated fadeIn');
    }, {
        offset: '500px;'
    });

    $('.js-portfolio-section').waypoint(function() {
        $('.js-embla').addClass('animated zoomIn');
    }, {
        offset: '500px;'
    });

    $('.js-contact-section').waypoint(function() {
        $('.js-social').addClass('animated fadeIn');
    }, {
        offset: '500px;'
    });

    /* Mobile nav */
    $(".js-mobile-nav").click(function() {
        var nav = $(".js-nav-items");

        nav.slideToggle(200);
    });
});