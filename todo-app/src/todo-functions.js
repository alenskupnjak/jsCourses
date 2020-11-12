// import {filters} from './index'
let todos;

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')    
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
    
    return todos
}

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        return todos
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        return todos
    }
}


const updateTodoList = (id,text,task) => {
    todos.push({id,text, task})
}


export {getSavedTodos, saveTodos, removeTodo, toggleTodo, updateTodoList }