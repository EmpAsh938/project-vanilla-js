import { img } from "./images.js";

const hero = document.querySelector('.hero');
const heroContainer = document.querySelectorAll('.hero__container');


function loadImages() {
    heroContainer.forEach((hc, id) => {
        let pic = document.createElement('img');
        let title = document.createElement('h3');
        pic.src = img[id].path;
        title.textContent = img[id].title;
        hc.appendChild(pic);
        hc.appendChild(title);
        if (id === 0) {
            hc.classList.add('active');
            hc.lastElementChild.classList.add('show');
        }
    })
}

function expandCards(e){
    let target = e.target.parentElement;
    if (target.classList.contains('hero__container')) {
        heroContainer.forEach(hc => {
            hc.lastElementChild.classList.remove('show');
            hc.classList.remove('active');
        })
        target.classList.add('active');
        target.lastElementChild.classList.add('show');
    }
}

window.addEventListener('load', loadImages);
hero.addEventListener('click', expandCards);