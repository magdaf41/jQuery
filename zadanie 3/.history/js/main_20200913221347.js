$(document).ready(function () {

  $('#count-sum').click(function () {

    let sum = 0;

    $('.salary').each(function (index) {

      sum += parseFloat($(this).text())
      console.log(parseFloat($('.salary').eq(index).text()));

    })
    $('#sum').text(sum);

  });

});

