class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description, name, priority) {
    const newTask = new Task(description, name, priority);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}
