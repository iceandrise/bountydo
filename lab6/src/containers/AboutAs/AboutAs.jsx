import React from "react";

import './AboutAs.css';

export const AboutAs = () => (
  <div class="wrapper-logout">
    <h1 class="title">About BountyDo</h1>
    <div class="page">
      <ul class="page__description">
        <div>
          BountyDo is a task management application. After registration, you
          will have the following options:
          <li>
            Hello, productive day! Create and edit tasks, specifying the title,
            special tag (related to the field of activity), description and
            time.
          </li>
        </div>

        <li>
          Not to forget! If among your tasks there are those that need to be
          completed right now, then you can make them a priority by clicking on
          the star so as not to lose them.
        </li>
        <li>
          I completed the task! When the task is completed, click on the
          “Сomplete!” button. This task will disappear, and the counter of
          completed tasks will increase by +1.
        </li>
        <li>
          I don 't need this task anymore! If you just want to delete an
          unnecessary task - click on the “Delete” button. The completed tasks
          counter will not increase.
        </li>
        <li>
          There was not enough time yesterday! If you did not complete the
          previous day's tasks, you will receive a warning that you probably
          forgot to complete/delete them, so they are carried over to the
          current day marked “Expired task”. And then you yourself choose
          whether to delete them or complete them today.
        </li>
        <li>
          Gather a collection of unique pets! This feature of the app is
          designed to motivate you to complete more tasks in a day and collect a
          whole collection of animals!
        </li>
        <li>
          Help with finding your tasks! If your list of tasks for the day is too
          long - use filters for tags or search by name to save time.
        </li>
      </ul>
    </div>
  </div>
);
