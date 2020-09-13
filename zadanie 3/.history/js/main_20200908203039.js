$(document).ready(function () {
   const section = $('#about');
   console.log(section);

   const listItem = $('.list-item');
   console.log(listItem);

   const paragraph = $('p');
   console.log(paragraph);

   const secondItems = $('.list-item:nth-of-type(2)');
   console.log(secondItems);

   const links = $('a[title="See more"]');
   console.log(links);

   const headingsInSection = $('section h2');
   console.log(headingsInSection);

   const documentObj = $(document);
   console.log(documentObj);
});

