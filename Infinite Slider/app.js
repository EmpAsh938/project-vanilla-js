const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".image");

let index = 0;
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-next")) {
      // Prev image
      if (index === 0) {
        images[images.length - 1].classList.remove("prev");
        // images[images.length - 1].classList.add("next");
      } else {
        images[index - 1].classList.remove("prev");
        // images[index - 1].classList.add("next");
      }
      // Current image
      images[index].classList.remove("active");
      images[index].classList.add("prev");
      // Next image
      index++;
      if (index >= images.length) {
        index = 0;
      }
      images[index].classList.remove("next");
      images[index].classList.add("active");
      if (index === images.length - 1) {
        images[0].classList.add("next");
      } else {
        images[index + 1].classList.add("next");
      }
    } else if (e.target.classList.contains("btn-prev")) {
      //Current image
      images[index].classList.remove("active");
      images[index].classList.add("next");
      // next image css removed
      if (index >= images.length - 1) {
        images[0].classList.remove("next");
      } else {
        images[index + 1].classList.remove("next");
      }

      // Prev image
      index--;
      if (index < 0) {
        index = images.length - 1;
      }
      images[index].classList.remove("prev");
      images[index].classList.add("active");

      // Next image
      if (index === 0) {
        images[images.length - 1].classList.remove("next");
        images[images.length - 1].classList.add("prev");
      } else {
        images[index - 1].classList.remove("next");
        images[index - 1].classList.add("prev");
      }
    }
  })
);
