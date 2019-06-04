class Task {
  constructor(description, name, priority) {
    this.description = description;
    this.name = name;
    this.priority = priority;
  }

  render() {
    return `
      <li>
        ${this.description} - ${this.name} - ${this.priority}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  }
}