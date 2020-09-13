// $(document).ready(function () {
//     $('#square').css({
//         'height': '200px',
//         'width': '200px',
//         'background-color': 'red',
//         'margin': '20px'
//     });

//     $('#animate').click(function () {
//         $('#square').animate({ 'marginLeft': '100px', 'width': '100px', 'height': '100px' }, 3000, function () {
//             $('#square').animate({ 'backgroundColor': '#0000ff' }, 5000, function(){

//             }

//         });
//     });
// });



$('#section-one').find('button').click(function () {
    $('#section-one #square').animate({ /* - properties*/
            left: '100px',
            height: '100px',
            width: '100px'
        },
        3000, /* - duration*/
        function () { /* - function to call once the animation is complete */
            $('#section-one #square').animate({ /* - properties*/
                    backgroundColor: '#0000FF'
                },
                5000, /* - duration*/
                function () {
                    console.log('Dodaje htmla');
                    $('#section-one #square').html('<h2>Animacja zakończona</h2>');
                }
            )
        }
    );
});
}
