'use strict'
// geta data from local storage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos');

  try {
    return todosJSON ? JSON.parse(todosJSON): [];
  } catch (e) {
    return []
  }

  // if (todosJSON) {
  //   return JSON.parse(todosJSON);
  // } else {
  //   return [];
  // }
};

// save todos
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// remove todo by id
const removeItem = function (id) {
  const itemIndex = todos.findIndex((data) => {
    return data.id === id;
  });
  console.log(itemIndex);
  
  if (itemIndex > -1) {
    todos.splice(itemIndex, 1);
  }
};



const toggleTodo = function (id) {
  const todo = todos.find( data =>{
    return data.id === id
  })
  const pokus = todos
  console.log(pokus[0]);
  console.log(pokus[0].text);
  pokus[0].text = 'pokus2'

  const pokus1 =  JSON.parse(JSON.stringify(todos));
  console.log(pokus1[0]);
  console.log(pokus1[0].text);
  pokus1[2].text = 'pokus9'

  console.log(pokus);
  console.log(pokus1);
  console.log(todos);

    
  todo.completed = !todo.completed
}

// render todos
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function (todo) {
    document.querySelector('#todos').appendChild(generateDOM(todo));
  });
};

// get the DOM element
const generateDOM = function (todo) {
  const todoEl = document.createElement('div');
  const checkBox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  // setup the check box
  checkBox.setAttribute('type', 'checkbox');  
  checkBox.checked = todo.completed
  todoEl.appendChild(checkBox);
  checkBox.addEventListener('change', ()=> {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // setup todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // setup button
  removeButton.textContent = 'x';
  removeButton.addEventListener('click', () => {
    removeItem(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  todoEl.appendChild(removeButton);

  return todoEl;
};

// generate DOM
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
