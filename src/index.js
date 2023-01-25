import './style.css';

const todosList = (() => {
    let todoItems = []
    return {
        todoItems
    }
})()

const todoFactory = ((title, description, dueDate, priority, notes) => {
title,
description,
dueDate,
priority,
notes
return {
    getTitle: () => title,
    getDescription: () => description,
    getDueDate: () => dueDate,
    getPriority: () => priority,
    getNotes: () => notes
}
})

const task1 = todoFactory ('trash', 'take it out', '9/2/2021', 'high', 'testing')
const task2 = todoFactory ('eat', 'take it out', '9/2/2021', 'high', 'testing')
const task3 = todoFactory ('sleep', 'take it out', '9/2/2021', 'high', 'testing')
const task4 = todoFactory ('repeat', 'take it out', '9/2/2021', 'high', 'testing')
console.log(todosList)
console.log(todosList.todoItems)
todosList.todoItems.push(task1)
todosList.todoItems.push(task2)
todosList.todoItems.push(task3)
todosList.todoItems.push(task4)
console.log(todosList)
console.log(todosList.todoItems)


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



// console.log(school.getTitle())
// console.log(social.getTitle())


// numberOfProjects {
//     num
// }
