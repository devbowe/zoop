
/*** script modal ***/

$('.playvideo').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > iframe').attr("src","https://www.youtube.com/embed/fPEsj9iUp7s?autoplay=1");;

});
$('.modalvideo .close').click(function(){
    $('.modalvideo').css('display','none');
    $('html').css('overflow-y','auto');
    $('body > div > iframe').attr("src","");;
});