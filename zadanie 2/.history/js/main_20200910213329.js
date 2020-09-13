$(document).ready(function () {
  $('.select .classCheckBox input').each(function() {
    $(this).insertAfter( $(this).next('label') );
  });
});


