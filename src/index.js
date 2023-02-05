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

const task1 = todoFactory ('trash', 'take it out', '2022-06-10', 'high', 'testing')
const task2 = todoFactory ('eat', 'take it out', '9/3/2021', 'high', 'testing')
const task3 = todoFactory ('sleep', 'take it out', '9/4/2021', 'high', 'testing')
const task4 = todoFactory ('repeat', 'take it out', '9/5/2021', 'high', 'testing')
// console.log(todosList)
// console.log(todoItems)
todoItems.push(task1)
todoItems.push(task2)
todoItems.push(task3)
todoItems.push(task4)
// console.log(todosList)
// console.log(todoItems)

let putTasksOnPage = () => {
//   const checkBox = document.createElement('input');
//   checkBox.type = 'checkbox';
//   checkBox.name = 'group_name';
//   checkBox.value = 'radio_value';
// const title = document.createElement('div');
// title.textContent = todoFactory2.title;
// const date = document.createElement('div');
// date.textContent = todoFactory2.dueDate;
// const editBtn = document.createElement('div');
// editBtn.textContent = 'edit';
// const deleteBtn = document.createElement('div');
// deleteBtn.textContent = 'X';
// checkBox.checked = false;
// const list = document.querySelector('.list')
// const todo = document.createElement('div')
// todo.className = 'todo'

//   todo.appendChild(checkBox)
//   todo.appendChild(title)
//   todo.appendChild(date)
//   todo.appendChild(editBtn)
//   todo.appendChild(deleteBtn)
//   list.appendChild(todo)
// list.appendChild(todo)

}


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
    const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = 'group_name';
      checkBox.value = 'radio_value';
    const title = document.createElement('div');
    title.textContent = todoFactory2.title;
    const date = document.createElement('div');
    date.textContent = todoFactory2.dueDate;
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
    strikethrough()
    editTask()
    deleteTask()

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


    project.className = 'project'
    projects.appendChild(project)
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
  console.log('showTask')
  list.textContent = ''




    // todosHeader.textContent = 'test'
    // todos.appendChild(todosHeader)
    let myArray = todoItems
myArray.forEach(function(item, index) {


  // console.log(item.title);
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  // checkBox.name = 'group_name';
  // checkBox.value = 'radio_value';

const title = document.createElement('div');
title.textContent = item.title;
title.class = 'title'
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

  strikethrough()
  editTask()
  deleteTask()



  const divs = document.getElementsByClassName("todo");
  for (let div of divs) {
    const secondChild = div.children[1];
      // console.log(secondChild.textContent);
      // console.log(secondChild);
    if (item.complete === 'yes' && item.title === secondChild.textContent) {
      console.log('strikeyes')
      console.log({item})
      console.log(todoItems)
      console.log(secondChild.textContent)
      console.log(secondChild)
      console.log({divs})
      console.log({div})
      div.className = 'strikethrough'
      checkBox.checked = true;

    }

  }
});
}


// test()
// console.log(test)

let strikethrough = () => {
  console.log('strike')
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const parentDiv = checkbox.closest('div');
      // console.log('checkbox')
      const secondChildDiv = parentDiv.getElementsByTagName('div')[0];
      // console.log(secondChildDiv)

      const match = todoItems.find(obj => obj.title === secondChildDiv.textContent);
      if (checkbox.checked) {
        console.log('Checkbox is checked');
        console.log(parentDiv)
        parentDiv.className = 'strikethrough'
        if (match) {
          // console.log(match)
          // console.log(match.title)
          match.complete = 'yes'
          // console.log(match.complete)
        }
      } else {

        // console.log('Checkbox is not checked');
        // console.log(parentDiv)
        parentDiv.className = 'todo'
        match.complete = 'no'

      }
    });
  });
}

