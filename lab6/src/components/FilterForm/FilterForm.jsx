import React, { useState } from "react";

import { useToDosContext } from "../../contexts/ToDosContext";
import { Button } from "../Button";

import "./FilterForm.css";

export const FIlterForm = () => {
  const [checkboxes, setCheckboxes] = useState({
    work: false,
    rest: false,
    shopping: false,
    celebration: false,
    family: false,
    help: false,
  });
  const [search, setSearch] = useState(undefined);
  const { filters, setFilters } = useToDosContext();

  const onClear = (e) => {
    e.preventDefault();

    setSearch(undefined)
    setFilters({
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
    setCheckboxes({
      work: false,
      rest: false,
      shopping: false,
      celebration: false,
      family: false,
      help: false,
    });
  };

  const onChange = (e) => {
    setCheckboxes((prev) => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setFilters({
      search: search.trim().length ? search: undefined,
      radio: {
        ...checkboxes
      }
    })
  }

  return (
    <div className="info-container">
      <div className="info-wrapper">
        <h2 className="title">Search</h2>
        <div className="wrapper">
          <form action="submit" onSubmit={onSubmit}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" />
            <Button type="submit">Search</Button>
          </form>
          <h2 className="title">Tag filter</h2>
          <div className="wrapper__filter">
            <div>
              <input
                name="work"
                type="checkbox"
                checked={checkboxes.work}
                onChange={onChange}
              />
              <label htmlFor="work">Work</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="rest"
                checked={checkboxes.rest}
                onChange={onChange}
              />
              <label htmlFor="rest">Rest</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="shopping"
                checked={checkboxes.shopping}
                onChange={onChange}
              />
              <label htmlFor="shopping">Shopping</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="family"
                checked={checkboxes.family}
                onChange={onChange}
              />
              <label htmlFor="family">Family</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="celebration"
                checked={checkboxes.celebration}
                onChange={onChange}
              />
              <label htmlFor="celebration">Celebrate</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="help"
                checked={checkboxes.help}
                onChange={onChange}
              />
              <label htmlFor="help">Help</label>
            </div>
          </div>
          <div>
            <Button onClick={onClear}>Clear</Button>
            {/* <Button type="submit">Search</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
