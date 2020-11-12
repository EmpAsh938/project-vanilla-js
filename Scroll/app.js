const menuBtn = document.querySelector('.menu')
const menus = document.querySelector('ul')

menuBtn.addEventListener('click', function(){
    if (menus.style.display === 'none') {
        menus.style.display = 'block'
    } else {
        menus.style.display = 'none'
    }

})

// scroll appear

// top scroll button

const topScroll = document.querySelector('.top-scroll')
const navBar = document.querySelector('nav')

window.addEventListener('scroll', function(){
    const navBarHeight = navBar.getBoundingClientRect().height
    // console.log(navBarHeight)
    // console.log(window.pageYOffset)
    if ( window.pageYOffset > navBarHeight) {
        navBar.classList.add('fixed-navbar')
    } else {
        navBar.classList.remove('fixed-navbar')
    }
    if ( window.pageYOffset > 800) {
        topScroll.style.visibility = 'visible'
    } else {
        topScroll.style.visibility = 'hidden'
        
    }
})


// smooth scroll for links

const links = document.querySelectorAll('.links-scroll')

links.forEach(link => {
    link.addEventListener
    ('click', function(e){
        e.preventDefault()        
        let correspond_id = e.currentTarget.getAttribute('href').slice(1)

        const navBarHeight = navBar.getBoundingClientRect().height

        let position;
        if (navBar.classList.contains('fixed-navBar')) {
            position = document.getElementById(correspond_id).offsetTop
        } else {
            position = document.getElementById(correspond_id).offsetTop - navBarHeight
        }
        

        
        // console.log(position)
        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth'
        })
        menus.style.display = 'none'

    })
})
