$(document).ready(function () {

    let headingText = $('h2').text();
    console.log(headingText);

    let parContent = $('p').eq(0).text();
    console.log(parContent);

    $('h2').text('New heading text');

    $('p').eq(0).html('Lorem <span>ipsum</span>');

    $('#name').val('Łukasz');
    $('#contact-form').submit(function(e){
        e.preventDefoult();
        console.log($('#name').val());
    });
});

