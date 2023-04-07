// Dark Mode
const body = document.body;
const todoListInput = document.getElementById("todo-input-area");
const lightModeToggle = document.getElementById("light-mode-toggle");
const itemArea = document.getElementById("todo-area");
const todoFooter = document.getElementById("todo-footer");
const itemCenterMobile = document.getElementById("item-center-mobile");

//Add todo list
const input = document.getElementById("todo-input");
const inputArea = document.getElementById("todo-list");
const itemCount = document.getElementById("item-counter");
const checkedItems = document.querySelectorAll(".checked");
let id = 0;
let counter = 0;
let clicked = false;

lightModeToggle.addEventListener("click", function () {
  let todoListItems = document.querySelectorAll("#todo-list-item");
  let circleBefore = document.querySelectorAll("#circle-before");
  // Choose Dark mode
  if (body.classList.contains("light-mode")) {
    //background
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    //todo input
    input.classList.remove("light-mode");
    input.classList.add("dark-mode");
    todoListInput.classList.remove("light-mode");
    todoListInput.classList.add("dark-mode");
    //todo area
    itemArea.classList.remove("light-mode");
    itemArea.classList.add("dark-mode");
    //todoitem
    for (i = 0; i < todoListItems.length; i++) {
      todoListItems[i].classList.remove("light-mode");
      todoListItems[i].classList.add("dark-mode");
      circleBefore[i].classList.remove("light-mode");
      circleBefore[i].classList.add("dark-mode");
    }
    // footer
    todoFooter.classList.remove("light-mode");
    todoFooter.classList.add("dark-mode");

    itemCenterMobile.classList.remove("light-mode");
    itemCenterMobile.classList.add("dark-mode");

    this.setAttribute("src", "./images/icon-sun.svg");
    // Choose Light mode
  } else {
    //background
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    //todo input
    input.classList.remove("dark-mode");
    input.classList.add("light-mode");
    todoListInput.classList.remove("dark-mode");
    todoListInput.classList.add("light-mode");
    //todo area
    itemArea.classList.remove("dark-mode");
    itemArea.classList.add("light-mode");
    //todoitem
    for (i = 0; i < todoListItems.length; i++) {
      todoListItems[i].classList.remove("dark-mode");
      circleBefore[i].classList.remove("dark-mode");
      todoListItems[i].classList.add("light-mode");
      circleBefore[i].classList.add("light-mode");
    }
    //footer
    todoFooter.classList.remove("dark-mode");
    todoFooter.classList.add("light-mode");

    itemCenterMobile.classList.remove("dark-mode");
    itemCenterMobile.classList.add("light-mode");

    this.setAttribute("src", "./images/icon-moon.svg");
  }
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const inputText = input.value.trim();
    if (inputText.length > 0) {
      const todoListItem = document.createElement("div");
      todoListItem.id = "todo-list-item";
      todoListItem.setAttribute("draggable", "true");
      if (body.classList.contains("light-mode")) {
        todoListItem.classList.add("light-mode");
      } else {
        todoListItem.classList.add("dark-mode");
      }
      const checkboxWrapper = document.createElement("div");
      const checkbox = document.createElement("div");
      const circleBefore = document.createElement("div");
      const iconChecked = document.createElement("img");
      checkboxWrapper.id = "round-container";
      circleBefore.id = "circle-before";
      checkbox.id = "round";
      iconChecked.setAttribute("src", "/images/icon-check.svg");
      iconChecked.classList.add("checked-icon");

      checkbox.appendChild(circleBefore);
      checkbox.appendChild(iconChecked);
      checkboxWrapper.appendChild(checkbox);
      todoListItem.appendChild(checkboxWrapper);

      const todoText = document.createElement("div");
      todoText.classList.add("todo-text");
      todoText.innerHTML = inputText;
      todoListItem.appendChild(todoText);

      const deleteBtnSVG = document.createElement("img");
      deleteBtnSVG.classList.add("delete-btn");
      deleteBtnSVG.setAttribute("src", "/images/icon-cross.svg");
      todoListItem.appendChild(deleteBtnSVG);

      inputArea.appendChild(todoListItem);
      input.value = "";
      counter++;
      itemCount.innerText = counter;

      deleteBtnSVG.addEventListener("click", function () {
        inputArea.removeChild(todoListItem);
        if (todoListItem.classList.contains("checked")) {
          itemCount.innerText = counter;
        } else {
          counter--;
          itemCount.innerText = counter;
        }
      });

      checkboxWrapper.addEventListener("click", checkboxClicked);
      function checkboxClicked() {
        circleBefore.style.backgroundColor = "transparent";
        checkbox.style.background = "var(--checkedColor)";

        todoListItem.classList.add("checked");

        if (todoListItem.classList.contains("checked")) {
          todoText.style.textDecoration = "line-through";
          counter--;
          itemCount.innerText = counter;
          checkboxWrapper.removeEventListener("click", checkboxClicked);
        }
      }

      const clearCompletedBtn = document.getElementById("clear-completed-btn");

      clearCompletedBtn.addEventListener("click", function () {
        const todoList = document.getElementById("todo-list");
        const checkedList = todoList.getElementsByClassName("checked");

        while (checkedList.length > 0) {
          checkedList[0].parentNode.removeChild(checkedList[0]);
        }
      });

      //Drag and Drop
      let todoListItems = document.querySelectorAll("#todo-list-item");
      let currentDrag = null;
      let currentReplace = null;

      todoListItems.forEach((todoListItem) => {
        todoListItem.addEventListener("dragstart", function () {
          currentDrag = this;
          setTimeout(() => {
            this.style.display = "none";
          }, 0);
        });

        todoListItem.addEventListener("dragend", function () {
          currentDrag = null;
          this.style.display = "grid";
          todoListItems = document.querySelectorAll("#todo-list-item");
          todoListItems.forEach((todoListItem) => {
            todoListItem.classList.remove("dragging");
          });
        });

        todoListItem.addEventListener("dragenter", function (e) {
          e.preventDefault();
          currentReplace = this;
          this.classList.add("dragging");
        });

        todoListItem.addEventListener("dragover", function (e) {
          e.preventDefault();
          this.style.cursor = "pointer";
        });

        todoListItem.addEventListener("drop", function (e) {
          e.preventDefault();
          this.style.cursor = "pointer";
          if (currentDrag && currentDrag.nodeType === Node.ELEMENT_NODE) {
            this.parentNode.insertBefore(currentDrag, this.nextSibling || this);
            currentReplace.classList.remove("dragging");
          }
        });
      });

      id++;
    } else {
      alert("อย่าลืมใส่นะจ้ะ");
    }
  }
});

