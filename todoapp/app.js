// console.log('test')

// TASK GOALS
// fetch todos from api
// render 10 of todo list in (ul)
// take value of input and add it to todo list
// add (x) button to each todo list item
// add click event to (x) button that deletes the appended todo


// Pre
//// create input
//// create button
//// make sure that there is a list in the dom
const todoListContainer = document.querySelector('.todoListContainer');
let todoList = todoListContainer.querySelector('ul.todoList');

if (!todoList) {
    const ul = createElement('ul', {class: 'todoList'})
    todoListContainer.appendChild(ul)
    todoList = ul;
}


// TASK STEPS
// create function to fetch todo list
(async function fetchTodos() {
    const response = await fetch('http://jsonplaceholder.typicode.com/todos/')
    const fetchedTodos = await response.json()
    const todoSlice = fetchedTodos.slice(0, 10)
    todoSlice.forEach(todo => renderTodo(todoList, todo))
})()
//// create function that creates dom elements
// create function to render todo
function renderTodo(todoList, todo) {

    const li = createElement('li', {
        class: 'todoListItem',
    }, todo.title)

    // => each todo item have it's own (x) button
    const xButton = createElement('button', {class: 'todoListItemAction'}, 'X')
    li.appendChild(xButton)
    
    xButton.addEventListener('click', () => {
        todoList.removeChild(li)
    })

    // append list item to todoList
    todoList.appendChild(li)
}

// add event listener to the button that takes input value and create a todo item with it

const formContainer = document.querySelector('.formContainer')
const input = formContainer.querySelector('#todoFormInput')
const button = formContainer.querySelector('#todoFormButton')

button.addEventListener('click', () => {
    const todo = {
        title: input.value
    }
    renderTodo(todoList, todo)

    input.value = ''
})





function createElement(tag, attributes, textContent) {
    const ele = document.createElement(tag);

    const attributesKeys = Object.keys(attributes);

    for (let key of attributesKeys) {
        ele.setAttribute(key, attributes[key])
    }

    if (textContent) {
        ele.textContent = textContent
    }

    return ele

}


