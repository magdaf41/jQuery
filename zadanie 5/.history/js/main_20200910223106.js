$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.main-menu').toggleClass('open');
    });
    $('main-menu-item a').click(function (e) {
        e.preventDefault();

        console.log('klikam link')
    });
});