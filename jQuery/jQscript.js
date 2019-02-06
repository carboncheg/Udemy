'use strict';

$(document).ready(function() {

    $('button:eq(1)').on('click', function() {
        $(this).hide('slow');
    });

    $('button:eq(2)').on('dblclick', () => {
        $('button:eq(1)').show(2000);
    });

    $('button:eq(0)').on('mouseenter', () => {
        $('img:eq(0)').hide();
        setTimeout(function(){
            $('img:eq(0)').fadeTo(1000, .5);
        }, 1000);
    });

    $('img:odd').on("mouseleave", function() {
        $(this).fadeOut(2000);
        setTimeout(function() {
            $('img:odd').fadeIn(1500);
        }, 3000);
    });

    $('img:even').on('mouseup', function() {
        $(this).slideUp('slow');
            setTimeout(function() {
                $('img:even').slideDown(1000);
            }, 1000);
    });

    $('button:last').on('mousemove', function() {
        $(this).slideToggle(999);
    });

    $(window).on('resize', function() {
        $('body').hide();
    });

    // $(window).on('scroll', function() {
    //     alert('Скролл!!!!');
    // });    

});