//Filter
const allFilterMobile = document.querySelector("#item-center-mobile #menu-filter li:nth-child(1) a");
const activeFilterMobile = document.querySelector("#item-center-mobile #menu-filter li:nth-child(2) a");
const completeFilterMobile = document.querySelector("#item-center-mobile #menu-filter li:nth-child(3) a");

allFilterMobile.addEventListener("click", () => {
  allFilterMobile.style.color = "var(--selectColor)";
  activeFilterMobile.style.color = "";
  completeFilterMobile.style.color = "";
  document.querySelectorAll("#todo-list-item").forEach((todolistitem) => {
    todolistitem.style.transition = "all 0.2s ease-out";
    todolistitem.style.opacity = "0";
    setTimeout(() => {
      todolistitem.style.display = "grid";
      todolistitem.style.gridTemplateColumns = "1fr 8fr 1fr";
      todolistitem.style.opacity = "1";
    }, 200);
  });
});

activeFilterMobile.addEventListener("click", () => {
  allFilterMobile.style.color = "";
  activeFilterMobile.style.color = "var(--selectColor)";
  completeFilterMobile.style.color = "";
  document.querySelectorAll("#todo-list-item").forEach((todolistitem) => {
    if (todolistitem.classList.contains("checked")) {
      todolistitem.style.opacity = "0";
      todolistitem.style.transform = "scale(1)";
      setTimeout(() => {
        todolistitem.style.display = "none";
      }, 300);
    } else {
      todolistitem.style.opacity = "1";
      todolistitem.style.transform = "scale(1)";
      setTimeout(() => {
        todolistitem.style.display = "grid";
        todolistitem.style.gridTemplateColumns = "1fr 8fr 1fr";
      }, 300);
    }
  });
});

completeFilterMobile.addEventListener("click", () => {
  allFilterMobile.style.color = "";
  activeFilterMobile.style.color = "";
  completeFilterMobile.style.color = "var(--selectColor)";
  document.querySelectorAll("#todo-list-item").forEach((todolistitem) => {
    if (todolistitem.classList.contains("checked")) {
      todolistitem.style.display = "grid";
      todolistitem.style.gridTemplateColumns = "1fr 8fr 1fr";
      todolistitem.style.opacity = "1";
      todolistitem.style.transform = "scale(1)";
    } else {
      todolistitem.style.opacity = "0";
      todolistitem.style.transform = "scale(1)";
      setTimeout(() => {
        todolistitem.style.display = "none";
      }, 300);
    }
  });
});

//Filter
const allFilter = document.querySelector("#item-center #menu-filter li:nth-child(1) a");
const activeFilter = document.querySelector("#item-center #menu-filter li:nth-child(2) a");
const completeFilter = document.querySelector("#item-center #menu-filter li:nth-child(3) a");

allFilter.addEventListener("click", () => {
  allFilter.style.color = "var(--selectColor)";
  activeFilter.style.color = "";
  completeFilter.style.color = "";
  document.querySelectorAll("#todo-list-item").forEach((todolistitem) => {
    todolistitem.style.transition = "all 0.2s ease-out";
    todolistitem.style.opacity = "0";
    setTimeout(() => {
      todolistitem.style.display = "grid";
      todolistitem.style.gridTemplateColumns = "1fr 8fr 1fr";
      todolistitem.style.opacity = "1";
    }, 200);
  });
});

activeFilter.addEventListener("click", () => {
  allFilter.style.color = "";
  activeFilter.style.color = "var(--selectColor)";
  completeFilter.style.color = "";
  document.querySelectorAll("#todo-list-item").forEach((todolistitem) => {
    if (todolistitem.classList.contains("checked")) {
      todolistitem.style.opacity = "0";
      todolistitem.style.transform = "scale(1)";
      setTimeout(() => {
        todolistitem.style.display = "none";
      }, 300);
    } else {
      todolistitem.style.opacity = "1";
      todolistitem.style.transform = "scale(1)";
      setTimeout(() => {
        todolistitem.style.display = "grid";
        todolistitem.style.gridTemplateColumns = "1fr 8fr 1fr";
      }, 300);
    }
  });
});

completeFilter.addEventListener("click", () => {
  allFilter.style.color = "";
  activeFilter.style.color = "";
  completeFilter.style.color = "var(--selectColor)";
  document.querySelectorAll("#todo-list-item").forEach((todolistitem) => {
    if (todolistitem.classList.contains("checked")) {
      todolistitem.style.display = "grid";
      todolistitem.style.gridTemplateColumns = "1fr 8fr 1fr";
      todolistitem.style.opacity = "1";
      todolistitem.style.transform = "scale(1)";
    } else {
      todolistitem.style.opacity = "0";
      todolistitem.style.transform = "scale(1)";
      setTimeout(() => {
        todolistitem.style.display = "none";
      }, 300);
    }
  });
});
