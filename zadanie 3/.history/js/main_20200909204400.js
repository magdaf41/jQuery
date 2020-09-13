$(document).ready(function () {
    const heading = $('h1');

    $('#hide').click(function() {
        heading.hide(2000);
    });

    $('#show').click(function() {
        heading.show(1000);
    });

    $('#show-toggle').click(function() {
        heading.toggle(2000);
    });

    $('#fade-out').click(function() {
        heading.fadeOut(2000);
    });

    $('#fade-in').click(function() {
        heading.fadeIn(2000);
    });

    $('#fade-toggle').click(function() {
        heading.fadeToggle(2000);
    });
});