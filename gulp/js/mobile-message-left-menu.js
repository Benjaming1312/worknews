/**
 * use for message left
 */
$(function () {
  $('.person-menu #togglePersonMenu').click(function () {
    $('.person-menu').toggleClass('active')
  })
  $('.person-menu .close').click(function () {
    $('.person-menu').removeClass('active')
    $('.person-menu').removeClass('openMessage')
  })
  // when click tabs open full page list
  $('.resume .site.nav.nav-tabs .openMessage').click(function () {
    $('.person-menu').addClass('openMessage')
  })

  $('.person-menu #room_list li a').each(function () {
    $(this).click(function () {
      $('.person-menu #room_list li').removeClass('active')
      $(this).parent('li').addClass('active')

      if ($(window).width() < 768) {
        $('.close').click()
      }
    })
  })
})