const fillHtml = () => {
  taskForm.innerHTML = "";
  taskPrio.innerHTML = "";
  updateLocalStorage();

  if (!!tasks.default?.length) {
    tasks.default.filter((value) => {
      const haveTag = !filters.tags.length ? true : filters.tags.reduce((acc, val) => {
        if (!acc) {
          acc = value.radio.includes(val)
        }

        return acc;
      }, false);

      const sameName = !filters.search.length ? true : value.nameOfTask.includes(filters.search);
      return sameName && haveTag
    }).forEach((item, index) => {
      taskForm.appendChild(createTemplate(item, false, index));
    });
  }

  if (!!tasks.priority?.length) {
    tasks.priority.filter((value) => {
      const haveTag = !filters.tags.length ? true : filters.tags.reduce((acc, val) => {
        if (!acc) {
          acc = value.radio.includes(val)
        }

        return acc;
      }, false);

      const sameName = !filters.search.length ? true : value.nameOfTask.includes(filters.search);
      return sameName && haveTag
    }).forEach((item, index) => {
      taskPrio.append(createTemplate(item, true, index));
    });
  }

  document.getElementById("completed").innerHTML = counter;
  document.getElementById("total").innerHTML =
    tasks.default.length + tasks.priority.length;

  const htmlElements = [...taskForm.children];
  htmlElements.forEach((val, i) => {
    // click on star
    val.getElementsByClassName("image")[0].addEventListener("click", (e) => {
      e.target.src = "../img/staract.png";
      tasks.priority.push(tasks.default[i]);
      tasks.default = tasks.default.filter((val, index) => index !== i);
      fillHtml();
    });

    // delete
    val.getElementsByClassName("button")[1].addEventListener("click", (e) => {
      tasks.default = tasks.default.filter((val, index) => index !== i);
      fillHtml();
    });

    val.getElementsByClassName("button")[0].addEventListener("click", (e) => {
      counter += 1;

      document.getElementById("completed").innerHTML = counter;

      updateLocalStorage();

      tasks.default = tasks.default.filter((val, index) => index !== i);
      fillHtml();
    });
  });

  const htmlPrio = [...taskPrio.children];
  htmlPrio.forEach((val, i) => {
    val.getElementsByClassName("image")[0].addEventListener("click", (e) => {
      e.target.src = "../img/starnon.png";
      tasks.default.push(tasks.priority[i]);
      tasks.priority = tasks.priority.filter((val, index) => index !== i);
      fillHtml();
    });
    val.getElementsByClassName("button")[1].addEventListener("click", (e) => {
      tasks.priority = tasks.priority.filter((val, index) => index !== i);
      fillHtml();
    });

    val.getElementsByClassName("button")[0].addEventListener("click", (e) => {
      counter += 1;
      tasks.priority = tasks.priority.filter((val, index) => index !== i);
      fillHtml();
    });
  });

  addPets();
  document.getElementById("pets-count").innerHTML = countPets;
};