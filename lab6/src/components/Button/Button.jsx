import React from "react";

import "./Button.css";

export const Button = ({ children, className, ...rest }) => (
  <button className={["button", className].join(" ")} {...rest}>
    {children}
  </button>
);
