const text = document.querySelector('.hero__text');

let autoText = "some random text";
let count = 1;

setInterval(() => {
    text.textContent = autoText.slice(0,count);
    count = count >= autoText.length ? 1 : (count + 1); 
}, [500])