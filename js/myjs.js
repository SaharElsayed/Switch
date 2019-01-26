$(function() {

    'use strict'

    // navbar
    $('.navbar-nav li').click(function() {

        $('.navbar-nav li.active').removeClass('active');

        $(this).addClass('active');

    });


    // smooth scroll
    $(".navbar-nav li a").click(function(){

        $('html,body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top - 18

        },1000);

    });


    // carousel time
    $('.carousel').carousel({
        interval: 2000
    })

    

    // nice scroll
    $('html').niceScroll({
        cursorcolor: "#30746E",
        cursorwidth: "8px",
        cursorborder: "1px solid #D0D0D0",
        scrollspeed: "65",
    });

    // testimonials

    // auto testimonials slider code
    (function autoslider() {

        $('.slider .active').each(function() {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoslider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoslider();

                });
            }
        });

    }());

    // scrollspy

    $('body').scrollspy({
        target: '#navbar-scroll'
    });

    // refresh scroll

    $('[data-spy="scroll"]').each(function() {
        var $spy = $(this).scrollspy('refresh')
    });

});