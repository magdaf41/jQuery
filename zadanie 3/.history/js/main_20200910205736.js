$(document).ready(function () {

  // console.log($('.salary').eq(1).text());

// console.log($('.salary').eq(1).text());
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

let sum = number0 + number1;
console.log(sum);

// const salary = parseInt($('.salary').text());
// console.log(salary);

// $.each(salary, function(index, value){
//   let sum =+
//   console.log(`${index}: ${value}`);
// })

//   // $('.salary').each(function (index) {
//   //   total += parseInt($('.this').text());
//   //   console.log(total);
//   // })

//   // var salary = $('.salary').eq(1).find('.number').text();
//   // console.log(salary);

// });

// const numbers = [1, 2, 3, 4, 5];
// $.each(numbers, function(index, value){
//   console.log(`${index}: ${value}`);
// });