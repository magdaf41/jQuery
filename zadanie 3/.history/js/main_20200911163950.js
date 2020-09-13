$(document).ready(function () {

  $('#count-sum').click(function () {


    let sum = 0;

    $('.salary').each(function (index) {

      sum += parseFloat($(this).text())
      console.log(parseFloat($('.salary').eq(index).text()));

    })
    $('#sum').text(sum);
    // let number0 = parseInt($('.salary').eq(0).text());
    // console.log(number0);
    // let number1 = parseInt($('.salary').eq(1).text());
    // console.log(number1);
    // let number2 = parseInt($('.salary').eq(2).text());
    // console.log(number2);
    // let number3 = parseInt($('.salary').eq(3).text());
    // console.log(number3);
    // let number4 = parseInt($('.salary').eq(4).text());
    // console.log(number4);


    // let sum = number0 + number1 + number2 + number3 + number4;
    // console.log(sum);


  });



});

