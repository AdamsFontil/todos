import './style.css';

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

console.log(task1)
console.log(task1.getDescription())
console.log(task1.getTitle())

const makeProject = ( (title) => {
    title
    return {
        getTitle: () => title,
    }
})

const taskText = document.querySelector('.taskText')
const add = document.querySelector('.add')
add.addEventListener('click', ()=> {
    console.log('test')
    taskText.textContent = 'testing'
})
const school = makeProject ('school')
const finance = makeProject ('finance')
const personal = makeProject ('personal')
const social = makeProject ('social')



console.log(school.getTitle())
console.log(social.getTitle())


// numberOfProjects {
//     num
// }
