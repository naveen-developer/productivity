import activeLayout from './main.js';

const backLink = document.querySelector('.pomodoro-timer .back-link');

if (backLink) {
    backLink.addEventListener('click', () => {
        activeLayout(document.querySelector('.dashboard'));
    });
}



let minutes = 25;
let seconds = 0;
const timerCountdownElement = document.querySelector('.timer-countdown');
const timerRingProgressElement = document.querySelector('.timer-ring-progress');
const startBtn = document.querySelector('.pomodoro-actions .start');
const pauseBtn = document.querySelector('.pomodoro-actions .pause');
const resetBtn = document.querySelector('.pomodoro-actions .reset');

pauseBtn.disabled = true;
resetBtn.disabled = true;

let timer;
const totalSeconds = (minutes * 60) + seconds;
const timerTask = () => {
    timer = setInterval(function () {
        const currentSeconds = (minutes * 60) + seconds;

        let progress = (totalSeconds - currentSeconds) / totalSeconds;

        //console.log(progress * 360)

        let angle = progress * 360;

        timerRingProgressElement.style.transform = `rotate(${angle}deg)`;

        // console.log(
        //     `Timer ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
        // );
        timerCountdownElement.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        // Stop at 00:00
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert("Time's Up!");
            return;
        }

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

    }, 1000);
}

const pomodoroActionBtn = document.querySelectorAll('.pomodoro-actions button');

startBtn.addEventListener('click', () => {
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    timerTask();



    pomodoroActionBtn.forEach((item) => item.classList.remove('active'))

    startBtn.classList.add('active');


})

resetBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    pomodoroActionBtn.forEach((item) => item.classList.remove('active'))

    resetBtn.classList.add('active');

    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    timerCountdownElement.innerText =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timerRingProgressElement.style.transform = `rotate(0deg)`;


})


pauseBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    clearInterval(timer);

    pomodoroActionBtn.forEach((item) => item.classList.remove('active'))

    pauseBtn.classList.add('active');
})


