// $(document).ready(function () {
//     $('#square').css({
//         'height': '200px',
//         'width': '200px',
//         'background-color': 'red',
//         'margin': '20px'
//     });

//     $('#animate').click(function () {
//         $('#square').animate({ 'marginLeft': '100px', 'width': '100px', 'height': '100px' }, 3000, (function() {
//             $('#square').animate({ 'background-color': '#0000ff' }, 5000)
//         }));
//     });
// });


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
         $('#square').animate({
           'backgroundColor' : '#0000ff'}, 5000, function () {
                $('#square').find('#text-end').animate({
                  'opacity' : '1'});
           });
      });
      });
  }



