const buttons = document.querySelectorAll('button')
const btnContainer = document.querySelector('.btn-container')
const tabSec = document.querySelectorAll('.tabs-sec')






btnContainer.addEventListener('click', function(e){
    
    const id = e.target.dataset.id
    // console.log(id)
    const element = document.getElementById(id)
    // console.log(element)
    buttons.forEach(function(btn){
        btn.classList.remove('active')
    })
    e.target.classList.add('active')

    // displaying each heading articles
    tabSec.forEach(function(tabsec){
        tabsec.setAttribute('class', 'action')

    })
    element.removeAttribute('class')
    
})
