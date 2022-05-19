import React from "react";

import defaultPriority from "../../../../assets/starnon.png";
import topPriority from "../../../../assets/staract.png";
import { useToDosContext } from "../../../../contexts/ToDosContext";

import "./ToDo.css";


export const ToDo = ({ task, isTop = false, index }) => {
  const { updatePriority, deleteItem, completeItem } = useToDosContext();

  if (!task) return;

  return (
    <>
      <div className="task-content image__class">
        <div className="create__task__style">
          <input type="text" disabled defaultValue={task.nameOfTask} />
          <div className="wrapper__filter">
            <div>
              <input type="checkbox" disabled checked={task.radio.work} />
              <label htmlFor="work">Work</label>
            </div>
            <div>
              <input type="checkbox" disabled checked={task.radio.rest} />
              <label htmlFor="rest">Rest</label>
            </div>
            <div>
              <input type="checkbox" disabled checked={task.radio.shopping} />
              <label htmlFor="shopping">Shopping</label>
            </div>
            <div>
              <input type="checkbox" disabled checked={task.radio.family} />
              <label htmlFor="family">Family</label>
            </div>
            <div>
              <input
                type="checkbox"
                disabled
                checked={task.radio.celebration}
              />
              <label htmlFor="celebration">Celebrate</label>
            </div>
            <div>
              <input type="checkbox" disabled checked={task.radio.help} />
              <label htmlFor="help">Help</label>
            </div>
          </div>
          <div className="task__description">
            <textarea type="text" disabled value={task.description} />
          </div>
        </div>
        <div className="task__time">
          <img
            className="image"
            onClick={() => updatePriority(index, isTop)}
            src={isTop ? topPriority : defaultPriority}
            width="45px"
            height="45px "
          />

          <label className="wrapper__time">Time</label>
          <input type="datetime-local" disabled value={task.time1} />
          <input type="datetime-local" disabled value={task.time2} />
        </div>
      </div>
      <div className="button__column">
        <button className="button" onClick={() => completeItem(index, isTop)}>Complete!</button>
        <button className="button" onClick={() => deleteItem(index, isTop)}>Delete</button>
      </div>
    </>
  );
};
