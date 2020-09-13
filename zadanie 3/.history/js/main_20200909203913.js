$(document).ready(function () {
    const heading = $('h1');

    $('#hide').click(function() {
        heading.hide(2000);
    });

    $('#show').click(function() {
        heading.show(1000);
    });
});