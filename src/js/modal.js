import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModalBtnRef = document.querySelector('button[data-open-modal]');
const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate);

openModalBtnRef.addEventListener('click', () => {
  instance.show();

  const closeModalBtnRef = document.querySelector('button[data-close-modal]');

  closeModalBtnRef.addEventListener('click', closeModal);
});

function closeModal() {
  instance.close();
}
