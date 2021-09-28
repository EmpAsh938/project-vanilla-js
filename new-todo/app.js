let todos = {
    ongoing: [],
    completed: [],
    due: [],
}

// Localstorage Key
const LSK = "todo-list"

const input = document.querySelector('.input-text')
const selectOption = document.querySelector('select')
const submitForm = document.querySelector('form')
const todosList = document.querySelectorAll('.todos-list')
const formButton = document.querySelector('.form-btn')
const alert = document.querySelector('.alert-msg')
let editID;
let editArr;


// Add todos and edit 
function addTodos(e) {
    e.preventDefault()
    if (!input.value) {
        alertMessage("Please fill the input")
        return
    }
    if (input.value && formButton.classList.contains('add-btn')){
        const selector = selectOption.value
        const selectorValue = {id: new Date().getTime().toString(),text: input.value, isChecked: false}
        todos[selector].push(selectorValue)
    }
    if (input.value && formButton.classList.contains('edit-btn')){
        // todos
        editInAction();
        formButton.classList.add('add-btn')
        formButton.classList.remove('edit-btn')
        formButton.textContent = "add"
    }
    localStorage.setItem(LSK, JSON.stringify(todos))

    input.value = "";
    selectOption.value = "due"
    loadTodos();
}

// load todos at every array update
function loadTodos(){
    
    todosList.forEach(tl => {
        for(const [key, value] of Object.entries(todos)) {
            {
                formatTodos(key);
                // console.log(`${key} ${value}`)
            }
        }
    })
    localStorage.setItem(LSK, JSON.stringify(todos))
}

// Inject todo items to html

function formatTodos(param) {
    let formattedTodos 
    if (todos[param].length <=0) {
        formattedTodos = `
        <p>No todos to display</p>
        `
    } else {
        formattedTodos = todos[param].map(item => {
            return `
            <li class="list-item" data-id=${item.id}>
            <input type="checkbox" class=${param === "completed" ? "hide-checkbox": "checkbox-todo"}>
            <p>${item.text}</p>
            <button class="btn edit-btn">Edit</button>
            <button class="btn remove-btn">Remove</button>
            </li>
            `
        }).join("")
        removeButton = document.querySelectorAll('.remove-btn');
    }
    document.querySelector("."+param).innerHTML = formattedTodos
}

// remove each todos

function removeTodo(id, arr) {
    const newArr = todos[arr].filter(item => item.id != id);
    todos[arr] = [...newArr]
    loadTodos()
    alertMessage("Todo removed")
}

// edit todos (get old value and get ready for complete edit)
function editTodo(id, arr) {
    editArr = arr;
    editID = id;
    const getTarget = todos[arr].filter(item => item.id == id)
    // console.log(getTarget)
    input.value = getTarget[0].text
    selectOption.value = arr
    // add css for active cursor
}

// edit by renaming old todos and also for modifying select option 
function editInAction() {
    // with constant select option
    if(editArr !== selectOption.value) {
        // removing old item
        // const newArr = todos[editArr].filter(item => item.id != editID);
        // todos[editArr] = [...newArr]
        removeTodo(editID, editArr)
        const selector = selectOption.value
        const selectorValue = {id: new Date().getTime().toString(),text: input.value, isChecked: false}
        todos[selector].push(selectorValue)
    } else {
    todos[editArr].forEach(item => {
        if (item.id === editID) {
            item.id = new Date().getTime().toString()
            item.text = input.value;
        }
    })
    }
    alertMessage("Todo edited")
}

function runCheck(id, arr) {
    // console.log(todos[arr].find(item => item.id === id))
    const itemCheck = todos[arr].find(item => item.id === id)
    switch (arr) {
        case "ongoing":
            todos.completed.push(itemCheck)
            removeTodo(id, arr);
            alertMessage("Todo moved to completed")
            break;
            case "due":
                todos.ongoing.push(itemCheck)
                removeTodo(id, arr);
                alertMessage("Todo moved to ongoing")
            break;
        default:
            break;
    }

} 


function alertMessage(msg) {
    let timer;
    alert.textContent = msg;
    alert.classList.add('alert-active')
    clearTimeout(timer)
    timer = setTimeout( () => {
        alert.classList.remove('alert-active');
    }, 2000)
}


window.addEventListener("DOMContentLoaded", () => {
    const getTodosLSK = JSON.parse(localStorage.getItem(LSK));
    if (getTodosLSK) {
        todos = JSON.parse(JSON.stringify(getTodosLSK))
    }
    loadTodos()
})
submitForm.addEventListener('submit', addTodos);
todosList.forEach(tl => tl.addEventListener('click', (e) => {
    const id = e.target.parentElement.dataset.id;
    const arr = e.target.parentElement.parentElement.className.split(" ")[1];
    if(e.target.classList.contains('remove-btn')){
        removeTodo(id, arr);
    }
    if(e.target.classList.contains('edit-btn')){
        formButton.classList.remove('add-btn')
        formButton.classList.add('edit-btn')
        formButton.textContent = "edit"
        editTodo(id, arr);
    }
    if(e.target.classList.contains('checkbox-todo')) {
        // watch out for checkboxes
        runCheck(id, arr);
    }
}))

