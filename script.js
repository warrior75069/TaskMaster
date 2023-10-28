function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  
  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTask(this)">
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    input.value = "";
  }
}

function toggleTask(checkbox) {
  const taskText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    taskText.classList.add("completed");
  } else {
    taskText.classList.remove("completed");
  }
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}
