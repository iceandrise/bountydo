import React from "react";

import "./Spinner.css";

export const Spinner = ({ className }) => (
  <div className={[`spinner`, className].join(" ")}></div>
);
