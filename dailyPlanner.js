import activeLayout from './main.js';

const backLink = document.querySelector('.daily-planner .back-link');

if (backLink) {
    backLink.addEventListener('click', () => {
        activeLayout(document.querySelector('.dashboard'));
    });
}

//by default object
const dailyPlanner = {
    schedule: [
        {
            id: 1,
            time: "8:00 AM",
            task: "Morning Routine start"
        },
        {
            id: 2,
            time: "9:00 AM",
            task: "Team Stand-up Meeting"
        },
        {
            id: 3,
            time: "10:00 AM",
            task: "Development Work",
            current: true
        },
        {
            id: 4,
            time: "11:00 AM",
            task: "Accessibility Study"
        },
        {
            id: 5,
            time: "12:00 PM",
            task: "Lunch Break"
        },
        {
            id: 6,
            time: "1:00 PM",
            task: "Project Work"
        },
        {
            id: 7,
            time: "2:00 PM",
            task: "Code Review"
        },
        {
            id: 8,
            time: "3:00 PM",
            task: "Documentation"
        },
        {
            id: 9,
            time: "4:00 PM",
            task: "Learning Time"
        },
        {
            id: 10,
            time: "5:00 PM",
            task: "Exercise / Walk"
        },
        {
            id: 11,
            time: "6:00 PM",
            task: "Personal Time"
        }
    ]

};

const toSetDumyDataOnLocalStorage = () => {
    localStorage.setItem('dailyPlanner', JSON.stringify(dailyPlanner));
}
//toSetDumyDataOnLocalStorage();

const getDatafromLocal = (item) => {
    return JSON.parse(localStorage.getItem(item))
}


const dailyPlannerUI = () => {
    const localStorageData = getDatafromLocal('dailyPlanner');
    if (!localStorageData) {
        return;
    }
    const plannerLists = document.querySelector('.planner-list');

    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });







    let plannerListHTML = '';
    localStorageData.schedule.forEach((item) => {

        const currentHour = currentTime.split(':')[0]
        const plannerHour = item.time.split(':')[0];

        const currentAMPM = currentTime.split(" ")[1];
        const plannerAMPM = item.time.split(" ")[1];
        const activeClass = (currentHour === plannerHour) && (currentAMPM === plannerAMPM) ? 'active' : '';

        plannerListHTML += `
        <div class="planner-row ${activeClass}">
                                    <span class="planner-time"><span class="dot"></span>${item.time}</span>
                                    <div class="planner-field">
                                        <input id="${item.id}" class="planner-input" type="text" value="${item.task}"
                                            aria-label="Plan for ${item.time}">
                                    </div>
                                    <button class="planner-menu-btn" type="button"
                                        aria-label="More options for  ${item.time}">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="5" r="1.6" />
                                            <circle cx="12" cy="12" r="1.6" />
                                            <circle cx="12" cy="19" r="1.6" />
                                        </svg>
                                    </button>
                                </div>
        `
    })
    plannerLists.innerHTML = plannerListHTML;
}
dailyPlannerUI();




const debouncing = (input) => {
    let debouncingTimer;
    input.addEventListener('input', (event) => {


        clearTimeout(debouncingTimer);

        debouncingTimer = setTimeout(() => {

            const inputId = event.target.id;

            const data = getDatafromLocal('dailyPlanner');

            const dailyPlannerId = data.schedule.find((item) => item.id === Number(inputId))
            if (dailyPlannerId) {
                dailyPlannerId.task = event.target.value;
            }
            localStorage.setItem('dailyPlanner', JSON.stringify(data));
        }, 500)
    })
}

//Edit Task
const editTask = () => {

    const taskInputs = document.querySelectorAll('.planner-input');
    taskInputs.forEach((item) => {

        debouncing(item);
    })
}
editTask()

//date display
const currentDate = new Date();

const displayDate = () => {
    const dateFormat = currentDate.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
    const currentDateElement = document.querySelector('.currentDate');
    currentDateElement.innerText = dateFormat;
}
displayDate();

const previousBtnElement = document.querySelector('.date-nav-btn.previous');
previousBtnElement.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    displayDate();
});

const nextBtnElement = document.querySelector('.date-nav-btn.next');
nextBtnElement.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    displayDate();
});
