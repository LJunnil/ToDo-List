// Simple ToDo List in Pure JavaScript

// Function to add a new task
function addTask() {
    var taskInput = prompt("Enter a new task:");
    if (taskInput !== null && taskInput.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskInput}</span>
            <button onclick="toggleCompletion(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        document.getElementById("taskList").appendChild(newTask);
    } else {
        alert("Please enter a valid task.");
    }
}

// Function to toggle task completion
function toggleCompletion(button) {
    var task = button.parentElement;
    task.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(button) {
    var task = button.parentElement;
    task.remove();
}

// Example usage:
// Add initial tasks
addTask();
addTask();
addTask();
