import sublinks from './data.js'

// submenu
const nav = document.querySelector('nav')
const navItems = document.querySelectorAll('li')
const subMenu = document.querySelector('.submenu')
// menu
const menuLinks = document.querySelector('.menu-links')
// menu btns
const bar = document.querySelector('.bars')
const btnMenu = document.querySelector('.btn-menu')
const menuContainer = document.querySelector('.menu-container')


// button functionality

bar.addEventListener('click', () => {
    menuContainer.classList.add('menuDisplay')
    // menuContainer.style.transform = 'scale(1)'
})
btnMenu.firstElementChild.addEventListener('click', () => {
    menuContainer.classList.remove('menuDisplay')
    // menuContainer.style.transform = 'scale(0)'
})

// removing menu when screen width increases
window.addEventListener('resize', () => {
    // console.log(window.innerWidth)
    if (window.innerWidth > 800 && menuContainer.classList.contains('menuDisplay')) {
        menuContainer.classList.remove('menuDisplay')
        // menuContainer.style.transform = 'scale(0)'
    }
})



// menu items

menuLinks.innerHTML = sublinks.map(item => {
    // console.log(item)
    const { page, links } = item
    links.map(elem => {
    })
    return (
        `<div class="menu-items">
            <h3>${page}</h3>
            <div class="menu-itemlinks">
        ${links.map(elem => {
            const { label, icon, url } = elem
            return (`
            <a href=${url}><i class='${icon} i-menu'></i>${label}</a>
            `)
        }).join("")}
        </div></div>`
    )
}).join("")


// SubMenus


navItems.forEach(navItem => {

    const showSubmenu = (e) => {
        const bottom = e.currentTarget.getBoundingClientRect().bottom + 3
        const center = (e.currentTarget.getBoundingClientRect().right + e.currentTarget.getBoundingClientRect().left) / 2 - (subMenu.getBoundingClientRect().width) / 2
        // console.log(center)
        // console.log(e.currentTarget.getBoundingClientRect())
        // console.log(subMenu.getBoundingClientRect().width)
        if (e.target === navItem) {
            // console.log(e.target)
            subMenu.style.left = `${center}px`
            subMenu.style.top = `${bottom}px`

            let columns;
            
            subMenu.innerHTML = sublinks.map(item => {
                const { links, page } = item
                if (links.length === 3) {
                    columns = 'col-3'
                } else if (links.length > 3) {
                    columns = 'col-4'
                } else {
                    columns = 'col-2'
                }

                if (page === navItem.textContent.toLowerCase()) {
                    return (
                        `
                                <div class='submenu-header'>
                                <h3>${page}</h3>
                                <div class='submenu-items ${columns}'>${links.map(link => {
                            const { label, icon, url } = link
                            return (
                                `
                                        <a href=${url}><i class='${icon} i-menu'></i>${label}</a>
                                        `
                            )
                        }).join('')}</div></div>
                                `
                    )
                    // console.log(page)
                }
            }).join('')
        }
    }

    navItem.addEventListener('mousemove', (e)=>{
        showSubmenu(e)
        subMenu.style.display = 'block'
    })
    nav.addEventListener('mouseover', (e)=> {
        if (!e.currentTarget.classList.contains('item')) {
            subMenu.style.display = 'none'
        }
    })
    subMenu.addEventListener('mouseleave', () => {
        subMenu.style.display = 'none'
    })
})
