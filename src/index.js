import './style.css';

// const todosList = (() => {
//     let todoItems = []
//     return {
//         todoItems
//     }
// })()

let todoItems = [];

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
    var inputs = document.querySelectorAll("input");

  for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = ""
      if (inputs[i].className === 'submit') {
        inputs[i].value = '+ New Todo'
      } else if (inputs[i].className === 'submitProject') {
        inputs[i].value = '+ New Project'
      }

}
  }
let addFormInputs = () => {
  preventDefault();
    var formData = new FormData(form);
    var todoFactory2 = {};
    for (var [key, value] of formData.entries()) {
      todoFactory2[key] = value;
      console.log(todoFactory2[key])
    }

}


const form = document.querySelector('.form')
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(form);
    var todoFactory2 = {};
    for (var [key, value] of formData.entries()) {
      todoFactory2[key] = value;
      console.log(todoFactory2[key])
    }

    todoItems.push(todoFactory2)
  const list = document.querySelector('.list')
  const todo = document.createElement('div')
    todo.textContent = todoFactory2.title
    list.appendChild(todo)
    hideForm()
    clearForm()

    return {
      todoFactory2
    }
  });

  const form2 = document.querySelector('.form2')
  form2.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(form2);
    var todoFactory2 = {};
    for (var [key, value] of formData.entries()) {
      todoFactory2[key] = value;
    }

  const projects = document.querySelector('.projects')
  const project = document.createElement('div')
    project.textContent = todoFactory2.title
    project.className = 'project'
    projects.appendChild(project)
    console.log('project')
    console.log(todoFactory2)
    todoItems.push(todoFactory2)
    hideForm2()
    clearForm()
  });





const newProject = document.querySelector('.newProject')
const taskText = document.querySelector('.taskText')
const newTodo = document.querySelector('.newTodo')
newTodo.addEventListener('click', ()=> {
    console.log('test')
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
    todosHeader.textContent = 'Project name'
    list.appendChild(todosHeader)
myArray.forEach(function(item, index) {
  console.log(item.dueDate);
  if (item.title === 'fog') {
    // console.log(item.title)
    // console.log('hello')
    const todo = document.createElement('div')
  todo.textContent = item.title
  list.appendChild(todo)

  }
});
console.log('working on it')
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
    todosHeader.textContent = div.textContent
  });
  console.log('hello parent')
});


  }
});
