$(document).ready(function () {
    $('#square').css({
        'height': '200px',
        'width': '200px',
        'background-color': 'red',
        'margin': '20px'
    });

    $('#animate').click(function () {
        $('#square').animate({ 'marginLeft': '100px', 'width': '100px', 'height': '100px' }, 3000, function () {
            $(this).animation.after({ 'background-color': 'blue' }, 5000)
        });
    });
});


// $('#animate').click(function(){
//     $('h1').animate({opacity: 0.3, fontSize: '3em'}, 2000, function() {
//         $(this).after('<p>Animacja zakończona</a>');
//     });
// });



