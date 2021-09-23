const button = document.querySelector('button');
const span = document.querySelector('span');
const section = document.querySelector('.main-content');

const colorAlpha = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function changeBackground(){
    section.style.backgroundColor = getColor();
}

function getColor() {
    let randomColor = "#";
    for(let i=1;i<=6;i++){
        let randomChooser = Math.floor(Math.random() * colorAlpha.length);
        randomColor += colorAlpha[randomChooser];
    }
    // console.log(randomColor);
    return randomColor

}

button.addEventListener('click', changeBackground);