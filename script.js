
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Listen for when the user submits the form
taskForm.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the task text and remove extra spaces
    const taskText = taskInput.value.trim();

    // Do not add an empty task
    if (taskText === "") {
        return;
    }

    // Create the task elements
    const taskItem = document.createElement("li");
    const taskName = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // Set the task name and button labels
    taskName.textContent = taskText;
    completeButton.textContent = "Complete";
    deleteButton.textContent = "Delete";

    // Mark the task as completed or undo completion
    completeButton.addEventListener("click", function () {
        taskName.classList.toggle("completed");

        completeButton.textContent =
            taskName.classList.contains("completed")
                ? "Undo"
                : "Complete";
    });

    // Delete the selected task
    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });

    // Add the task name and buttons to the task item
    taskItem.appendChild(taskName);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    // Display the task in the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
});
