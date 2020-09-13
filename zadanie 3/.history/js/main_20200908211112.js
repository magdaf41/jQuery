$(document).ready(function () {
   const newLi = $('<li class = "list-item">New item</li>');
   console.log(newLi);

   $('ul').apend(newLi);
});

