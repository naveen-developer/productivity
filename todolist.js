import activeLayout, { dashboardLiActive } from './main.js';

const backLink = document.querySelector('.todo-list .back-link');

if (backLink) {
    backLink.addEventListener('click', () => {
        dashboardLiActive();
        activeLayout(document.querySelector('.dashboard'));
    });
}


const getTaskItems = () => {
    return JSON.parse(localStorage.getItem('userTask')) || [];
}


//display Important task UI
const importantTaskList = document.querySelector('.todo-section.important .task-list');
const displayImportantTaskUI = () => {
    const taskItems = getTaskItems();
    const importantTaskItems = taskItems.filter((item) => item.important && !item.completed);



    let taskImportantHTML = '';
    importantTaskItems.forEach((item) => {
        taskImportantHTML += `
         <div class="task" data-id="${item.id}">
                                <span class="task-grip" aria-hidden="true">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="8" cy="6" r="1.4" />
                                        <circle cx="8" cy="12" r="1.4" />
                                        <circle cx="8" cy="18" r="1.4" />
                                        <circle cx="16" cy="6" r="1.4" />
                                        <circle cx="16" cy="12" r="1.4" />
                                        <circle cx="16" cy="18" r="1.4" />
                                    </svg>
                                </span>
                                <span class="check">
                                    <input type="checkbox" id="${item.id}">
                                    <span class="box" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12.5 9.5 17 19 7" />
                                        </svg>
                                    </span>
                                </span>
                                <label class="task-name" for="${item.id}">${item.taskName}</label>
                                <div class="task-actions">
                                    <span class="star-toggle">
                                        <input type="checkbox" checked aria-label="Mark as important">
                                        <span class="star-box" aria-hidden="true">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="1.8">
                                                <path
                                                    d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <button class="icon-action trash" type="button" aria-label="Delete task">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path
                                                d="M4 7h16M9 7V4.8c0-.6.5-1.1 1.1-1.1h3.8c.6 0 1.1.5 1.1 1.1V7M7 7l1 13.2c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3L17 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
        `

    })
    importantTaskList.innerHTML = taskImportantHTML;
}
displayImportantTaskUI()


//display Complete task UI
const completedTaskList = document.querySelector('.todo-section.completed .task-list');
const displayCompleteTaskUI = () => {
    const taskItems = getTaskItems();
    const completedTaskItems = taskItems.filter((item) => item.completed)



    let taskCompleteHTML = '';
    completedTaskItems.forEach((item) => {
        taskCompleteHTML += `
        <div class="task is-done" data-id="${item.id}">
                                <span class="check">
                                    <input type="checkbox" id="${item.id}" checked>
                                    <span class="box" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12.5 9.5 17 19 7" />
                                        </svg>
                                    </span>
                                </span>
                                <label class="task-name" for="${item.id}">${item.taskName}</label>
                                <div class="task-actions">
                                    <button class="icon-action trash" type="button" aria-label="Delete task">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path
                                                d="M4 7h16M9 7V4.8c0-.6.5-1.1 1.1-1.1h3.8c.6 0 1.1.5 1.1 1.1V7M7 7l1 13.2c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3L17 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
        `
    })
    completedTaskList.innerHTML = taskCompleteHTML;

}


//display task UI
const taskList = document.querySelector('.todo-section.list-items .task-list');
const displayTaskUI = () => {
    const taskItems = getTaskItems();
    let taskItem = '';

    taskItems.forEach((item) => {
        if (item.completed || item.important) {
            return;
        }


        taskItem += `
       <div class="task" data-id="${item.id}">
                                <span class="task-grip" aria-hidden="true">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="8" cy="6" r="1.4" />
                                        <circle cx="8" cy="12" r="1.4" />
                                        <circle cx="8" cy="18" r="1.4" />
                                        <circle cx="16" cy="6" r="1.4" />
                                        <circle cx="16" cy="12" r="1.4" />
                                        <circle cx="16" cy="18" r="1.4" />
                                    </svg>
                                </span>
                                <span class="check">
                                    <input type="checkbox" id="${item.id}">
                                    <span class="box" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12.5 9.5 17 19 7" />
                                        </svg>
                                    </span>
                                </span>
                                <label class="task-name" for="${item.id}">${item.taskName}</label>
                                <div class="task-actions">
                                    <span class="star-toggle">
                                        <input type="checkbox" aria-label="Mark as important">
                                        <span class="star-box" aria-hidden="true">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="1.8">
                                                <path
                                                    d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <button class="icon-action trash" type="button" aria-label="Delete task">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path
                                                d="M4 7h16M9 7V4.8c0-.6.5-1.1 1.1-1.1h3.8c.6 0 1.1.5 1.1 1.1V7M7 7l1 13.2c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3L17 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
       `
    })
    taskList.innerHTML = taskItem;
}




const renderUI = () => {
    displayImportantTaskUI()
    displayTaskUI();
    displayCompleteTaskUI();
}









const addTaskItem = (input) => {
    const task = input.value.trim();
    if (!task) {
        alert('Please enter the task');
        return;
    }
    const userTask = getTaskItems();
    userTask.push({
        id: Date.now(),
        taskName: task,
        important: false,
        completed: false
    })

    localStorage.setItem('userTask', JSON.stringify(userTask));
    input.value = "";
    renderUI();
}

const handleClickEvent = (event) => {

    if (!event.target.closest('.trash') && !event.target.closest('.add-btn')) {
        return;
    }
    if (event.target.closest('.trash')) {
        const taskId = Number(event.target.closest('.task').dataset.id);
        const taskList = getTaskItems();
        const updateTaskList = taskList.filter((item) => item.id !== taskId);
        localStorage.setItem('userTask', JSON.stringify(updateTaskList));
    }

    if (event.target.closest('.add-btn')) {
        const taskInput = document.querySelector('.add-input');
        addTaskItem(taskInput)

    }
    renderUI();

}


const completedTask = (event) => {

    const taskId = Number(event.target.closest('.task').dataset.id);
    const taskList = getTaskItems();
    const currentTask = taskList.find((item) => item.id === taskId);


    if (currentTask) {
        currentTask.completed = event.target.checked;
        localStorage.setItem('userTask', JSON.stringify(taskList));
        alert('task checkbox has been updated!');

    }

    renderUI();
}

const importantTask = (event) => {
    const taskId = Number(event.target.closest('.task').dataset.id);
    const taskList = getTaskItems();
    const currentTask = taskList.find((item) => item.id === taskId);


    if (currentTask) {
        currentTask.important = event.target.checked;
        localStorage.setItem('userTask', JSON.stringify(taskList));
        alert('task important checkbox has been updated!');

    }
    renderUI();
}

const handleChangeEvent = (event) => {
    if (!event.target.closest('.check input') && !event.target.closest('.star-toggle input')) {
        return;
    }
    if (event.target.closest('.check input')) {
        completedTask(event)
    }

    if (event.target.closest('.star-toggle input')) {
        importantTask(event)
    }

}

const attachEvents = () => {
    const todoListPage = document.querySelector('.todo-list');
    todoListPage.addEventListener('click', handleClickEvent)
    todoListPage.addEventListener('change', handleChangeEvent)

}

attachEvents()
renderUI();


