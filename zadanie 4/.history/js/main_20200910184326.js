$(document).ready(function () {

    $('.accordion-item').click(function () {
        $(this)addClass('open');
        $(this).find('.accordion-content').slideDown();

    });
});