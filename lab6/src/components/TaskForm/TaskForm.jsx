import React, { useState } from "react";

import { useToDosContext } from "../../contexts/ToDosContext";
import { createCalendarMark } from "../../utils";
import { Button } from "../Button";

import "./TaskForm.css";

export const TaskForm = () => {
  const { push } = useToDosContext();
  const [checkboxes, setCheckboxes] = useState({
    work: false,
    rest: false,
    shopping: false,
    celebration: false,
    family: false,
    help: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const summary = e.target.name.value;
    const description = e.target.dscr.value;
    const start = e.target.start.value;
    const end = e.target.end.value;
    const now = new Date()
    const start1 = new Date(start)
    const end1 = new Date(end)

    if(summary.trim().length!= 0 && description.trim().length != 0){

      if((now < start1)  && start1 < end1){

        push(summary, description, start, end, checkboxes);
        createCalendarMark(summary, description, new Date(start).toISOString(), new Date(end).toISOString());

      }else {
        alert("You cannot use a date that has already passed!");
  
      }
    }else {
      alert("Name or description of task must not be empty!");
    }


  };

  return (
    <form className="container-task" onSubmit={onSubmit}>
      <h2 className="title">Create task</h2>
      <div className="general-wrapper">
        <div className="task-content">
          <div className="task-wrapper">
            <input
              type="name"
              placeholder="Enter name"
              name="name"
              id="name"
              required
            />
            <div className="wrapper__filter">
              <div>
                <input
                  type="checkbox"
                  checked={checkboxes.work}
                  name="work"
                  onChange={() =>
                    setCheckboxes((prev) => ({ ...prev, work: !prev.work }))
                  }
                />
                <label htmlFor="work">Work</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={checkboxes.rest}
                  name="rest"
                  onChange={() =>
                    setCheckboxes((prev) => ({ ...prev, rest: !prev.rest }))
                  }
                />
                <label htmlFor="rest">Rest</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={checkboxes.shopping}
                  name="shopping"
                  onChange={() =>
                    setCheckboxes((prev) => ({
                      ...prev,
                      shopping: !prev.shopping,
                    }))
                  }
                />
                <label htmlFor="shopping">Shopping</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={checkboxes.celebration}
                  name="celebration"
                  onChange={() =>
                    setCheckboxes((prev) => ({
                      ...prev,
                      celebration: !prev.celebration,
                    }))
                  }
                />
                <label htmlFor="celebration">Celebrate</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={checkboxes.family}
                  name="family"
                  onChange={() =>
                    setCheckboxes((prev) => ({ ...prev, family: !prev.family }))
                  }
                />
                <label htmlFor="family">Family</label>
              </div>
              <div>
                <input
                  checked={checkboxes.help}
                  type="checkbox"
                  name="help"
                  onChange={() =>
                    setCheckboxes((prev) => ({ ...prev, help: !prev.help }))
                  }
                />
                <label htmlFor="help">Help</label>
              </div>
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Enter description"
                name="dscr"
                id="dscr"
                required
              ></textarea>
            </div>
          </div>
          <div className="task__time">
            <label className="wrapper__time">Time</label>
            <input type="datetime-local" name="start" required />
            <input type="datetime-local" name="end" required />
            <Button type="submit">Create</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
