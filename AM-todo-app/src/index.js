import { getSavedTodos, saveTodos, updateTodoList } from './todo-functions';
import { renderTodos } from './views';
import { v4 as uuidv4 } from 'uuid';

let todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false,
};

renderTodos(todos, filters);


document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();
  let id = uuidv4();
  if (text.length > 0) {
    updateTodoList(id, text, 'false');
    saveTodos();
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
  }
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

export { filters };
