$(document).ready(function () {
   const linkParents = $('a').parent();
   console.log(linkParents);

   const sectionChildren = $('section').children();
   console.log(sectionChildren);

   const descriptionSiblings = $('.description').next();
   console.log(descriptionSiblings);
});

