document.addEventListener('DOMContentLoaded', function () {
    const tasksList = document.getElementById('tasks__list');
    const tasksForm = document.getElementById('tasks__form');
    const taskInput = document.getElementById('task__input');

    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });

    const addButton = document.getElementById('tasks__add');
    addButton.addEventListener('click', function (event) {
        event.preventDefault();
        addTask();
    });

    tasksList.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('task__remove')) {
            event.preventDefault();
            removeTask(target.closest('.task'));
        }
    });

    function addTask() {
        const taskTitle = taskInput.value.trim();

        if (taskTitle !== '') {
            const taskElement = createTaskElement(taskTitle);
            tasksList.appendChild(taskElement);
            taskInput.value = '';
        }
    }

    function createTaskElement(title) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskTitleElement = document.createElement('div');
        taskTitleElement.classList.add('task__title');
        taskTitleElement.textContent = title;

        const removeButton = document.createElement('a');
        removeButton.href = '#';
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';

        taskElement.appendChild(taskTitleElement);
        taskElement.appendChild(removeButton);

        return taskElement;
    }

    function removeTask(taskElement) {
        tasksList.removeChild(taskElement);
    }
});
