function owlcarouselfn(target,nav,dot) {
  $(target).owlCarousel({
      items: 1,
      autoplay:true,
      nav: nav,
      dots: dot,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoPlaySpeed: 2000,
      autoPlayTimeout: 2000,
      smartSpeed: 1500,
      autoplayHoverPause: false,
  })
}

$(function () {
  owlcarouselfn('.banner.owl-carousel', false, false)
})