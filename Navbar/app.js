const toggleBtn = document.getElementById('btn')
const menu = document.getElementById('menu-list')
const navBar = document.querySelector('.nav-bar')

if (document.querySelector('body').style.maxWidth >= '800px'){
    menu.classList.remove('links')
}

toggleBtn.addEventListener('click', function(){
    // if (menu.classList[0] === 'menu') {
        //     menu.classList.remove('menu')
        //     menu.classList.add('links')
        // }
        // if (menu.classList[0] === 'links') {
            //     menu.classList.remove('links')
            //     menu.classList.add('menu')
            // }
            menu.classList.toggle('links')
            if (menu.classList.contains('links')){
                menu.classList.remove('menu')
                navBar.style.boxShadow = 'none'
            }
            if (menu.classList.length === 0) {
                menu.classList.add('menu')
                navBar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)'
            }
            // console.log(menu.classList)
})