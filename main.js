const dashboard = document.querySelector('.dashboard');
const todoList = document.querySelector('.todo-list');
const dailyPlanner = document.querySelector('.daily-planner');
const motivationQuote = document.querySelector('.motivation-quote');
const pomodoroTimer = document.querySelector('.pomodoro-timer');
const weatherForecast = document.querySelector('.weather-forecast');



const activeLayout = (activeLayout) => {
    if (!activeLayout) {
        console.error(`${activeLayout} is not available`);
        return;
    }
    [dashboard, todoList, dailyPlanner, motivationQuote, pomodoroTimer, weatherForecast].forEach((elem) => elem.style.display = 'none');
    activeLayout.style.display = 'block';
}
//by default running layout
activeLayout(dashboard);


const layouts = {
    dashboard,
    todolist: todoList,
    planner: dailyPlanner,
    pomodoro: pomodoroTimer,
    motivation: motivationQuote,
    weather: weatherForecast
};

const primeNavigationListItems = document.querySelectorAll('.prime-nav li button');

primeNavigationListItems.forEach((item) => {
    item.addEventListener('click', () => {

        primeNavigationListItems.forEach((item) => item.classList.remove('active'));
        item.classList.add('active')
        activeLayout(layouts[item.dataset.layout]);
    })
})


document.querySelector('.quick-card.todo_list').addEventListener('click', () => {
    activeLayout(todoList);
    primeNavigationListItems.forEach((item) => item.classList.remove('active'));
    document.querySelector('.nav-item.todo_list').classList.add('active')

})

document.querySelector('.quick-card.daily_planner').addEventListener('click', () => {
    activeLayout(dailyPlanner);
    primeNavigationListItems.forEach((item) => item.classList.remove('active'));
    document.querySelector('.nav-item.daily_planner').classList.add('active')

})

document.querySelector('.quick-card.pomodoro').addEventListener('click', () => {
    activeLayout(dailyPlanner);
    primeNavigationListItems.forEach((item) => item.classList.remove('active'));
    document.querySelector('.nav-item.pomodoro').classList.add('active')

})

document.querySelector('.quick-card.weather').addEventListener('click', () => {
    activeLayout(dailyPlanner);
    primeNavigationListItems.forEach((item) => item.classList.remove('active'));
    document.querySelector('.nav-item.weather').classList.add('active')

})

document.querySelector('.quick-card.motivation').addEventListener('click', () => {
    activeLayout(dailyPlanner);
    primeNavigationListItems.forEach((item) => item.classList.remove('active'));
    document.querySelector('.nav-item.motivation').classList.add('active')

})


const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
});

const currentDay = new Date().toLocaleDateString('en-IN', {
    dateStyle: 'full'
});


const currentHour = new Date().getHours();
let timeOfDay = null;
if (currentHour >= 6 && currentHour < 12) {
    //console.log("Good morning");
    timeOfDay = 'Morning';
} else if (currentHour >= 12 && currentHour < 17) {
    //console.log("Good afternoon");
    timeOfDay = 'Afternoon';
} else {
    //console.log("Good evening");
    timeOfDay = 'Evening';
}

document.querySelector('.greeting h1').innerHTML = `Good ${timeOfDay}, Naveen! <span aria-hidden="true">👋</span>`;

document.querySelector('.info-grid .big').innerText = currentTime;
document.querySelector('.info-grid .sub').innerText = currentDay;

export default activeLayout;