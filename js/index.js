const addTaskBtn = document.getElementById('button__create')
const nameTask = document.getElementById('name')
const descrTask = document.getElementById('dscr')
const radioTask = document.getElementById('radio__create')
const timeTask1 = document.getElementById('cron1')
const timeTask2 = document.getElementById('cron2')
const priorTask = document.getElementById('prior')
const wrapperTask = document.querySelector('.general__wrapper')

let tasks;

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(nameofTask, description, radio, time1, time2, prio){
    this.nameofTask = nameofTask;
    this.description = description;
    this.radio = radio;
    this.time1 = time1;
    this.time2 = time2;
    this.prio = prio
    this.completed = false;
}


const createTemplate = (task, index) =>{
    let count = 0;
    if (task.prio=="on"){
        return `
        <div class="create__task "> 
        <div class="create__task__style ${task.completed ? count +=1 : count}">
      <input type="name" placeholder="Enter name" name="name" value = ${task.description} required>

      <div class="wrapper__filter">
      <label class="radio__wrapper">
          <input type="radio" name="work2"/>
          Work
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="rest2"/>
          Rest
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="family2"/>
          Family
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="shopping2"/>
          Shopping
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="celebration2"/>
          Celebration
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="Help2"/>
          Help
        </label>
      </div>
      <div class="description__task">
        <textarea type="description" placeholder="Enter description" name="dscr" required>${task.nameofTask}</textarea>
      </div>
    </div>
    <div class="time__task">
      <input type="image" src="img/staract.png" width="45px" height="45px">
      <label class="wrapper__time">Time</label>
      <input type="time" name="cron" value = ${task.time1}>
      <input type="time" name="cron" value = ${task.time2}>

    </div>

  </div>
  <div class="button__column">
    <button class="button">Update</button>
    <button class="button" ${task.completed ? 'checked' : ''}>Comlete!</button>
    <button class="button">Delete</button>
  </div> 
    `}
    else{
        return `
        <div class="create__task "> 
        <div class="create__task__style ${task.completed ? count +=1 : count}">
      <input type="name" placeholder="Enter name" name="name" value = ${task.description} required>

      <div class="wrapper__filter">
      <label class="radio__wrapper">
          <input type="radio" name="work2"/>
          Work
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="rest2"/>
          Rest
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="family2"/>
          Family
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="shopping2"/>
          Shopping
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="celebration2"/>
          Celebration
        </label>
        <label class="radio__wrapper">
          <input type="radio" name="Help2"/>
          Help
        </label>
      </div>
      <div class="description__task">
        <textarea type="description" placeholder="Enter description" name="dscr" required>${task.nameofTask}</textarea>
      </div>
    </div>
    <div class="time__task">
      <input type="image" src="img/starnon.png" width="45px" height="45px">
      <label class="wrapper__time">Time</label>
      <input type="time" name="cron" value = ${task.time1}>
      <input type="time" name="cron" value = ${task.time2}>

    </div>

  </div>
  <div class="button__column">
    <button class="button">Update</button>
    <button class="button" ${task.completed ? 'checked' : ''}>Comlete!</button>
    <button class="button">Delete</button>
  </div> 
    `

    }
}


const fillHtml = () =>{
    wrapperTask.innerHTML = "" ;
    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            wrapperTask.innerHTML += createTemplate(item, index);
        });
    }
}

fillHtml();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskBtn.addEventListener('click', ()=>{
    tasks.push(new Task(descrTask.value, nameTask.value, radioTask.value, timeTask1.value, timeTask2.value, priorTask.value));
    updateLocal();
    fillHtml();
})