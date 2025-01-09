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