const colors = ['green', 'red', 'rgba(133,122,200)','#f15025'];


// changing the backgroundColor 
const btn = document.getElementById('btn-container')
const span = document.querySelector('.color')

btn.addEventListener('click', function (){
    colorIndex = getRandomNum()
    document.body.style.backgroundColor = colors[colorIndex]
    span.textContent = colors[colorIndex]
})

function getRandomNum () {
    return Math.floor(Math.random()*colors.length)
}

