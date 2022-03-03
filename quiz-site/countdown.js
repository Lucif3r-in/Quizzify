// const minsEl = document.getElementById("mins");
// const secondsEl = document.getElementById("seconds");

// const newYears = '1 Jan 2023';
 
// function countdown(){
//     // const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const totalSeconds = (newYearsDate - currentDate)/1000;
    
//     // const days = Math.floor(totalSeconds / 3600 /24);
//     // const hours = Math.floor(totalSeconds / 3600) %24;
//     const mins = Math.floor(totalSeconds / 60) %60;
//     const seconds = Math.floor(totalSeconds) %60;
    
//     // daysEl.innerHTML = days;
//     // hoursEl.innerHTML = formatTime(hours);
//     minsEl.innerHTML = formatTime(mins);
//     secondsEl.innerHTML = formatTime(seconds);

//     // console.log(days, hours, minutes,seconds);
// }

// function formatTime(time){
//     return time < 10 ? `0${time}` : time;
// }

// countdown();

// setInterval(countdown, 1000);

var count = 600;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);