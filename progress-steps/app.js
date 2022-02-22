const button = document.querySelectorAll('button');
const bar = document.querySelector('.hero__steps');
const highlighter = document.querySelector('.hero__highlighter');
const dots = document.querySelectorAll('.hero__dots');

let count = 1, progress = 0;
const calcBar = bar.getBoundingClientRect().width;

function runProgress(param){
    if (param === 'next') {
        count++;
        dots.forEach(d => {
            if (d.textContent == count) {
                d.classList.add('active-dots');
            }
        })
        if (count >= 4) {
            toggleButton('next', 'remove');
            count = 4;
        } else {
            toggleButton('prev', 'add')
        }
    } else if (param === 'prev') {
        dots.forEach(d => {
            if (d.textContent == count) {
                d.classList.remove('active-dots');
            }
        })
        count--;
        if (count <= 1) {
            toggleButton('prev', 'remove');
            count = 1;
        } else {
            toggleButton('next', 'add');
        }
    }
    progress = ((calcBar/3)* (count-1));
    highlighter.style.width = `${progress}px`;   
}

function toggleButton(val, type) {
    button.forEach(b => {
        let key = b.textContent.toLowerCase();
        if (key === val && type === 'remove') {
            b.style.visibility = 'hidden';
        } else if(key === val && type === 'add') {
            b.style.visibility = 'visible';
        }
    })
}

function mapDots() {
    dots.forEach(d => {
        let key = d.textContent;
        d.style.left = `${((100/3)*(key-1))}%`;
        if (parseInt(key) === 1) {
            d.classList.add('active-dots');
        }
    })
}

window.addEventListener('load', () => {
    mapDots();
    toggleButton('prev', 'remove');
});
button.forEach(b => b.addEventListener('click', (e) => {
    runProgress(e.target.textContent.toLowerCase());
}))



/*
    4 -> 100/3 * 4-1
    3 -> 100/3 * 3-1
    2 -> 100/3 * 2-1
    1 -> 100/3 * 1-1

    
*/