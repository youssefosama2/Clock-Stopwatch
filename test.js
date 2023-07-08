
function showTime(){
var d = new Date();
var houers = d.getHours();
var minute = d.getMinutes();
var Seconds = d.getSeconds();
var p = "AM";

minute = (minute < 10) ? "0" + minute : minute;
Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;
houers = (houers > 12) ? houers - "12" :houers;

p = (houers < 12) ? p = "PM" : p;

var Time = `${houers} : ${minute} : ${Seconds} ${p}`;
document.getElementById("clock").innerHTML = Time;
setTimeout(showTime , 1000);
}
showTime()

function date(){
var d = new Date();

    var day = d.getDay();
    var Month = d.getMonth();
    var year = d.getFullYear();
    Month = Month + 1;
    day = day + 2;
    var date = `${day} / ${Month} / ${year}`;
    document.getElementById("Date").innerHTML = date;
}date()




let [seconds, minute, houers] =[0, 0, 0];
let getSeconds = document.getElementById("seconds")
let getminute = document.getElementById("minute")
let gethouers = document.getElementById("houers")


function stopwatch(){
    let Timer = setInterval(() => {
       seconds++;
       getSeconds.innerHTML = seconds;
    if(seconds == 59){
        seconds = 0;
        minute++;
    getminute.innerHTML = minute;
    }
    if(minute == 59){
        minute = 0;
        houers++;
        gethouers.innerHTML = houers;
    }
    function reset() {
        seconds = "00";
        minute = "00";
        houers = "00";
       getSeconds.innerHTML = seconds;
       getminute.innerHTML = minute;
       gethouers.innerHTML = houers;
       clearInterval(Timer);
    }    
    resetbtn.addEventListener('click', () =>{
        reset()
    })
    stopbtn.addEventListener('click', () =>{
        clearInterval(Timer);
    })
},1000)
}
startbtn.addEventListener('click', () =>{
    stopwatch()
})