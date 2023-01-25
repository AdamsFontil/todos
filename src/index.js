import './style.css';

// const todosList = (() => {
//     let todoItems = []
//     return {
//         todoItems
//     }
// })()

let todoItems = [];

const todoFactory = ((title, description, dueDate, priority, notes) => {
title,
description,
dueDate,
priority,
notes
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
console.log(todoItems)
todoItems.push(task1)
todoItems.push(task2)
todoItems.push(task3)
todoItems.push(task4)
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

function showForm() {
    document.getElementById("myForm").style.display = "block";
  }

const newProject = document.querySelector('.newProject')
const taskText = document.querySelector('.taskText')
const newTodo = document.querySelector('.newTodo')
newTodo.addEventListener('click', ()=> {
    console.log('test')
})
newProject.addEventListener('click', ()=> {
    console.log('testing')
    showForm()
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
