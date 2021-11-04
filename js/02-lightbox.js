import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryNode = document.querySelector('.gallery');

const newGallery = galleryItems.map(element => { 
 return `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source= "${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;

})
    .join('');

gallaryNode.insertAdjacentHTML('beforeend', newGallery )


console.log(galleryItems);
