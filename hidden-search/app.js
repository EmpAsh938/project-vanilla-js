const search = document.querySelector('i');
const input = document.querySelector('.search__input');

function activeInput(){
    input.classList.toggle('active');
}

search.addEventListener('click', activeInput);