$(document).ready(function () {

    $('button').click(function () {
        $('div').animate({'marginLeft': '100px', 'width': '100px', 'height': '100px'}, 3000, colorChange);
    });

    function colorChange() {
        $('div').animate({'backgroundColor': 'blue'}, 5000, finishShow);
    }
    function finishShow() {
        $('div').html('<h1>Animation Finish</h1>');
    }
});




