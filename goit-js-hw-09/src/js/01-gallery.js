import { images } from '../img/images';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector(".gallery");

const galleryMarkup = images.map(
  ({ preview, original, description }) =>
      `<li class="gallery-item">
          <a class="gallery-link" href="${original.substring(
            1,
            original.length - 1
          )}">
            <img
              class="gallery-image"
              src="${preview.substring(1, preview.length - 1)}"
              data-source="${original.substring(1, original.length - 1)}"
              alt="${description}"
            />
          </a>
        </li>`
  ).join("");

gallery.innerHTML = galleryMarkup;

const mylightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
