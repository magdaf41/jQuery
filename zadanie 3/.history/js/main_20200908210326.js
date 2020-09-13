$(document).ready(function () {
   const linkParents = $('a').parent();
   console.log(linkParents);

   const sectionChildren = $('section').children();
   console.log(sectionChildren);

   const descriptionSiblingsAfter = $('.description').next();
   console.log(descriptionSiblings);

   const descriptionSiblingsBefore = $('.description').prev();
   console.log(descriptionSiblingsBefores);
});

