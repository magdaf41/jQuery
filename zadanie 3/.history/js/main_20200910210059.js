$(document).ready(function () {

  $('.count-sum').click(function(){
    console.log('działa');
  });

  let number0 = parseInt($('.salary').eq(0).text());
  console.log(number0);
  let number1 = parseInt($('.salary').eq(1).text());
  console.log(number1);
  let number2 = parseInt($('.salary').eq(2).text());
  console.log(number2);
  let number3 = parseInt($('.salary').eq(3).text());
  console.log(number3);
  let number4 = parseInt($('.salary').eq(4).text());
  console.log(number4);

  let sum = number0 + number1 + number2 + number3 + number4;
  console.log(sum);

});

