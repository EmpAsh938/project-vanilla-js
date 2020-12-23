const image = [
  {
    id: 1,
    name: "./images/pic1.jpg",
    text: "Hills",
  },
  {
    id: 2,
    name: "./images/pic2.jpg",
    text: "city",
  },
  {
    id: 3,
    name: "./images/pic3.jpg",
    text: "mountain with blue sky",
  },
  {
    id: 4,
    name: "./images/pic4.jpg",
    text: "paradise",
  },
];

const wrapper = document.querySelector(".carousel-wrapper");
const button = document.querySelectorAll("button");

// inserting images inside dom
wrapper.innerHTML = image.map((item, index) => {
  const { id, name, text } = item;
  let position = "nextSlide";
  if (index === 0) {
    position = "activeSlide";
  }
  if (index === image.length - 1) {
    position = "lastSlide";
  }

  return `<img class=${position} src=${name} alt=${text} />`;
}).join("");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-arrow-right")) {
      slider();
    }
    if (e.target.classList.contains("fa-arrow-left")) {
      slider("prev");
    }
  });
});

const slider = (type) => {
  const active = document.querySelector(".activeSlide");
  const last = document.querySelector(".lastSlide");
  let next = active.nextElementSibling;

  if (!next) {
    next = wrapper.firstElementChild;
  }
  active.classList.remove("activeSlide");
  last.classList.remove("lastSlide");
  next.classList.remove("nextSlide");

  if (type === "prev") {
    active.classList.add("nextSlide")
    last.classList.add("activeSlide")
    next = last.previousElementSibling
    if (!next) {
      next = wrapper.lastElementChild
    }

    next.classList.remove("nextSlide")
    next.classList.add("lastSlide")
    return;
  }

  active.classList.add("lastSlide");
  last.classList.add("nextSlide");
  next.classList.add("activeSlide");
};


// const customSlider = () => {
//     const active = document.querySelector('.activeSlide')
//     const next = document.querySelector('.lastSlide')

//     let last = active.nextElementSibling

//     if (!last) {
//         last = wrapper.lastElementChild
//     }
//     active.classList.remove('activeSlide')
//     last.classList.remove('nextSlide')
//     next.classList.remove('lastSlide')

//     active.classList.add('nextSlide')
//     last.classList.add('lastSlide')
//     next.classList.add('activeSlide')
// }