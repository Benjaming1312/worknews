function owlcarouselfn(n,o,a){$(n).owlCarousel({items:1,autoplay:!0,nav:o,dots:a,loop:!0,animateOut:"fadeOut",animateIn:"fadeIn",autoPlaySpeed:2e3,autoPlayTimeout:2e3,smartSpeed:1500,autoplayHoverPause:!1})}function scrollanimation(n,o,a){$(n).each(function(){$(this).offset().top<$(window).scrollTop()+$(window).innerHeight()-100&&$(this).addClass(o)})}$(function(){owlcarouselfn(".banner.owl-carousel",!1,!1)}),$(function(){$(window).width()<768&&($(".social-menu .visible-xs .dropdown-title").after($(".navbar-nav li")),$(".navbar.menu").remove())});var fadein_index=[".characteristic .col-sm-3",".services .col-sm-6"];$(window).scroll(function(){fadein_index.forEach(function(n){scrollanimation(n,"animated fadeIn")})}),$(window).width()>768||$(window).width()<767&&$("nav.navbar").before($(".mshop-head ul")),$(function(){$(".characteristic .col-sm-3").each(function(){var n=$(this).find("svg").attr("id");$(this).on("mouseover",function(){new Vivus(n,{duration:150,type:"oneByOne"}).play(1)})})});