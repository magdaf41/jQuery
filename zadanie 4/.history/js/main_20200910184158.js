$(document).ready(function () {

    $('.accordion-item').click(function () {
        console.log('klikam');
        $(this).find('.accordion-content').slideDown();

    });
});