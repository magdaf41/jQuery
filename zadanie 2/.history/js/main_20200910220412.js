$(document).ready(function () {



$('#button1').click(function() {
  $('.fifth').insertBefore('.first');

  $('#button2').click(function() {
    $('.first').insertBefore('.fifth');


});
});


$('div').append('<button id="button2">Przycisk 2</button>');

// let button1 = document.createElement("button1");  // Create with DOM
// button1.innerHTML = "Przycisk1";
// $('div').append('button1');
// });

