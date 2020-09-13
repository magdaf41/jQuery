$(document).ready(function () {
    $('#click-button').click(function () {
        $('h1').toggleClass('color', 'orange'); {
            $(this).css('background-color', 'green');
        }
        });

        $('a').on('click', function(e){
            e.preventDefault();
            $(this).css('font-size', '2em');
        });

        function changeFontSize(e) {
            e.preventDefault();
            $(this).css('font-size', '2em');
        }
        $('a').on('click', changeFontSize);
});