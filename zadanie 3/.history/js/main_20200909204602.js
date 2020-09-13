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

    $('#slide-up').click(function() {
        heading.slideUp(2000);
    });

    $('#slide-down').click(function() {
        heading.slideDown(2000);
    });

    $('#slide-toggle').click(function() {
        heading.slideToggle(2000);
    });


});