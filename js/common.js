const addTaskBtn = document.getElementById("button-create");

const nameTask = document.getElementById("name");
const descrTask = document.getElementById("dscr");
const radioTask = document.getElementsByClassName("radio__create");
const timeTask1 = document.getElementById("cron1");
const timeTask2 = document.getElementById("cron2");

const taskForm = document.getElementById("no-priority");
const taskPrio = document.getElementById("yes-priority");
const idcomplete = document.getElementById("completed");
const filterId = document.getElementById("fltr");

Array.prototype.last = function () {
  return this[this.length - 1];
};

let counter = 0;

let countPets = 0;

let tasks = {
  default: [],
  priority: [],
};

const filters = {
  search: '',
  tags: []
}

localStorage.tasks && (tasks = JSON.parse(localStorage.getItem("tasks")));
localStorage.counter && (counter = Number(localStorage.getItem("counter")));

const updateLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("counter", JSON.stringify(counter));
};