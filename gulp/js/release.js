$(function () {
  $('#release01 a[data-toggle="tab"]').click(function () {
    var clickEventAttr = $(this).attr('href')
    $('.nav.nav-tabs li a').each(function () {
      if ($(this).attr('href') === clickEventAttr) {
        $(this).click()
      }
    })
  })
})