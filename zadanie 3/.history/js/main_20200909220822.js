$(document).ready(function () {

    $('#animate').click(function () {
        $('div').animate({
            'marginLeft': '100px',
            'width': '100px',
            'height': '100px'
        }, 3000, colorChange);
    });
    function colorChange() {
        $('div').animate({
            'background-color': 'blue'
        }, 5000, finishShow);
    }
    function finishShow() {
        $('div').html('<h1>Animation Finish</h1>');
    }
});






