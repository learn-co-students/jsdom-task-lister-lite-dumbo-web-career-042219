

document.addEventListener("DOMContentLoaded", () => {
	//get the correct DOM elements

	//form and input field
	const taskForm = document.getElementById("create-task-form");
	const taskDecription = document.getElementById("new-task-decription");

	//ul for new tasks on the DOM
	const taskUl = document.getElementById("tasks");

	//add event submit button event listener with callback function
	taskForm.addEventListener("submit", createTask);

	// //X button
	// const button = document.querySelector("#x");

	// //add event listener for button
	// button.addEventListener("click", deleteTask);
});


function createTask(e) {
	//prevent default form behavior
	e.preventDefault();

	//input field
	const taskDescription = document.getElementById("new-task-description");

	//create new li element
	const newTask = document.createElement("li");

	//create button
	const button = document.createElement("button");

	//give new li element text from description input field
	newTask.innerText = taskDescription.value;

	//set attr for button
	button.setAttribute("id", "x")

	//button inner text
	button.innerText = "X";

	//append button and task
	newTask.append(button);

	//append new task
	document.getElementById("tasks").appendChild(newTask)

	//X
	const xList = document.querySelectorAll("#x");

	//iterate over xlist
	for(element of xList) {
		element.addEventListener("click", deleteTask);
	}

	// //add event listener for x
	// x.addEventListener("click", deleteTask);

	//reset event
	e.target.reset();
}

function deleteTask(e) {
	const x = document.querySelector("#x");
	x.parentNode.remove();
	console.log(e)
}











