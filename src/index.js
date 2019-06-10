

document.addEventListener("DOMContentLoaded", () => {
  button = document.getElementById("create-task-button");
  button.addEventListener("click", function(e){
    e.preventDefault();
    list = document.getElementById("list");
    task = document.getElementById("new-task-description").value;
    element = document.createElement("li");
    element.innerText = task;
    list.appendChild(element);
  });
});
