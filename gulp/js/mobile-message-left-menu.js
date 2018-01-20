/**
 * use for message left
 */
$(function () {
  $('.person-menu #togglePersonMenu').click(function () {
    $('.person-menu').toggleClass('active')
  })
  $('.person-menu .close').click(function () {
    $('.person-menu').removeClass('active')
  })
})