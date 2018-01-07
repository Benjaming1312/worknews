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

function focusNav () {
  $('.menu .nav.navbar-nav a').each(function () {
    var target = $(this).attr('href').split('.')[0]
    if (window.location.href.indexOf(target) > 0) {
      $(this).addClass('active')
    }
  })
}

$(function () {
  appendNav()
  $(window).on('resize', function () {
    appendNav()
  })

  // focus nav link
  focusNav()
})