document.addEventListener("DOMContentLoaded", () => {
  // your code here
  button = document.getElementById('create-task-button');
  button.addEventListener('click', function(e) {
    e.preventDefault();
    let list = document.getElementById('tasks');
    let task = document.getElementById('new-task-description').value;
    let element = document.createElement("li");
    element.innerText = task;
    list.appendChild(element);
  });
});

// Stretch Deliverables:
// A delete function that will remove tasks from your list

  let items = document.getElementById('tasks');
  items.addEventListener('click', function(e) {
    for (let itemsLi of items.children) {
      e.target.remove();
    };
  });
