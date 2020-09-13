$(document).ready(function() {
    animateSquare();
  })

  function animateSquare() {
    $('button').click(function() {
      $('#square').animate({
        'height' : '100px',
        'width' : '100px',
        'left' : '100px',
      }, 3000, function (){
         $('e.target').animate({
           'backgroundColor' : '#0000ff'}, 5000, function () {
                $('#square').find('#text-end').animate({
                  'opacity' : '1'});
           });
      });
      });
  }
