// when mobile size, navbar will append to social-manu
$(function () {
  if ($(window).width() < 768) {
    // append li element
    $('.social-menu .visible-xs .dropdown-title').after($('.navbar-nav li'))
    // remove navbar element
    $('.navbar.menu').remove()
  }
})