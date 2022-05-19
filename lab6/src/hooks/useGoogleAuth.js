import { useCallback, useEffect, useMemo, useState } from "react";

export const useGoogleAuth = () => {
  const gapi = window.gapi;
  const google = window.google;

  const [gapiLoaded, setGapiLoaded] = useState({ gapi: false, gis: false });
  const [logined, setLogined] = useState(false);

  const CLIENT_ID =
    "822723435779-entgq7gcoh7lsobv2pjlg1ihbevfsio6.apps.googleusercontent.com";
  const API_KEY = "AIzaSyBGqMCLntJ40IGU9HU1objWRgDqQw1GXdw";
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPES = "https://www.googleapis.com/auth/calendar";

  const loadGapi = () => {
    gapi.load("client", intializeGapiClient);
  };

  const intializeGapiClient = async () => {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    setGapiLoaded({ ...gapiLoaded, gapi: true });
  };

  const token = useMemo(() => {
    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: "",
    });
    setGapiLoaded({ ...gapiLoaded, gis: true });

    return tokenClient;
  }, []);

  useEffect(() => {
    loadGapi();
  }, []);

  const login = useCallback(() => {
    token.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }

      setLogined(true);
      // document.getElementById("signout_button").style.display = "static";
      // document.getElementsByClassName("main")[0].style.display = "grid";
      // document.getElementsByClassName("wrapper-logout")[0].style =
      // "display: none;";

      // document.getElementById("authorize_button").style.display = "none";
    };

    if (gapi.client.getToken() === null) {
      token.requestAccessToken({ prompt: "consent" });
    } else {
      token.requestAccessToken({ prompt: "" });
    }
  }, [token]);

  const exit = () => {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");

      setLogined(false);
      // document.getElementById("authorize_button").style.display = "static";
      // document.getElementById("signout_button").style.display = "none";
      // document.getElementsByClassName("main")[0].style.display = "none";
      // document.getElementsByClassName("wrapper-logout")[0].style =
      //   "display: static;";
    }
  };

  return {
    token,
    loading: !gapiLoaded.gapi || !gapiLoaded.gis,
    login,
    exit,
    logined
  };

  // function maybeEnableButtons() {
  // if (gapiInited && gisInited) {
  // document.getElementById("authorize_button").style.display = "static";
  // }
  // }
};
