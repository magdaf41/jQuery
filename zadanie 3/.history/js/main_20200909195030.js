$(document).ready(function () {
    $('#click-button').click(function () {
        $('h1').toggleClass('color-orange');
        $(this).css('background-color', 'green');

    });

});