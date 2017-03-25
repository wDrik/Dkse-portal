/**
 * Created by Wildrik on 16/12/2016.
 */

// Navigation Script
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 10){
            $('#navigation').css({'background':'rgba(51,51,51, 0.97)', 'box-shadow': '0px 1px 5px 0px rgba(51,51,51,0.7)'});
        }else {
            $('#navigation').css({'background':'transparent', 'box-shadow': 'none'});
        }
    });
});





// Dropdown Script
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});









$(document).ready(function(){
    $window = $(window);
    //Captura cada elemento section com o data-type "background"
    $('header[data-type="background"]').each(function(){
        var $scroll = $(this);
        //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });
});
















// Script of Scrolls
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() >= 1000){
            $('#go-top').fadeIn('slow');
            $('.social-fadein').fadeIn('slow');
        }else {
            $('#go-top').fadeOut('slow');
            $('.social-fadein').fadeOut('slow');
        }
    });


    // Go top
    $('#go-top').click(function(){
        $('body, html').animate({scrollTop:0}, 600);
    });

    // Script for scrolls -> use the class .scroll to active
    $(".scroll").click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });



});







// Scroll superior opacity and move
var divs = $('#superior > div');
$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    divs.css({ 'opacity' : (1 - st/400)});
    divs.css({ 'top' : (340 - st/100)});

    if (st <= 10){
        $('#superior > div').css({ 'top' : '174px'});
    }
});


// WOW
new WOW().init();


