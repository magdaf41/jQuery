$(document).ready(function () {

    $('#animate').click(function () {
        $('#square').animate({
            'marginLeft': '100px',
            'width': '100px',
            'height': '100px'
        }, 3000, colorChange);
    });
    function colorChange() {
        $('#square').animate({
            'backgroundColor': '#0000ff'
        }, 5000, finishShow);
    }
    function finishShow() {
        $('div').html('<h1>Animation Finish</h1>');
    }
});






