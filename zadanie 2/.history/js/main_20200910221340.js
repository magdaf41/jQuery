$(document).ready(function () {


  $('#button1').click(function () {
    $('p:last').insertBefore('p.first');

  });

  $('div').append('<button id="button2">Przycisk 2</button>');
  $('#button2').click(function () {
    $('p:first').insertAfter('p:last');

  });
});



