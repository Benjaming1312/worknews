$(function () {
  $('.characteristic .col-sm-3').each(function () {
    var svgId = $(this).find('svg').attr('id')
    $(this).mouseenter(function () {
      console.log('mouse over')
      var vivus = new Vivus(svgId, {
        duration: 150,
        type: 'oneByOne'
      })
      vivus.play(1)
    })

  })
})