let form = document.getElementsByTagName("form")[0];
let taskList = document.querySelector("#tasks");
let filter = document.querySelector("#filter");
console.log(form);

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
filter.addEventListener("keyup", filterTasks);

function addTask(event) {
  event.preventDefault();
  let newTask = document.querySelector("#task").value;
  console.log(newTask);

  let li = document.createElement("li");
  li.innerHTML = `${newTask} <button class="btn btn-danger btn-sm float-right delete">X</button>`;
  li.className = "list-group-item";
  console.log(li);
  taskList.appendChild(li);
}

function removeTask(event) {
  console.log(event.target);
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure?"))
      taskList.removeChild(event.target.parentElement);
  }
}
function filterTasks(event) {
  console.log(event.target);
  let keyword = event.target.value.toLowerCase();
  console.log(keyword);
  let tasks = document.getElementsByTagName("li");

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i].firstChild.textContent.toLowerCase();
    console.log(task);
    // if (task.startsWith(keyword)) {
    if (task.indexOf(keyword)!=-1) {
      tasks[i].style.display = "block";
    }
    else{
        tasks[i].style.display ="none"
    }
  }
}
