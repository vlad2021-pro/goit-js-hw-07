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

gallaryNode.insertAdjacentHTML('beforeend', newGallery)
  
document.querySelectorAll('.gallery__image').forEach(img => {
  img.onclick = onImgClick
  
});

const instance = basicLightbox.create(
  `<img class="modal-img" src="">`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscClick);
    },
  },
  {
    onClose: instance => {
      window.removeEventListener('keydown', onEscClick);
    },
  },
);
function onImgClick(evt) {
  evt.preventDefault();
  
    if (evt.target.nodeName !== 'IMG') {
      return;

    }
    instance.element().querySelector('.modal-img').src =
      evt.target.dataset.source;
    instance.show();
}
   
  function onEscClick(evt) {
    if (evt.key === 'Escape') {
      instance.close();
      return;
    }
  }


let gallery = new SimpleLightbox('.gallery a',
  {
captionDelay: 'alt',
captionPosition: 'bottom',
captionsData: '250'
  });




