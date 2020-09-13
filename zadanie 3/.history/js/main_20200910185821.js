$(document).ready(function () {
  changeParagraph();
});


  function changeParagraph() {
    $('#button').click(function () {
      console.log('działa');
    });
  };


console.log($('p').eq(0));