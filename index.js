// Function to create a new task
function createTask() {
    const newTaskInput = document.getElementById("newTaskInput");
    const taskText = newTaskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
  
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
          <button class="complete-button">Complete</button>
          <button class="delete-button">Delete</button>
        </div>
      `;
  
      const completeButton = taskItem.querySelector(".complete-button");
      const deleteButton = taskItem.querySelector(".delete-button");
  
      completeButton.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
      });
  
      deleteButton.addEventListener("click", function () {
        taskItem.remove();
      });
  
      taskList.appendChild(taskItem);
  
      newTaskInput.value = "";
    }
  }
  
  // Function to filter tasks based on search input
  function filterTasks() {
    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value.toLowerCase();
  
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByTagName("li");
  
    Array.from(tasks).forEach(function (taskItem) {
      const taskText = taskItem.querySelector(".task-text").textContent.toLowerCase();
  
      if (taskText.includes(searchText)) {
        taskItem.style.display = "";
      } else {
        taskItem.style.display = "none";
      }
    });
  }
 // Event listener for creating a new task
const newTaskInput = document.getElementById("newTaskInput");
newTaskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createTask();
  }
});

// Event listener for filtering tasks
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterTasks);
