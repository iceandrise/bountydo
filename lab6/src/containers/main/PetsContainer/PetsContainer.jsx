import React from "react";

import { useToDosContext } from "../../../contexts/ToDosContext";

import "./PetsContainer.css";

export const PetsContainer = () => {
  const { counter } = useToDosContext();

  return (
    <div className="info-container">
      <div className="info-wrapper">
        <h2 className="title">Collection</h2>
        <div className="wrapper">
          <div className="collect__content">
            <p className="wrapper__output_count">Count of your pets:</p>
            <div className="output__field">
              {counter.completed > 50
                ? 4
                : counter.completed > 20
                ? 3
                : counter.completed > 10
                ? 2
                : counter.completed > 5
                ? 1
                : 0}
            </div>
          </div>
          <div className="collect__content">
            <ul>
              <li className="pets__wrapper">
                {counter.completed > 5 && <div className="pets straus"></div>}
              </li>
              <li className="pets__wrapper">
                {counter.completed > 10 && <div className="pets suslik"></div>}
              </li>
              <li className="pets__wrapper">
                {counter.completed > 20 && <div className="pets fenek"></div>}
              </li>
              <li className="pets__wrapper">
                {counter.completed > 50 && <div className="pets tiger"></div>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
