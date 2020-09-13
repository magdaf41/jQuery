$(document).ready(function () {

    $('#animate').click(function () {
        $('#square').animate({
            'marginLeft': '100px',
            'width': '100px',
            'height': '100px'
        }, 3000, function () {
            $('#square').animate({
                'backgroundColor': '#0000ff'
            }, 5000);
        });
    });




