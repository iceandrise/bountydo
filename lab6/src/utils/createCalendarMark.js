export const createCalendarMark = (summary, description, start, end) => {
  var event = {
    summary,
    location: "BountyDo",
    description,
    start: {
      dateTime: start,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: end,
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

  gapi.client.calendar.events
    .insert({
      calendarId: "primary",
      resource: event,
    })
    .execute();
};