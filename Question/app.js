const buttons = document.querySelectorAll('button')


buttons.forEach(button =>
    button.addEventListener('click', function(){
        if (button.firstChild.classList.contains('fa-plus')) {
            button.firstChild.classList.remove('fa-plus')
            button.firstChild.classList.add('fa-minus')
            button.parentElement.nextElementSibling.style.display = 'block'
        } else if (button.firstChild.classList.contains('fa-minus')) {
            button.firstChild.classList.add('fa-plus')
            button.firstChild.classList.remove('fa-minus')
            button.parentElement.nextElementSibling.style.display = 'none'
        }
        
        
        
    }))
    