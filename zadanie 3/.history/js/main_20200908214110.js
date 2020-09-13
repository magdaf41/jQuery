$(document).ready(function () {

   $('#about h2').attr('id', 'main-headin');

   let titleValue = $('a').eq(1).attr('title');
   console.log(titleValue);

   $('section').removeAttr('id');

   $('section').addClass('main-section');

   $('.description').removeClass('description');

   console.log($('section').hasClass('main-section'));

    $('p').toggleClass('content');

    $('li').addClass('item ul-item')
});

