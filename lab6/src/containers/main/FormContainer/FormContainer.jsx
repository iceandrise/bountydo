import React, { useEffect } from "react";

import { TaskForm } from "../../../components";
import { useToDosContext } from "../../../contexts/ToDosContext";
import { ToDo } from "./ToDo";

import "./FormContainer.css";

export const FormContainer = () => {
  const { todos } = useToDosContext();

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div className="general-task-wrapper">
      <div className="task">
        <TaskForm />

        <h2 className="title">Priority tasks</h2>
        <div className="new-task">
          <div className="general-wrapper">
            {todos.priority?.map((task, i) => (
              <ToDo
                key={"priority" + i}
                task={task}
                isTop
                index={i}
              />
            ))}
          </div>
        </div>

        <h2 className="title">Tasks</h2>
        <div className="new-task">
          <div className="general-wrapper">
            {todos.default?.map((task, i) => (
              <ToDo
                key={"default" + i}
                task={task}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
