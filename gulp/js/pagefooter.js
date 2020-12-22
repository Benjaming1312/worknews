$(function () {
  if (window.location.href.indexOf('work.html') > 0 || window.location.href.indexOf('part') > 0) {
    $('footer.foot').addClass('work-foot')
  }

  if (window.location.href.indexOf('Temporary') >= 0 && $('.worktabs').is('.worktabs') && $('.server >div >.row').children().length === 0) {
    // No work theme
    $('.server .row').append('<div class="col-xs-12"><p class="text-center" style="font-size: 18px;">目前尚無工作資訊</p></div>')
    // $('.work-foot').attr('style', 'position: fixed; bottom: 0;')
  }
  if (window.location.href.indexOf('Normal') >= 0 && $('.worktabs').is('.worktabs') && $('.server >div >.row').children().length === 0) {
    // No work theme
    $('.server .row').append('<div class="col-xs-12"><p class="text-center" style="font-size: 18px;">目前尚無工作資訊</p></div>')
    // $('.work-foot').attr('style', 'position: fixed; bottom: 0;')
  }
})