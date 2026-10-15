
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li");
    const taskName = document.createElement("span");
    const completeButton = document.createElement("button");

    taskName.textContent = taskText;
    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function () {
        taskName.classList.toggle("completed");

        completeButton.textContent =
            taskName.classList.contains("completed")
                ? "Undo"
                : "Complete";
    });

    taskItem.appendChild(taskName);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
});
