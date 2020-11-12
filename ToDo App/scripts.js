const inputValue = document.querySelector('input')
const submitBtn = document.querySelector('.submit-btn')
let listDisplay = document.querySelector('.list')
const section = document.querySelector('section')
const clearBtn = document.querySelector('.clear-btn')
const msg_alert = document.querySelector('.msg-alert')

function showList(param){
    // creating new div
    const newDiv = document.createElement('div')
    newDiv.classList.add('newListDiv')
    // creating new li
    const li = document.createElement('li')
    li.innerText = param
    // creating new btn container
    const btnDiv = document.createElement('div')
    btnDiv.classList.add('btn-container')
    // creating btns
    const editBtn = document.createElement('button')
    editBtn.classList.add('editBtn', 'butn')
    editBtn.innerText = 'edit'
    const removebtn = document.createElement('button')
    removebtn.classList.add('removeBtn', 'butn')
    removebtn.innerText = 'remove'
    btnDiv.appendChild(removebtn)
    btnDiv.appendChild(editBtn)
    newDiv.appendChild(btnDiv) 
    newDiv.appendChild(li)
    listDisplay.appendChild(newDiv)
}



const listItems = document.querySelector('.list-items')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    clearBtn.style.display = 'block'
    listDisplay = document.querySelector('.list')
    if (!listDisplay) {
        const reAdd = document.createElement('ul')
        reAdd.classList.add('list')
        listItems.appendChild(reAdd)
    }
    if (!inputValue.value) {
        msg(inputValue.value)
    } else if (!submitBtn.classList.contains('editSubBtn')){
        listDisplay = document.querySelector('.list')
        listDisplay.style.display = 'block'
        showList(inputValue.value)
        msg(inputValue.value)
        inputValue.value = ''
    }
})

// remove/ edit  buttons
listItems.addEventListener('click',function(e){
    // console.log(e.target)
    // remove btn
    if (e.target.classList.contains('removeBtn')) {


        // e.target.remove()
        msg(e.target)
        e.target.parentElement.parentElement.remove()


        // edit btn
    } else if (e.target.classList.contains('editBtn')){
        let listContent = e.target.parentElement.nextSibling.textContent
        inputValue.value = listContent;
        submitBtn.classList.add('editSubBtn')
        submitBtn.textContent = 'edit'
        const edit = document.querySelector('.editSubBtn')
        edit.addEventListener('click', function(){
            if (e.target.parentElement.nextSibling.textContent === listContent) {
                msg(e.target)
                e.target.parentElement.nextSibling.textContent = inputValue.value
                inputValue.value = ''
                edit.classList.remove('editSubBtn')
                submitBtn.textContent = 'submit'
            } 
            // inputValue.value = e.target.parentElement.nextSibling.textContent
        })
        // inputValue.value = e.target.parentElement.nextSibling.textContent;
    }
})


// clear-btn

clearBtn.addEventListener('click', function(){
    // console.log(listDisplay.childNodes)
    msg(clearBtn)
    listDisplay.remove()
    clearBtn.style.display = 'none'
})


// toggling the clear btn display
section.addEventListener('click', function(){
    listDisplay = document.querySelector('.list')
    // console.log(listDisplay.firstElementChild)
    
    if (!listDisplay || !listDisplay.firstElementChild){
        clearBtn.style.display = 'none'
    }
})


function msg(param){
    // console.log(param)
    let timer;
    clearTimeout(timer)
    msg_alert.style.visibility = 'visible'
    if (!param){
        msg_alert.style.color = 'red'
        msg_alert.textContent = 'Please Enter Value!'
    } else if (param === inputValue.value){
        msg_alert.style.color = 'green'
        msg_alert.textContent = 'Item Added!'
    } else if (param.classList.contains('removeBtn')){
        msg_alert.style.color = 'red'
        msg_alert.textContent = 'Item Removed!'
    } else if (param.classList.contains('editBtn')){
        msg_alert.style.color = 'green'
        msg_alert.textContent = 'Item Edited!'
    } else if (param.classList.contains('clear-btn')){
        msg_alert.style.color = 'red'
        msg_alert.textContent = 'Items Cleared!'
    }
    timer = setTimeout(() => {
        msg_alert.style.visibility = 'hidden'
    }, 1000);
}
