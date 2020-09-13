$(document).ready(function () {


  $('#button1').click(function () {
    $('p:last').insertBefore('p.first');

  });

  $('div').append('<button id="button2">Przycisk 2</button>');
  $('#button2').click(function () {
    $('.first').insertAfter('.fifth');

  });
});



// var fruit = ['orange', 'apple', 'banana', 'grapes', 'kiwi'];
// $.each(fruit, function(index, value){
//   console.log(index + ' ' + value);
// });