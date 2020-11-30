function Countdown(){
    var curr = new Date();
    var upto = new Date(2021, 10, 16);
    var currTime = curr.getTime();
    var uptoTime = upto.getTime();
    var remTime = uptoTime - currTime;
    var seconds = Math.floor(remTime / 1000);
    var  days = Math.floor(seconds / (60*60*24));
    seconds -= (days*60*60*24);
    var hours = Math.floor(seconds / (60*60));
    seconds -= (hours*60*60);
    var minutes = Math.floor(seconds / 60);
    seconds -= (minutes*60);
    days = (days<10) ? "0" + days : days;
    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    setTimeout(Countdown, 1000);
}
Countdown();
