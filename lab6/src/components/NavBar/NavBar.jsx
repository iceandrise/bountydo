import React from "react";

import { Button } from "../Button";

import "./NavBar.css";

export const NavBar = ({ loading, login, exit, logined }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <small>BountyDo</small>
      </div>

      <div className="wrapper__buttons">
        {!loading && !logined && (
          <Button className="auth-button" onClick={login}>
            Sign In
          </Button>
        )}
        {!loading && logined && (
          <Button className="auth-button" onClick={exit}>
            Sign Out
          </Button>
        )}
      </div>
    </header>
  );
};
