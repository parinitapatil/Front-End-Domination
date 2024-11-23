const taskInp = document.querySelector('#taskInp')
const addBtn = document.querySelector('#addBtn')
const taskList = document.querySelector('#tasklist')

// saving data
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTask();
// add task
addBtn.addEventListener('click', () => {
    const taskText = taskInp.value.trim();
    if (taskText === '') {
        alert("Please enter a Task!");
        return;
    }
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTask();
    taskInp.value = '';
})

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// render task in ul - show task
function renderTask(){
    taskList.innerHTML = '';
    tasks.forEach((task , index )=> {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `<span onclick="toggleTask(${index})">${task.text}</span>
        <div><button id="delBtn" onclick="deleteTask(${index})">Delete</button>
</div>`;
        taskList.appendChild(li);
    });
}

// task completion toggle
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTask();
}
 
// delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTask();
 }