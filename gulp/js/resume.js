function is (name) {
  if ($(name).is(name)) {
    return true
  }
  else {
    return false
  }
}


$(function () {
  if (window.location.href.indexOf('resume') >= 0 &&
  window.location.href.indexOf('#') >= 0) {
    var target = window.location.href.split('#')[1]

    $('.nav.nav-tabs a').each(function () {
      if ($(this).attr('href') === '#' + target) {
        $(this).click()
      }
    })
  }
})