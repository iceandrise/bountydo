class Task {
  constructor(nameOfTask, description, radio, time1, time2) {
    this.nameOfTask = nameOfTask;
    this.description = description;
    this.radio = radio;
    this.time1 = time1;
    this.time2 = time2;
    this.completed = false;
  }
}

const createTemplate = (task, top = false, index) => {
  if (!task) {
    return undefined;
  }

  const div = document.createElement("div");
  div.innerHTML = `<div class="task-content ${
    task.completed ? "image__class" : ""
  }"> 
    <div class="create__task__style">
      <input type="name" name="name" disabled value = "${task.nameOfTask}" >
      <div class="wrapper__filter">
      <div>
        <input class="radio__create" type="checkbox" disabled ${
        task.radio?.includes("work") && "checked"}/>
        <label for="work">Work</label>
      </div>
      <div>
        <input class="radio__create" type="checkbox" disabled ${
          task.radio?.includes("rest") && "checked"
        } /> 
        <label for="rest">Rest</label>
      </div>
      <div>
        <input class="radio__create" type="checkbox" disabled ${
          task.radio?.includes("shopping") && "checked"
        } />
        <label for="shopping">Shopping</label>
      </div>
      <div>
        <input class="radio__create" type="checkbox" disabled ${
          task.radio?.includes("family") && "checked"
        }/>
        <label for="family">Family</label>
      </div>
      <div>
        <input class="radio__create" type="checkbox" disabled ${
          task.radio?.includes("celebration") && "checked"
        }/>
        <label for="celebration">Celebration</label>
      </div>
      <div>
        <input class="radio__create" type="checkbox" disabled ${
          task.radio?.includes("help") && "checked"
        }/>
        <label for="help">Help</label>                               
      </div>
    </div>
    <div class="task__description">
      <textarea type="text" disabled >${task.description}</textarea>
    </div>
    </div>
    <div class="task__time">
      <img class="image" src="${
        top ? "../img/staract.png" : "../img/starnon.png"
      }" width="45px" height="45px ">
  
      <label class="wrapper__time">Time</label>
      <input type="datetime-local" name="cron" disabled value = ${task.time1}>
      <input type="datetime-local" name="cron" disabled value = ${task.time2}>
    </div>
  </div>
  <div class="button__column">
    <button class="button" ${task.completed ? "checked" : ""}>Complete!</button>
    <button class="button">Delete</button>
  </div> `;

  return div;
};