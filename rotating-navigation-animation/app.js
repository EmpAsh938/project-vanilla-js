const button = document.querySelectorAll('.button button');
const btnContainer = document.querySelector('.button');
const articleContainer = document.querySelector('.article');

function animateArticle(param) {
    console.log(menuLinks);
    if (param === 'active') {
        btnContainer.classList.add('active');
        articleContainer.classList.add('move');
    } else if (param === 'close') {
        btnContainer.classList.remove('active');
        articleContainer.classList.remove('move');
    }
}

button.forEach(b => b.addEventListener('click', (e) => {
    let t = e.target;
    if ((t.classList.contains('active-btn')) || (t.parentElement.classList.contains('active-btn'))){
        animateArticle('active');
    } else if ((t.classList.contains('close-btn')) || (t.parentElement.classList.contains('close-btn'))){
        animateArticle('close');
    }
}))