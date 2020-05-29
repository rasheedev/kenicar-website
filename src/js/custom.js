/* --------------------------------------------------------------------
-----------------------------------------------------------------------
   Template Name : Kenicar Website
   Author : Pixygen
   Version : 1.0.0
   Created : May 2020
   File Description : Main JS file of the template
-----------------------------------------------------------------------
---------------------------------------------------------------------*/

$(document).ready(function(){

    "use strict";

    /* Preloader */
    $(window).load(function() {
        $('#preloader').delay(500).fadeOut('slow');
        $('.spinner').delay(250).fadeOut();
        $('body').delay(250).css({
            'overflow': 'visible'
        });
    });

    /* Back to Top */ 
   $(window).on("scroll", function() {
        if($(this).scrollTop() > 700)
            $(".back-to-top").fadeIn(); 
        else
            $(".back-to-top").fadeOut();
    });
    $(".back-to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    /* Vehicles Slider */
    $('#owl-vehicles-slider').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        autoplayHoverPause: true,
        autoplay: 2500,
        mouseDrag: true,
        dots: false,
        responsive: {
            0: {
                items:2
            },
            600: {
                items:3
            },
            1000: {
                items: 5
            }
        }
    });

});