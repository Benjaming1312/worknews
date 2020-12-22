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
// focus nav link
function focusNav () {
  $('.menu .nav.navbar-nav a').each(function () {
		var target = $(this).attr('href')
		var url = new URL(target)
		console.log('%c (／‵Д′)／~ ╧╧ url : ', 'padding: .25rem; font-size: 14px; background: #12bdba; color: #fff', url.pathname)
    if (window.location.pathname === url.pathname) {
      $(this).addClass('active')
    }
  })
  $('.menulist a').each(function () {
		var mobileTarget = $(this).attr('href')
		var url = new URL(mobileTarget)
    if (window.location.pathname === url.pathname) {
      $(this).addClass('active')
    }
  })
}

$(function () {
  appendNav()
  $(window).on('resize', function () {
    appendNav()
    focusNav()
  })
  focusNav()

})