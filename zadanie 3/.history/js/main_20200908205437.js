$(document).ready(function () {
   const fifthItem = $('.list-item').eq(4);
   console.log(fifthItem);

   const firstItem = $('.list-item').first();
   console.log(firstItem);

   const lastItem = $('.list-item').last();
   console.log(lastItem);

   const paragraphsNotDescription = $('p').not('.description');
   console.log(paragraphsNotDescription);
});

