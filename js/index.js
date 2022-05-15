function addPets() {
  countPets = 0;
  if (counter >= 5) {
    document.getElementById("1pet").style.backgroundImage =
      'url("../img/fenek.jpg")';
    countPets += 1;
  }
  if (counter >= 10) {
    document.getElementById("2pet").style.backgroundImage =
      'url("../img/straus.jpg")';
    countPets += 1;
  }
  if (counter >= 20) {
    document.getElementById("3pet").style.backgroundImage =
      'url("../img/suslik.jpg")';
    countPets += 1;
  }
  if (counter >= 30) {
    document.getElementById("4pet").style.backgroundImage =
      'url("../img/tiger.jpg")';
    countPets += 1;
  }
}

document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();

  filters.tags = [...filterId.getElementsByClassName("check-boxes")]
    .filter(({ checked }) => checked)
    .map((val) => {
      return val.name;
    });

  filters.search = document.forms.filter_search.search.value;

  fillHtml();
});

document.getElementById("clear").addEventListener("click", (e) => {
  filters.tags = [];
  filters.search = "";

  document.forms.filter_search.search.value = "";
  [...filterId.getElementsByClassName("check-boxes")].map((val) => {
    val.checked = false;
  });

  fillHtml();
});

document.forms.filter_search.addEventListener("submit", (e) => {
  e.preventDefault();

  filters.tags = [...filterId.getElementsByClassName("check-boxes")]
    .filter(({ checked }) => checked)
    .map((val) => {
      return val.name;
    });

  filters.search = e.target.search.value;
  fillHtml();
});

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  var now = new Date()
  var start = new Date(timeTask1.value)
  var end = new Date(timeTask2.value)
  
  if(nameTask.value.trim().length != 0 && descrTask.value.trim().length != 0){
    if(now < start || now < end && start < end){
      createCalendarMark(
        nameTask?.value || "No name",
        new Date(timeTask1?.value),
        new Date(timeTask2?.value),
        descrTask?.value
      );
      tasks.default.push(
      new Task(
        nameTask?.value,
        descrTask?.value,
        [...radioTask]
          .filter(({ checked }) => checked)
          .map((val) => {
          return val.name;
        }),
        timeTask1?.value,
        timeTask2?.value,
        false
      )
      );
      updateLocalStorage();
      fillHtml();
    }else {
      alert("You cannot use a date that has already passed!");

    }
  }else {
    alert("Name or description of task must not be empty!");
  }
      
      
});

fillHtml();