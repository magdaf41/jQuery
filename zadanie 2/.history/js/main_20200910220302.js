$(document).ready(function () {



$('#button1').click(function() {
  $('.fifth').insertBefore('.first');


});
});

const button2 = $('<button class="button2">Przycisk 2</button>');
console.log(button2);
$('div').append('<button class="button2">Przycisk 2</button>');

// let button1 = document.createElement("button1");  // Create with DOM
// button1.innerHTML = "Przycisk1";
// $('div').append('button1');
// });

