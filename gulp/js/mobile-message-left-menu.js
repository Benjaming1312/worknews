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
})