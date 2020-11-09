const btn = document.querySelector('button')
const video = document.querySelector('.video-container')
const preloader = document.querySelector('.preloader')

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader')
})

btn.addEventListener('click', function(){
    if (!btn.lastElementChild.classList.contains('slide')) {
        btn.lastElementChild.classList.add('slide')
        video.play()
    } else {
        btn.lastElementChild.classList.remove('slide')
        video.pause()
    }
})

