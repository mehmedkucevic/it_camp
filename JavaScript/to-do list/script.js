const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const searchInput = document.querySelector('#search-input');
const list = document.querySelector('#todo-list');

let todos = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText === '') return;
  const todo = {
    id: Date.now(),
    text: todoText
  };
  todos.push(todo);
  input.value = '';
  renderTodos();
});

searchInput.addEventListener('input', () => {
  renderTodos();
});

function renderTodos() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchTerm);
  });
  list.innerHTML = '';
  filteredTodos.forEach((todo) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo.text}</span>
      <button data-id="${todo.id}">Delete</button>
    </li>`;
    list.appendChild(li);
  });
}

