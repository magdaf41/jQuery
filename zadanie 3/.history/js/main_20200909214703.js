$(document).ready(function () {
    $('#square').css({
        'height': '200px',
        'width': '200px',
        'background-color': 'red',
        'margin': '20px'
    });

    $('#animate').click(function () {
        $('#square').animate({ 'marginLeft': '100px', 'width': '100px', 'height': '100px' }, 3000, function () {
            $('#square').animate({ 'backgroundColor': '#0000ff' }, 5000);


        });
    });



