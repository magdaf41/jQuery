$(document).ready(function () {
   const newLi = $('<li class = "list-item">New item</li>');
   console.log(newLi);

   $('ul').prepend(newLi);

   $('ul').append('<li class="list-item">Last item</li>');
});

