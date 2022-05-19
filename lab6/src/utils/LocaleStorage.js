import { Task } from "./Task";

const defaultState = {
  default: [],
  priority: [],
};

export const pushItem = (task) => {
  const currentState =
    JSON.parse(localStorage.getItem("todos")) || defaultState;
  currentState.default.push(task);
  localStorage.setItem("todos", JSON.stringify(currentState));
};

export const getCount = () => JSON.parse(localStorage.getItem('counter')) || 0;

export const getAllItems = () =>
  JSON.parse(localStorage.getItem("todos")) || defaultState;
