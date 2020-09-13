$(document).ready(function () {


  $('#button1').click(function () {
    $('p:last').insertBefore('p:first');

  });

  $('#button2').click(function () {
    $('p:first').insertAfter('p:last');

  });
});



