

// As an user, the task string that I provided should appear on the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const newTaskDescription = document.querySelector('#new-task-description');
  const taskDescription = document.getElementById('new-task-description');
  const taskContainer = document.getElementById('list');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
     let item = document.createElement("li");
     item.innerHTML = newTaskDescription.value;

     // let btn = document.createElement("button")
     // btn.setAttribute(dataset-description, item)
     // btn.setAttribute(name, "X")
     // taskContainer.append(item, btn);

     taskContainer.appendChild(item);

     listItem.innerHTML = listItem.innerHTML + "<button> class=`${item} value = clicks onclick=deleteToDo(this.parentElement)`>Delete</button></li>"


     form.reset();



  })
});



  // function removeTask() {
  //   addEventListene
  //   removeAttributeNode
  //   removeEventListener(
  // }
