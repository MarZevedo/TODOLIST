const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function addTodo() {
  const todoText = input.value;
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      todoItem.classList.add('completed');
    } else {
      todoItem.classList.remove('completed');
    }
  });
  todoItem.appendChild(checkbox);

  const label = document.createElement('label');
  label.innerText = todoText;
  todoItem.appendChild(label);

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remover';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', function () {
    todoItem.remove();
  });
  todoItem.appendChild(removeBtn);

  list.appendChild(todoItem);
  input.value = '';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTodo();
});
document.getElementById('reload-button').addEventListener('click', function() {
    window.location.reload();
  });
  