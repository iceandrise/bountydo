import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllItems, getCount, pushItem, Task } from "../utils";

const ToDosContext = createContext(null);

export const ToDosContextProvider = (props) => {
  const [todos, setTodos] = useState(getAllItems());
  const [filters, setFilters] = useState({
    search: undefined,
    radio: {
      work: false,
      rest: false,
      shopping: false,
      celebration: false,
      family: false,
      help: false,
    },
  });
  const [counter, setCounter] = useState({
    total: todos.priority.length + todos.default.length,
    completed: getCount(),
  });

  const push = (name, description, start, end, checkboxes) => {
    const task = new Task(name, description, checkboxes, start, end);
    setTodos((prev) => ({ ...prev, default: [...prev.default, task] }));
    // pushItem(task);
    setCounter((prev) => ({ ...prev, total: prev.total + 1 }));
  };

  const updatePriority = (index, isTop) => {
    console.log(index, isTop);
    setTodos(() => {
      const todos = getAllItems();
      if (isTop) {
        todos.default.push(todos.priority[index]);
        todos.priority = todos.priority.filter((el, i) => i !== index);
      } else {
        todos.priority.push(todos.default[index]);
        todos.default = todos.default.filter((el, i) => i !== index);
      }

      return todos;
    });
    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const completeItem = (index, isTop) => {
    setTodos(() => {
      const todos = getAllItems();
      if (isTop) {
        todos.priority = todos.priority.filter((el, i) => i !== index);
      } else {
        todos.default = todos.default.filter((el, i) => i !== index);
      }

      return todos;
    });
    setCounter((prev) => ({ completed: prev.completed + 1, total: prev.total - 1 }));
  };

  const deleteItem = (index, isTop) => {
    setTodos(() => {
      const todos = getAllItems();
      if (isTop) {
        todos.priority = todos.priority.filter((el, i) => i !== index);
      } else {
        todos.default = todos.default.filter((el, i) => i !== index);
      }

      return todos;
    });

    setCounter((prev) => ({ ...prev, total: prev.total - 1 }));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("counter", JSON.stringify(counter.completed));
  }, [todos, counter.completed]);

  return (
    <ToDosContext.Provider
      value={{
        counter,
        todos: {
          default: todos.default
            .filter(
              (el) =>
                Object.values(filters.radio).filter((val) => val).length
                  ? Object.entries(filters.radio)
                      .filter((val) => val[1])
                      .some((fil) =>
                        Object.entries(el.radio)
                          .filter((val) => val[1])
                          .map((val) => val[0])
                          .includes(fil[0])
                      )
                  : true //(
            )
            .filter((el) =>
              filters.search ? el.nameOfTask.includes(filters.search) : true
            ),
          priority: todos.priority
            .filter((el) =>
              Object.values(filters.radio).filter((val) => val).length
                ? Object.entries(filters.radio)
                    .filter((val) => val[1])
                    .some((fil) =>
                      Object.entries(el.radio)
                        .filter((val) => val[1])
                        .map((val) => val[0])
                        .includes(fil[0])
                    )
                : true
            )
            .filter((el) =>
              filters.search ? el.nameOfTask.includes(filters.search) : true
            ),
        },
        completeItem,
        deleteItem,
        updatePriority,
        push,
        filters,
        setFilters,
      }}
      {...props}
    />
  );
};

export const useToDosContext = () => {
  const context = useContext(ToDosContext);
  if (!context) {
    throw new Error("ToDosContext must be used within a ToDosContextProvider");
  }

  return context;
};
