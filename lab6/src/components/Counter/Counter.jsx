import React from "react";
import { useToDosContext } from "../../contexts/ToDosContext";

import "./Counter.css";

export const Counter = () => {
  const { counter } = useToDosContext();

  return (
    <div className="info-container">
      <div className="info-wrapper">
        <h2 className="title">Counter</h2>
        <div className="wrapper">
          <div className="counter__content">
            <p className="counter__content_completed">Completed tasks:</p>
            <div className="output__field">{counter.completed}</div>
          </div>
          <div className="counter__content">
            <p className="counter__content_remaining">Total tasks:</p>
            <div className="output__field">{counter.total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
