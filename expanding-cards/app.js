const imagesContainer = document.querySelectorAll(".images");

imagesContainer.forEach((image) => {
  image.addEventListener("click", (e) => {
    removeActive()
    e.target.classList.add("active");
  });
});

function removeActive() {
  imagesContainer.forEach((image) => {
    image.classList.remove("active");
  });
}
