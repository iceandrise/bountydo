import React from "react";

import { NavBar, Spinner } from "./components";
import { AboutAs, Main } from "./containers";
import { ToDosContextProvider } from "./contexts/ToDosContext";
import { useGoogleAuth } from "./hooks";

import './styles/app.css';

export const App = () => {
  const { token, loading, login, exit, logined } = useGoogleAuth();

  if (loading) {
    return (
      <>
        <NavBar loading={loading} login={login} exit={exit} logined={logined} />
        <div className="spinner__layer">
          <Spinner />
        </div>
      </>
    );
  }

  return (
    <ToDosContextProvider>
      <NavBar loading={loading} login={login} exit={exit} logined={logined} />
      {!logined && <AboutAs />}
      {logined && (
        <Main />
      )}
    </ToDosContextProvider>
  );
};
