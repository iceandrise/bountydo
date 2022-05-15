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

  filters.search = document.forms.filter_search.search.value

  fillHtml();
});

document.getElementById("clear").addEventListener("click", (e) => {
  // e.preventDefault();

  filters.tags = [];
  filters.search = '';

  document.forms.filter_search.search.value = '';
  [...filterId.getElementsByClassName("check-boxes")].map((val) => {
    val.checked = false;
  })

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
})

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

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
});

fillHtml();
