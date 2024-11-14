const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");
function Add() {
  //WHEN THE INPUT FIELD IS EMPTY;
  if (inputBox.value == "") {
    window.alert("You must enter an activity");
  } else {
    //WHEN THE INPUT FIELD HAS A VALUE;
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    list.appendChild(li);
    //DELETING A TASK;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
}
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      window.alert("🥳You have accomplished this tast congrats");
      saveDate();
    }
    //REMOVING THE TASK FROM THE SCREEN;
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      window.alert("You removed the task from the App");
      saveDate();
    }
  },
  false
);
function saveDate() {
  localStorage.setItem("data", list.innerHTML);
}
function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();
