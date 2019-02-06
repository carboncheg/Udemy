$(document).ready(function() {
    
    $('a[href="#sheldure"], .main_btna, .main_btn').on('click', () => {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', () => {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    });
});