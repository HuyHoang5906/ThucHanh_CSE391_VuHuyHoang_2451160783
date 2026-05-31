let tasks = [];

let editId = null;

const btnAdd = document.getElementById("btnAdd");
const popup = document.getElementById("popup");
const btnClose = document.getElementById("btnClose");
const taskForm = document.getElementById("taskForm");

const taskList = document.getElementById("taskList");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline");
const priorityInput = document.getElementById("priority");

const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");
const pendingTask = document.getElementById("pendingTask");

const messageBox = document.getElementById("message");
const formTitle = document.getElementById("formTitle");

loadTasks();
renderTasks();
updateTaskSummary();

btnAdd.addEventListener("click", () => {

    popup.classList.add("show");

    taskForm.reset();

    editId = null;

    formTitle.textContent = "Thêm Công Việc";
});

btnClose.addEventListener("click", () => {
    popup.classList.remove("show");
});

taskForm.addEventListener("submit", function(e){

    e.preventDefault();

    const taskData = {
        id: editId || Date.now(),
        title: titleInput.value,
        description: descriptionInput.value,
        deadline: deadlineInput.value,
        priority: priorityInput.value,
        completed: false
    };

    if(editId){

        const index = tasks.findIndex(
            task => task.id === editId
        );

        taskData.completed =
            tasks[index].completed;

        tasks[index] = taskData;

        showMessage("Cập nhật thành công");

    }else{

        tasks.push(taskData);

        showMessage("Thêm công việc thành công");
    }

    saveTasks();
    renderTasks();
    updateTaskSummary();

    popup.classList.remove("show");
});

function renderTasks(){

    if(tasks.length === 0){

        taskList.innerHTML =
        "<h3>Chưa có công việc nào.</h3>";

        return;
    }

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const card = document.createElement("div");

        card.className =
        `task-card ${
            task.completed ? "completed" : ""
        }`;

        card.innerHTML = `
            <h3>${task.title}</h3>

            <p>
                <strong>Mô tả:</strong>
                ${task.description}
            </p>

            <p>
                <strong>Hạn:</strong>
                ${task.deadline}
            </p>

            <p>
                <strong>Ưu tiên:</strong>
                ${task.priority}
            </p>

            <div class="actions">

                <button
                    class="status-btn"
                    onclick="toggleStatus(${task.id})"
                >
                    ${
                        task.completed
                        ? "Chưa hoàn thành"
                        : "Hoàn thành"
                    }
                </button>

                <button
                    class="edit-btn"
                    onclick="editTask(${task.id})"
                >
                    Sửa
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})"
                >
                    Xóa
                </button>

            </div>
        `;

        taskList.appendChild(card);
    });
}

function editTask(id){

    const task = tasks.find(
        task => task.id === id
    );

    if(!task) return;

    editId = id;

    titleInput.value = task.title;
    descriptionInput.value = task.description;
    deadlineInput.value = task.deadline;
    priorityInput.value = task.priority;

    formTitle.textContent =
    "Cập Nhật Công Việc";

    popup.classList.add("show");
}

function deleteTask(id){

    const confirmDelete = confirm(
        "Bạn có chắc muốn xóa?"
    );

    if(!confirmDelete) return;

    tasks = tasks.filter(
        task => task.id !== id
    );

    saveTasks();
    renderTasks();
    updateTaskSummary();

    showMessage("Xóa thành công");
}

function toggleStatus(id){

    const task = tasks.find(
        task => task.id === id
    );

    task.completed = !task.completed;

    saveTasks();
    renderTasks();
    updateTaskSummary();

    showMessage("Đã cập nhật trạng thái");
}

function updateTaskSummary(){

    totalTask.textContent =
    tasks.length;

    completedTask.textContent =
    tasks.filter(
        task => task.completed
    ).length;

    pendingTask.textContent =
    tasks.filter(
        task => !task.completed
    ).length;
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function loadTasks(){

    const data =
    localStorage.getItem("tasks");

    if(data){

        tasks = JSON.parse(data);
    }
}

function showMessage(text){

    messageBox.textContent = text;

    setTimeout(() => {

        messageBox.textContent = "";

    }, 2000);
}