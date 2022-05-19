import React from "react";

import { Button, Counter, FIlterForm } from "../../components";
import { FormContainer } from "./FormContainer";
import { PetsContainer } from "./PetsContainer";

import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-wrapper">
        <Counter />
        <FIlterForm />
        <PetsContainer />
      </div>
      <FormContainer />
    </div>
  );
};
