$(document).ready(function () {

    let headingText = $('h2').text();
    console.log(headingText);

    let parContent = $('p').eq(0).text();
    console.log(parContent);

    $('h2').text('New heading <span>text</span> ');
});

