export class Task {
  constructor(nameOfTask, description, radio, time1, time2) {
    this.nameOfTask = nameOfTask;
    this.description = description;
    this.radio = radio;
    this.time1 = time1;
    this.time2 = time2;
    this.completed = false;
  }
}