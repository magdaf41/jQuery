$(document).ready(function () {

$('#button').click(function() {
  $('.fifth').insertBefore('.first');


  $('div').innerHtml('<li class="list-item">Last item</li>');
})
});


