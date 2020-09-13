$(document).ready(function () {


  $('#button1').each ( click(function () {
    $('.fifth').insertBefore('.first');

  }));



  $('div').append('<button id="button2">Przycisk 2</button>');
  $('#button2').click(function () {
    $('.first').insertAfter('.fifth');

  });
});
