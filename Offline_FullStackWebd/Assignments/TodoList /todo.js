const newtask = document.getElementById("newtask");
const addtask = document.getElementById("addtask");
const todolist = document.getElementById("todolist");

addtask.addEventListener("click", function () {
  let div = document.createElement("div");
  let xbtn = document.createElement("button");
  let taskspan = document.createElement("span");
  let upBtn = document.createElement("button");
  let dnBtn = document.createElement("button");
  const todo = newtask.value;

  if (!todo) {
    alert("Please enter a task");
  } else {
    //Giving info to the buttons
    taskspan.innerText = todo;
    xbtn.innerText = "x";
    upBtn.innerText = "ᴧ";
    dnBtn.innerText = "v";

    //adding classes
    taskspan.classList.add("show");
    xbtn.classList.add("btn");
    upBtn.classList.add("btn");
    dnBtn.classList.add("btn");

    //setting on click listner for each button
    xbtn.onclick = function (event) {
      event.target.parentElement.remove();
    };

    /*
  event.target --  button
  event.target.parentElement -- the <li> element
  event.target.parentElement.parentElement -- the todo list
  */
    upBtn.onclick = function (event) {
      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement,
        event.target.parentElement.previousElementSibling
      );
    };

    dnBtn.onclick = function (event) {
      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement.nextElementSibling,
        event.target.parentElement
      );
    };

    //adding all things inside the li element
    div.appendChild(taskspan);
    div.appendChild(xbtn);
    div.appendChild(upBtn);
    div.appendChild(dnBtn);
    todolist.appendChild(div);

    newtask.value = "";
  }
});
