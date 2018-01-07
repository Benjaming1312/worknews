$(function () {
  // click link to click tabs
  $('.panel-heading .panel-title a').each(function () {
    $(this).on('click', function () {
      var mobileTabs = '#' + $(this).parents('.panel-heading').attr('id').split('heading')[1]
      $('.nav.site a').each(function () {
        var tabTarget = $(this).attr('href')
        if (tabTarget === mobileTabs) {
          $(this).click()
        }
      })
    })
  })
  // click toggle button
  $('.toggle-left-menu a').click(function () {
    $('.left-menu').addClass('active')
  })
  // close button toggle
  $('.left-menu .close').click(function () {
    $('.left-menu').removeClass('active')
  })
  $('.left-menu .server a').each(function () {
    $(this).click(function () {
      $('.left-menu').removeClass('active')
    })
  })
})
