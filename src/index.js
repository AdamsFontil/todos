import './style.css';

// const todosList = (() => {
//     let todoItems = []
//     return {
//         todoItems
//     }
// })()

let todoItems = [];

const todoFactory = ((title, description, dueDate, priority, notes,complete) => {
title,
description,
dueDate,
priority,
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
const task2 = todoFactory ('eat', 'take it out', '9/2/2021', 'high', 'testing')
const task3 = todoFactory ('sleep', 'take it out', '9/2/2021', 'high', 'testing')
const task4 = todoFactory ('repeat', 'take it out', '9/2/2021', 'high', 'testing')
// console.log(todosList)
// console.log(todoItems)
// todoItems.push(task1)
// todoItems.push(task2)
// todoItems.push(task3)
// todoItems.push(task4)
// console.log(todosList)
console.log(todoItems)


// console.log(task1)
// console.log(task1.getDescription())
// console.log(task1.getTitle())

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
  for (var i = 0; i < inputs.length - 1; i++) { // -1 so that the button isn't selected
      inputs[i].value = "";
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
    console.log(todoFactory2);
    // console.log(todoFactory2.title);
    todoItems.push(todoFactory2)
    // console.log(todoItems)

  const list = document.querySelector('.list')
  const todo = document.createElement('div')
    todo.textContent = todoFactory2.title
    list.appendChild(todo)
    hideForm()
    clearForm()
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
    projects.appendChild(project)
    console.log('project')
    console.log(todoFactory2)
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




let showTasksOnPage = () => {
    let myArray = todoItems
const list = document.querySelector('.list')


myArray.forEach(function(item, index) {
  console.log(item.title);
const todo = document.createElement('div')
  todo.textContent = item.title
  list.appendChild(todo)
});
}
showTasksOnPage()
