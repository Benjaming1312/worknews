// fade特效
var fadein_index=[
  ".characteristic .col-sm-3",
  ".services .col-sm-6"
];
//滾動animation
//當視窗高度到達物件時的動作
function scrollanimation(a, b, vivus) {
  $(a).each(function() {
    var objectBottom = $(this).offset().top;
    var windowBottom = $(window).scrollTop() + $(window).innerHeight() - 100;
    if (objectBottom < windowBottom) {
        $(this).addClass(b);
      }
  });
};
$(window).scroll(function() {
  //遇到class+animation
  fadein_index.forEach(function(e){
    scrollanimation(e,'animated fadeIn');
  });
});
if ($(window).width() > 768) {
} 
else if ($(window).width() < 767) {
    $('nav.navbar').before($('.mshop-head ul'))
}