import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async(e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const data = new FormData(todoForm);
    const newTodoInput = data.get('todo');
    console.log(newTodoInput);
    const newTodo = await createTodo(newTodoInput);
    return console.log(newTodo);
});

async function displayTodos() {
    // fetch the todos
    const todos = await getTodos();
    // display the list of todos
    for (let todo of todos) {
        const todoEl = renderTodo(todo);
        todosEl.append(todoEl);
    }
    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load
window.addEventListener('load', async() => {
    displayTodos();
})

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos

    // then refetch and display the updated list of todos
});
