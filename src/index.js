import './style.css';

// const todosList = (() => {
//     let todoItems = []
//     return {
//         todoItems
//     }
// })()

let todoItems = [];
let allProjects = [];

const todoFactory = ((title, description, dueDate, priority,project, notes,complete) => {
title,
description,
dueDate,
priority,
project,
notes,
complete
return {
    title,
    description,
    dueDate,
    priority,
    notes
}
})

const task1 = todoFactory ('trash', 'take it out', '9/2/2021', 'high', 'testing')
const task2 = todoFactory ('eat', 'take it out', '9/3/2021', 'high', 'testing')
const task3 = todoFactory ('sleep', 'take it out', '9/4/2021', 'high', 'testing')
const task4 = todoFactory ('repeat', 'take it out', '9/5/2021', 'high', 'testing')
// console.log(todosList)
console.log(todoItems)
todoItems.push(task1)
todoItems.push(task2)
todoItems.push(task3)
todoItems.push(task4)
// console.log(todosList)
console.log(todoItems)


const makeProject = ( (title) => {
    title
    return {
        getTitle: () => title,
    }
})

let showForm = () => {
    document.getElementById("myForm").style.display = "block";
  }
let hideForm = () => {
    document.getElementById("myForm").style.display = "none";
  }
  let showForm2 = () => {
    document.getElementById("myForm2").style.display = "block";
  }
let hideForm2 = () => {
    document.getElementById("myForm2").style.display = "none";
  }

  let clearForm = () => {
    let inputs = document.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = ""
      if (inputs[i].className === 'submit') {
        inputs[i].value = '+ New Todo'
      } else if (inputs[i].className === 'submitProject') {
        inputs[i].value = '+ New Project'
      }

}
  }
  let addFormInputs = () => {
    let formData = new FormData(form);
    let todoFactory2 = {};
    for (let [key, value] of formData.entries()) {
      todoFactory2[key] = value;
      console.log(todoFactory2[key])
    }
    if (allProjects) {
      // todoFactory2.project = 'Not Specified'
    }
    todoItems.push(todoFactory2)
    const list = document.querySelector('.list')
    const todo = document.createElement('div')
      todo.textContent = todoFactory2.title
      list.appendChild(todo)

  const divs = document.querySelectorAll('.project');
  divs.forEach(div => {
      if (div.classList.contains('active')) {
        console.log('The div is active');
        console.log(div)
        console.log(div.textContent)
        todoFactory2.project = div.textContent
      // } else {
      //   console.log('The div is not active');
      //   todoFactory2.project = 'Not Specified'
       } })

    return todoFactory2;
}
let addForm2Inputs = () => {
  let formData = new FormData(form2);
  let todoFactory2 = {};
  for (let [key, value] of formData.entries()) {
    todoFactory2[key] = value;
    console.log(todoFactory2[key])
  }
  allProjects.push(todoFactory2)
  const projects = document.querySelector('.projects')
  const project = document.createElement('div')
    project.textContent = todoFactory2.title
    let returnedTodoFactory2 = addFormInputs();
    console.log(returnedTodoFactory2)
    todoFactory2.project = todoFactory2.title

    project.className = 'project'
    projects.appendChild(project)
    todoItems.push(todoFactory2)
  return todoFactory2;
}

const form = document.querySelector('.form')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let returnedTodoFactory2 = addFormInputs();
  hideForm()
  clearForm()
  console.log(returnedTodoFactory2)
  console.log(allProjects)
  console.log(todoItems)
})
const form2 = document.querySelector('.form2')
form2.addEventListener("submit", function(event) {
  event.preventDefault();
  let returnedTodoFactory2 = addForm2Inputs();
  hideForm2()
  clearForm()
  console.log(returnedTodoFactory2)
  console.log(allProjects)
});


const newProject = document.querySelector('.newProject')
const taskText = document.querySelector('.taskText')
const newTodo = document.querySelector('.newTodo')
newTodo.addEventListener('click', ()=> {
    console.log('new todo')
    showForm()
})
newProject.addEventListener('click', ()=> {
    console.log('testing')
    showForm2()
})
const school = makeProject ('school')
const finance = makeProject ('finance')
const personal = makeProject ('personal')
const social = makeProject ('social')

const list = document.querySelector('.list')
const todosHeader = document.querySelector('.todosHeader')


let showTasksOnPage = () => {
    let myArray = todoItems
    console.log(myArray)
    console.log('hi')
    list.textContent = ''
    todosHeader.textContent = 'All Tasks'
    list.appendChild(todosHeader)

myArray.forEach(function(item, index) {
  console.log(item.title);
const todo = document.createElement('div')
  todo.textContent = item.title
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
    console.log(item.title)
    console.log('hello')
    const todo = document.createElement('div')
  todo.textContent = item.title
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
    console.log(item.title)
    console.log('hello')
    const todo = document.createElement('div')
  todo.textContent = item.title
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
    console.log(item.title)
    console.log('hello')
    const todo = document.createElement('div')
  todo.textContent = item.title
  list.appendChild(todo)

  }
});
}

let showsTaskforProject = () => {
  let myArray = todoItems
    list.textContent = ''
    list.appendChild(todosHeader)
myArray.forEach(function(item, index) {
  console.log(item.dueDate);
  if (item.project === 'fog') {
    // console.log(item.title)
    // console.log('hello')
    const todo = document.createElement('div')
  todo.textContent = item.title
  list.appendChild(todo)
  let returnedTodoFactory2 = addFormInputs();
  console.log(returnedTodoFactory2)
  // console.log(todoFactory2)
  }
});
console.log('working on it')
const divs = document.querySelectorAll('.project');
  divs.forEach(div => {
      if (div.classList.contains('active')) {
  console.log('found one')
  div.classList.remove('active')
} })



}


const week = document.querySelector('.week')
week.addEventListener('click', () => {
  showsTaskforWeek()
})
const home = document.querySelector('.home')
home.addEventListener('click', () => {
  showTasksOnPage()
})
const month = document.querySelector('.month')
month.addEventListener('click', () => {
  showsTaskforMonth()
})
const today = document.querySelector('.today')
today.addEventListener('click', () => {
  showsTaskforToday()
})


// const project = document.querySelectorAll('.project')




const parent = document.querySelector('.projects');


parent.addEventListener('click', function(event) {
  if (event.target.matches('.project')) {
    const divs = document.querySelectorAll('.project');
  divs.forEach(div => {
  div.addEventListener('click', () =>
  {
    showsTaskforProject()
    div.classList.add('active');
    todosHeader.textContent = div.textContent


  });

  // console.log('hello parent')
  // let returnedTodoFactory2 = addFormInputs();
  // console.log(returnedTodoFactory2)

  // console.log(todoFactory2)
});


  }
});
