document.addEventListener("DOMContentLoaded", () => {
let textBox = document.getElementById("new-task-description");
let textInput = textBox.value;
let form = document.getElementById("create-task-form");
let tasks = document.getElementById('tasks')

form.addEventListener("submit", addTask);

});

function addTask(e){
  e.preventDefault();
  let node = document.createElement("li");
  node.innerText = document.getElementById("new-task-description").value

  let buttonNode = document.createElement("button");
  buttonNode.innerText = "X"

  node.append(buttonNode);
  tasks.appendChild(node);
  e.target.reset();
}
