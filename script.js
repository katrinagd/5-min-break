const startButton = document.querySelector('#startButton');
const video = document.querySelector('#myVideo');
const audio = document.querySelector('#player');
let timerID;
let isPlaying = false;

// Pause the video and audio when the page is loaded
video.pause();
audio.pause();

startButton.addEventListener('click', function () {
    if (!isPlaying) {
        startTimer();
        video.play();
        audio.play();
        startButton.textContent = 'Pause';
    } else {
        pauseTimer();
        video.pause();
        audio.pause();
        startButton.textContent = 'Continue';
    }
    isPlaying = !isPlaying;
});

const timer = 5;
let amountTime = timer * 60;

function startTimer() {
    timerID = setInterval(calculateTime, 1000);
}

function pauseTimer() {
    clearInterval(timerID);
}

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
        document.querySelector('#myVideo').pause();
        document.querySelector('#player').pause();
        window.location.reload(); // Reload the page
    }
}

function stopTimer() {
    pauseTimer();
    isPlaying = false;
}
