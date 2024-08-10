const taskList = [];

function addTask() {
    const taskInputElement = document.querySelector('.js-task-input');
    taskList.push(taskInputElement.value);

    _renderHTML();

    taskInputElement.value = '';
}

function _renderHTML() {
    let html = '';

    taskList.forEach(task => {
        html += `<p>${task}</p>`;
    });

    const taskListElement = document.querySelector('.js-task-list');
    taskListElement.innerHTML = html;
}