// when mobile size, navbar will append to social-manu
function appendNav () {
  if ($(window).width() < 768) {
    $('.social-menu .visible-xs .dropdown-title').after($('.navbar-nav li'))
    $('.navbar.menu').hide()
  }
  else {
    $('.navbar.menu').show()
    $('.menulist li').each(function () {
      if (!$(this).attr('class')) {
        $('.navbar.menu .container-fluid .navbar-nav').append($(this))
      }
    })
  }
}

$(function () {
  appendNav()
  $(window).on('resize', function () {
    appendNav()
  })
})