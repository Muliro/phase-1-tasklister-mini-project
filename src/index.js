document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", addNewTask);

});



const addNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendTask(newTask);
};

  const appendTask = task => {
  document.getElementById("tasks").appendChild(task);
};
