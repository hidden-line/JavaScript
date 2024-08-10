const $todoList = [];

document.querySelector('.js-add-btn').addEventListener('click', () => {
    addTask();
});

function addTask() {
    const taskInputElement = document.querySelector('.js-task-input');
    const dateInputElement = document.querySelector('.js-date-input');

    $todoList.push({
        task: taskInputElement.value,
        date: dateInputElement.value
    });

    _renderHTML();

    taskInputElement.value = '';
    dateInputElement.value = '';
    
    _showDoneMsg('js-done-msg', 'Added!');
}

function removeTodo(idx) {
    $todoList.splice(idx, 1);
    
    _renderHTML();
    _showDoneMsg('js-done-msg', 'Deleted!');
}

function _showDoneMsg(id, msg) {
    const doneMsgElement = document.querySelector(`.${id}`);
    doneMsgElement.innerHTML = msg;

    setTimeout(() => {
        doneMsgElement.innerHTML = '';
    }, 5000);
}

function _renderHTML() {
    let html = '';

    for (let i = 0; i < $todoList.length; i++) {
        html += `
            <div>${$todoList[i].task}</div>
            <div>${$todoList[i].date}</div>
            <button onclick="removeTodo(${i})" class="delete-btn">Delete</button>
        `;
    }

    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = html;
}