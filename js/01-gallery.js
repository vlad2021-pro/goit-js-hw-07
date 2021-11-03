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



const openLargePictures = (event) => {
  event.preventDefault();

  const largePictures = event.target.dataset.source;
  const modalWindow = basicLightbox.create(`<img width="1400" height="900" src="${largePictures}">`);
  modalWindow.show();
  
  document.addEventListener("keydown", event => {
    if (event.key === 'Escape') {
      modalWindow.close();
      document.removeEventListener("keydown", openLargePictures);
    }
  })
}

gallaryNode.addEventListener('click', openLargePictures);



