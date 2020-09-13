$(document).ready(function() {
    animateSquare();
  })

  function animateSquare() {
    $('#button').click(function() {
      $('#square').animate({'height' : '100px','width' : '100px','left' : '100px',}, 3000,
      function (){
         $('#square').animate({'backgroundColor' : 'blue'}, 5000,
         function () {
                $('#square').html('<h2>Animacja zakończona</h2>').animate({
                   'opacity' : '1'});
           });
      });
      });
  }