let editTask = () => {
  console.log('edittask')
  const editBtns = document.querySelectorAll('.editBtn');

  editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', function() {

//       const parentDiv = editBtn.parentNode;
//           parentDiv.parentNode.removeChild(parentDiv);
// const childElements = parentDiv.children;
// const valuesArray = Array.from(childElements).map(element => element.textContent);

//       console.log(valuesArray)
//       const form = document.querySelector(".form");
// const inputs = form.getElementsByTagName("input");

// Array.from(inputs).forEach((input, index) => {
//   input.placeholder = valuesArray[index + 1];
// });

      // showForm()
      // console.log(todoItems)
      // console.log('dont show form')
      // console.log(parentDiv)
      // console.log(childElements)
      const secondChildDiv = parentDiv.getElementsByTagName('div')[0];
      console.log(secondChildDiv)
      //  console.log(parentDiv)
      //   console.log(todoItems)
      //   console.log(secondChildDiv.textContent)
        const match = todoItems.find(obj => obj.title === secondChildDiv.textContent);
        if (match) {
          console.log(match)
          const form = document.querySelector(".form");
          const inputs = form.getElementsByTagName("input");

//           Object.entries(match).forEach(([key, value]) => {
//             const input = inputs[key];
//             if (input) {
//               console.log(input)
//               input.value = value;
//               todoItems.splice(match, 1);

//               showForm()
// strikethrough()
// editTask()
// deleteTask()

//             }
// });
        } else {
          console.log(`No match found for ${secondChildDiv.textContent}`);
        }



    });
  });

}

let deleteTask = () => {
  console.log('deletetask')
  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', function() {
      const parentDiv = deleteBtn.parentNode;
    parentDiv.parentNode.removeChild(parentDiv);


      // const parentDiv = deleteBtn.parentElement;
      const secondChildDiv = parentDiv.getElementsByTagName('div')[0];
    //  console.log(parentDiv)
    //   console.log(todoItems)
    //   console.log(secondChildDiv.textContent)
      const match = todoItems.find(obj => obj.title === secondChildDiv.textContent);
      if (match) {
        console.log(match)
        console.log(todoItems)
        todoItems.splice(match, 1);
        console.log(todoItems)
      } else {
        console.log(`No match found for ${secondChildDiv.textContent}`);
      }
    });
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
strikethrough()
  editTask()
  deleteTask()
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
strikethrough()
  editTask()
  deleteTask()
  }
});

}

let showCompletedTasks = () => {
  let myArray = todoItems
    list.textContent = ''
    todosHeader.textContent = 'Completed Tasks'
    // const parentDiv = checkbox.closest('div');
    // console.log(parentDiv)
    list.appendChild(todosHeader)
myArray.forEach(function(item, index) {
  if (item.complete === 'yes') {
    // console.log(parentDiv)
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
strikethrough()
  editTask()
  deleteTask()
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


const week = document.querySelector('.week')
week.addEventListener('click', () => {
  showsTaskforWeek()
})
const home = document.querySelector('.home')
home.addEventListener('click', () => {
  list.textContent = ''
    todosHeader.textContent = 'All Tasks'
    list.appendChild(todosHeader)
  showTasksOnPage()


}) // this is the model I want when refactoring to reduce code lines by alot
const month = document.querySelector('.month')
month.addEventListener('click', () => {
  showCompletedTasks()
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
    console.log(div)

    todosHeader.textContent = div.textContent


  });
});

  }
});


// //checkbox section

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', function() {
//     const parentDiv = checkbox.closest('div');
//     console.log('checkbox')
//     if (checkbox.checked) {
//       console.log('Checkbox is checked');
//       console.log(parentDiv)
//       parentDiv.className = 'strikethrough'
//     } else {
//       console.log('Checkbox is not checked');
//       console.log(parentDiv)
//       parentDiv.className = 'todo'
//     }
//   });
// });

// // deleteBtn section

// const deleteBtns = document.querySelectorAll('.deleteBtn');
// deleteBtns.forEach(deleteBtn => {
//   deleteBtn.addEventListener('click', function() {
//     console.log('deletebtn')

//     const parentDiv = deleteBtn.parentElement;
//     const secondChildDiv = parentDiv.getElementsByTagName('div')[0];
//    console.log(parentDiv)
//     console.log(todoItems)
//     console.log(secondChildDiv.textContent)
//     const match = todoItems.find(obj => obj.title === secondChildDiv.textContent);
//     if (match) {
//       console.log(match)
//       console.log(todoItems)
//       todoItems.splice(match, 1);
//       console.log(todoItems)
//       showTasksOnPage()
//     } else {
//       console.log(`No match found for ${secondChildDiv.textContent}`);
//     }
//   });
// });

// //editBtn section
// const editBtns = document.querySelectorAll('.editBtn');

// editBtns.forEach(editBtn => {
//   editBtn.addEventListener('click', function() {
//     const parentDiv = editBtn.parentElement
//     console.log('editBtn')
//     editBtn = 1;
//     showForm()
//       console.log(parentDiv)



//   });
// });



// const pageTitle = document.querySelector('.title')
// pageTitle.addEventListener('click', function() {
//   console.log('pageTitle')
// })
