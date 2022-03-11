/* 滑動至指定位置 */
$("nav a").click(function () {                               
  var btn = $(this).attr("href");                          
  var pos = $(btn).offset();                              
  $("html, body").animate({ scrollTop: pos.top }, 1000);
});

/* 滑動至頂端 */
$("#gotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

/* 淡出淡入 */
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
      $('#gotop').stop().fadeTo('fast',0.7);
  } else {
      $('#gotop').stop().fadeOut('fast');
  }
});
/* 輪播 */
$('#slideshow').carousel({
    interval: 5000
 }); 

 /* button */
 var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
