import { Task } from "./task";

const tasks = []
let editTaskIndex = -1;

export function setupTasksModal() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("addTask");
  var span = document.getElementsByClassName("close")[0];
  var titleInput = document.getElementById("title");
  var priorityInput = document.getElementById("priority");
  var dateInput = document.getElementById("dateInput");
  var descInput = document.getElementById("desc");
  var submit = document.getElementById("submitTask");

  btn.onclick = function () {
    modal.style.display = "block";
    titleInput.value = "";
    priorityInput.value = "";
    dateInput.value = "";
    descInput.value = "";
    editTaskIndex = -1
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  submit.onclick = function () {
    const newTask = new Task(
      titleInput.value,
      descInput.value,
      dateInput.value,
      priorityInput.value,
    )

    if (editTaskIndex >= 0) {
      tasks[editTaskIndex] = newTask;
      console.log("Task Edited: ", newTask);
    } else {
      tasks.push(newTask);
      console.log("New Task Created: ", newTask);
    }
    console.log("Current Tasks: ", tasks);
    renderTasks();

    modal.style.display = "none";
    titleInput.value = "";
    priorityInput.value = "";
    dateInput.value = "";
    descInput.value = "";
    editTaskIndex = -1
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function renderTasks() {
  const taskTable = document.querySelector("#tasksTable");
  taskTable.innerHTML = ""

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = task.getTitle();
    row.appendChild(titleCell);

    const priorityCell = document.createElement("td");
    priorityCell.textContent = task.getPriority().charAt(0).toUpperCase() + task.getPriority().slice(1);
    row.appendChild(priorityCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = task.getDueDate();
    row.appendChild(dateCell);

    const editCell = document.createElement("td");
    const editButton = document.createElement("Button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-task");
    editButton.onclick = function () {
      openEditModal(i)
    };
    editCell.appendChild(editButton)
    row.appendChild(editCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("Button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-task");
    deleteButton.onclick = function () {
      deleteTask(i)
    }
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    taskTable.appendChild(row);
  }
}

function openEditModal(index) {
  var task = tasks[index]
  var modal = document.getElementById("myModal");
  var titleInput = document.getElementById("title");
  var priorityInput = document.getElementById("priority");
  var dateInput = document.getElementById("dateInput");
  var descInput = document.getElementById("desc");

  titleInput.value = task.getTitle();
  priorityInput.value = task.getPriority();
  dateInput.value = task.getDueDate();
  descInput.value = task.getDesc();
  editTaskIndex = index;

  modal.style.display = "block";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}