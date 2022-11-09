var counter = document.getElementById("timer");
var check = document.getElementById("check");

var seconds = 0;
var minutes = 0;
var date = new Date();
var lastDay;
var lastHours;
var lastMins;
var lastSecs;

var lastTimeSec = sessionStorage.getItem("seconds");
var lastTimeMin = sessionStorage.getItem("minutes");
var lastDate = new Date(localStorage.getItem("date"));

if (lastTimeSec || lastTimeMin) {
    seconds = Number(lastTimeSec);
    minutes = Number(lastTimeMin);
    lastDay = lastDate.getDate();
    lastHours = lastDate.getHours();
    lastMins = lastDate.getMinutes();
    lastSecs = lastDate.getSeconds();
}

if (lastSecs || lastMins || lastHours || lastDay ) {
    check.innerHTML = "Sono passati " + (date.getDate() - lastDay) + " giorni, " + (date.getHours() - lastHours) + " ore, " + (date.getMinutes() - lastMins) + " minuti e " + (date.getSeconds() - lastSecs) + " secondi dalla tua ultima visita";
}
function timer() {
    
    let interval = setInterval( () =>  {
        date = new Date();
        counter.innerHTML = `Tempo: ${minutes} min ${seconds} sec`;    
        seconds++;
        if (seconds == 60) {
        minutes++;
        seconds = 0;
        }
        sessionStorage.setItem("seconds", seconds);
        sessionStorage.setItem("minutes", minutes);
        localStorage.setItem("date", date);
    }, 1000);        
}

document.addEventListener("DOMContentLoaded", timer);

