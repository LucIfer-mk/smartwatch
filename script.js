// for showing the current date
function showDate(){
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2,)+1;
    const year = date.getFullYear().toString().padStart(2, '0');
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = dayNames[date.getDay()];
    document.getElementById('date').textContent = `${dayName} ${day}/${month}/${year}`;
}
showDate();
// for showing the current time
function showTime(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const timeNow = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent =timeNow;
}
showTime();
setInterval(showTime, 1000);
// For Navegating to pages
function pageland(pageId){
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}
// For stop watch
let display = document.getElementById('stopwatchContainer')
let timer = null;
let startTime=0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now()-elapsedTime
        timer = setInterval(update,10)
        isRunning= true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime
        isRunning = false;
    }
}
function reset(){
    clearInterval();
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent ="00:00:00:00"
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime/ (1000 * 60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 /10 );
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliSeconds = String(milliSeconds).padStart(2,"0");
    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}