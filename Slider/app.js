const btnContainer = document.querySelector('.btn-container')
const images = document.querySelectorAll('.info')

let currentIndex = 0;
btnContainer.firstElementChild.classList.add('hide-btn')



btnContainer.addEventListener('click', function (e) {
    // console.log(e.target)
    if (e.target !== btnContainer) {
        // console.log(imageArr[currentIndex])
        btnContainer.firstElementChild.classList.remove('hide-btn')
        btnContainer.lastElementChild.classList.remove('hide-btn')
        
        if (e.target.classList.contains('prev-btn')) {
            imageArr[currentIndex].style.transform = 'translateX(100%)'
            currentIndex--
            // console.log(currentIndex)
        } else {
            // console.log('false')
            imageArr[currentIndex].style.transform = 'translateX(-100%)'
            currentIndex++
            // console.log(currentIndex)
        }
        if (currentIndex <= 0 ) {
            currentIndex = 0
            e.target.classList.add('hide-btn')
            // console.log(currentIndex)
        } else if (currentIndex === 3) {
            // currentIndex = 3
            e.target.classList.add('hide-btn')
        }
        // console.log(currentIndex)
        slideImages()
    } return
})


const imageArr = Array.from(images)

function slideImages() {
    // console.log(imageArr[currentIndex])
    imageArr[currentIndex].style.transform = 'translateX(0%)'

}
