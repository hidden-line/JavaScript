const todoList = [];

document.querySelector('.js-add-btn').addEventListener('click', () => {
    addTask();
});

function addTask() {
    const taskInputElement = document.querySelector('.js-task-input');
    const dateInputElement = document.querySelector('.js-date-input');

    todoList.push({
        task: taskInputElement.value,
        date: dateInputElement.value
    });

    renderHTML();

    taskInputElement.value = '';
    dateInputElement.value = '';
    
    showDoneMsg('js-done-msg', 'Added!');
}

function removeTodo(idx) {
    todoList.splice(idx, 1);
    
    renderHTML();
    showDoneMsg('js-done-msg', 'Deleted!');
}

function showDoneMsg(id, msg) {
    const doneMsgElement = document.querySelector(`.${id}`);
    doneMsgElement.innerHTML = msg;

    setTimeout(() => {
        doneMsgElement.innerHTML = '';
    }, 5000);
}

function renderHTML() {
    let html = '';

    todoList.forEach(todo => {
        html += `
            <div>${todo.task}</div>
            <div>${todo.date}</div>
            <button class="delete-btn js-delete-btn">Delete</button>
        `;
    });

    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = html;

    const deleteBtnElements = document.querySelectorAll('.js-delete-btn');

    deleteBtnElements.forEach((btnElement, index) => {
        btnElement.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderHTML();
            showDoneMsg('js-done-msg', 'Deleted!');
        });
    });
}