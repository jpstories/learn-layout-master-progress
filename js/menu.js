$(document).ready(function(){
    $('.gamburger-menu').click(function(){
    if ($('.menu-mobile').hasClass('visible')){
        $('.menu-mobile').animate({"left":"-130px"}, "fast").removeClass('visible').addClass('hidden');
    } else {
        $('.menu-mobile').animate({"left":"0px"}, "fast").addClass('visible').removeClass('hidden');
    }
    });
});