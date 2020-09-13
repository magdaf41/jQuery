$(document).ready(function () {

    $('#button').click(function () {
        $('#square').animate({ 'marginLeft': '100px', 'width': '100px', 'height': '100px' }, 3000, function (){
        $('this').animate({ 'backgroundColor' :'blue' }, 5000
        );
        });
    });
});



// $(document).ready(function() {
//     $("#b1").click(function() {
//         $("#box").animate({
//             width: "300px"
//         });
//         $("#box").animate({
//             height: "300px"
//         });
//     });
// });

// $('#animate').click(function(){
//     $('h1').animate({opacity: 0.3, fontSize: '3em'}, 2000, function() {
//         $(this).after('<p>Animacja zakończona</a>');
//     });
//     function colorChange() {
//         $('div').animate({ 'border': '10px solid blue' }, 8000, finishShow);
//     }
//     function finishShow() {
//         $('div').html('<h1>Animation Finish</h1>');
//     }
// });




