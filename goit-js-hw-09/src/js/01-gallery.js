import { images } from '../img/images';

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = images.map(
    ({preview, original, description}) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original.substring(1, original.length-1)}">
            <img class="gallery-image" 
            src="${preview.substring(1, preview.length-1)}"
            alt="${description}"
            />
        </a>
    </li>
`    
).join("");

galleryContainer.innerHTML = galleryMarkup;