$(document).ready(function () {

  // console.log($('.salary').eq(1).text());

const salary = parseInt($('.salary').text());
console.log(salary);

$.each(salary, function(index, value){
  let sum =+;
  console.log(sum);
})

  // $('.salary').each(function (index) {
  //   total += parseInt($('.this').text());
  //   console.log(total);
  // })

  // var salary = $('.salary').eq(1).find('.number').text();
  // console.log(salary);

});

const numbers = [1, 2, 3, 4, 5];
$.each(numbers, function(index, value){
  console.log(`${index}: ${value}`);
});