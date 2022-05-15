const CLIENT_ID =
  "822723435779-entgq7gcoh7lsobv2pjlg1ihbevfsio6.apps.googleusercontent.com";
const API_KEY = "AIzaSyBGqMCLntJ40IGU9HU1objWRgDqQw1GXdw";

const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

const SCOPES = "https://www.googleapis.com/auth/calendar";

let tokenClient;
let gapiInited = false;
let gisInited = false;

document.getElementById("authorize_button").style.display = "none";
document.getElementById("signout_button").style.display = "none";

function gapiLoaded() {
  gapi.load("client", intializeGapiClient);
}

async function intializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}

function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "",
  });
  gisInited = true;
  maybeEnableButtons();
}

function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById("authorize_button").style.display = "static";
  }
}

function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    document.getElementById("signout_button").style.display = "static";
    document.getElementsByClassName("main")[0].style.display = "grid";
    document.getElementsByClassName("wrapper-logout")[0].style =
      "display: none;";

    document.getElementById("authorize_button").style.display = "none";
  };

  if (gapi.client.getToken() === null) {
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    tokenClient.requestAccessToken({ prompt: "" });
  }
}

function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken("");
    document.getElementById("authorize_button").style.display = "static";
    document.getElementById("signout_button").style.display = "none";
    document.getElementsByClassName("main")[0].style.display = "none";
    document.getElementsByClassName("wrapper-logout")[0].style =
      "display: static;";
  }
}

function createCalendarMark(summary, date1, date2, description) {
  var event = {
    summary,
    location: "BountyDo",
    description,
    start: {
      dateTime: date1.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: date2.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
    attendees: [{ email: "iceandrise@gmail.com" }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };

  gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: event,
  });
}