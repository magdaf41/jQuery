$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.main-menu').toggleClass('open');
    });
    $('main-menu-item').click(function (e) {
        e.preventDefault();
    });
});