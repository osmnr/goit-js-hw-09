import { images } from '../img/images';

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

const img = document.getElementsByTagName("IMG");
for (var i = 0; i < img.length; i++) {
  // adding event listener to the 'img' to make the size bigger when hovered
  img[i].addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(1.04)";
  });
  //  adding event listener to the 'img' to remove the changes of the size
  img[i].addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1)"; // Reset scale
  });
}


gallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();
  const imageData = event.target;
  if (imageData.tagName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imageData.dataset.source}">`
  );

  instance.show();
  
  function handleKeydown(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleKeydown);
    }
  }
  document.addEventListener("keydown", handleKeydown);
}