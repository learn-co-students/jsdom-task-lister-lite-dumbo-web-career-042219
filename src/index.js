

// As an user, the task string that I provided should appear on the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const newTaskDescription = document.querySelector('#new-task-description');
  const newTaskDueDate = document.querySelector('#new-task-due-date');

  const newTaskPriority = document.querySelector('select');


  const taskContainer = document.getElementById('list');
  const ulTag = document.querySelector('ul')
  const del = document.getElementById('delete-btn')


  form.addEventListener("submit", (event) => {
    event.preventDefault();
     let item = document.createElement("table");
     item.innerHTML += `

     <tbody>
     <tr>
     <td>${newTaskDescription.value }</td>
     <td> ${newTaskDueDate.value}</td>
     <td> ${newTaskPriority.value}</td>
     <td><button id = 'delete-btn'> 🗑 </button></td>
     </tr>
     </tbody>
     `
     taskContainer.appendChild(item);
     form.reset();

     item.addEventListener('click', (e) => {
       console.log(e.target)
       e.target.parentElement.parentElement.remove()
     })
  })


});
