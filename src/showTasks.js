
import { todoItems } from './index';

// console.log(todoItems)

export let showTasksOnPage = () => {
    list.textContent = ''
      todosHeader.textContent = 'All Tasks'
      list.appendChild(todosHeader)
      let myArray = todoItems
  myArray.forEach(function(item, index) {
    // console.log(item.title);
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    // checkBox.name = 'group_name';
    // checkBox.value = 'radio_value';
  const title = document.createElement('div');
  title.textContent = item.title;
  const date = document.createElement('div');
  date.textContent = item.dueDate;
  const editBtn = document.createElement('div');
  editBtn.className = 'editBtn'
  editBtn.textContent = 'edit';
  const deleteBtn = document.createElement('div');
  deleteBtn.className = 'deleteBtn'
  deleteBtn.textContent = 'X';
  // checkBox.checked = false;
  const list = document.querySelector('.list')
  const todo = document.createElement('div')
  todo.className = 'todo'

    todo.appendChild(checkBox)
    todo.appendChild(title)
    todo.appendChild(date)
    todo.appendChild(editBtn)
    todo.appendChild(deleteBtn)
    list.appendChild(todo)
  });
  }
  showTasksOnPage()

  let showsTaskforWeek = () => {
    let myArray = todoItems
      list.textContent = ''
      todosHeader.textContent = 'Due this Week'
      list.appendChild(todosHeader)
  myArray.forEach(function(item, index) {
    console.log(item.dueDate);
    if (item.title === 'trash') {
      const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'group_name';
    checkBox.value = 'radio_value';
  const title = document.createElement('div');
  title.textContent = item.title;
  const date = document.createElement('div');
  date.textContent = item.dueDate;
  const editBtn = document.createElement('div');
  editBtn.textContent = 'edit';
  const deleteBtn = document.createElement('div');
  deleteBtn.className = 'deleteBtn'
  deleteBtn.textContent = 'X';
  checkBox.checked = false;
  const list = document.querySelector('.list')
  const todo = document.createElement('div')
  todo.className = 'todo'

    todo.appendChild(checkBox)
    todo.appendChild(title)
    todo.appendChild(date)
    todo.appendChild(editBtn)
    todo.appendChild(deleteBtn)
    list.appendChild(todo)
  list.appendChild(todo)
    }
  });
  return {
    showsTaskforWeek
  }

  }

  let showsTaskforToday = () => {
    let myArray = todoItems
      list.textContent = ''
      todosHeader.textContent = 'Due Today'
      list.appendChild(todosHeader)
  myArray.forEach(function(item, index) {
    console.log(item.dueDate);
    if (item.title === 'boy') {
      const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'group_name';
    checkBox.value = 'radio_value';
  const title = document.createElement('div');
  title.textContent = item.title;
  const date = document.createElement('div');
  date.textContent = item.dueDate;
  const editBtn = document.createElement('div');
  editBtn.textContent = 'edit';
  const deleteBtn = document.createElement('div');
  deleteBtn.textContent = 'X';
  checkBox.checked = false;
  const list = document.querySelector('.list')
  const todo = document.createElement('div')
  todo.className = 'todo'

    todo.appendChild(checkBox)
    todo.appendChild(title)
    todo.appendChild(date)
    todo.appendChild(editBtn)
    todo.appendChild(deleteBtn)
    list.appendChild(todo)
  list.appendChild(todo)
    }
  });

  }

  let showsTaskforMonth = () => {
    let myArray = todoItems
      list.textContent = ''
      todosHeader.textContent = 'Due this Month'
      list.appendChild(todosHeader)
  myArray.forEach(function(item, index) {
    console.log(item.dueDate);
    if (item.title === 'fog') {
      const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'group_name';
    checkBox.value = 'radio_value';
  const title = document.createElement('div');
  title.textContent = item.title;
  const date = document.createElement('div');
  date.textContent = item.dueDate;
  const editBtn = document.createElement('div');
  editBtn.className = 'editBtn'
  editBtn.textContent = 'edit';
  const deleteBtn = document.createElement('div');
  deleteBtn.className = 'deleteBtn'
  deleteBtn.textContent = 'X';
  checkBox.checked = false;
  const list = document.querySelector('.list')
  const todo = document.createElement('div')
  todo.className = 'todo'

    todo.appendChild(checkBox)
    todo.appendChild(title)
    todo.appendChild(date)
    todo.appendChild(editBtn)
    todo.appendChild(deleteBtn)
    list.appendChild(todo)
  list.appendChild(todo)
    }
  });
  }

  let showsTaskforProject = () => {
    let myArray = todoItems
    const div = document.querySelector('.active')
      list.textContent = ''
      list.appendChild(todosHeader)
  myArray.forEach(function(item, index) {

    if (item.project === div.textContent) {
      const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'group_name';
    checkBox.value = 'radio_value';
  const title = document.createElement('div');
  title.textContent = item.title;
  const date = document.createElement('div');
  date.textContent = item.dueDate;
  const editBtn = document.createElement('div');
  editBtn.textContent = 'edit';
  const deleteBtn = document.createElement('div');
  deleteBtn.className = 'deleteBtn'
  deleteBtn.textContent = 'X';
  checkBox.checked = false;
  const list = document.querySelector('.list')
  const todo = document.createElement('div')
  todo.className = 'todo'

    todo.appendChild(checkBox)
    todo.appendChild(title)
    todo.appendChild(date)
    todo.appendChild(editBtn)
    todo.appendChild(deleteBtn)
    list.appendChild(todo)
  list.appendChild(todo)
    }
  });
  const divs = document.querySelectorAll('.project');
    divs.forEach(div => {
    if (div.classList.contains('active')) {
    div.classList.remove('active')
  } })

  }
