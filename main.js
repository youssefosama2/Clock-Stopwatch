
function showTime(){
const d = new Date();
var houers = d.getHours();
var minute = d.getMinutes();
var Seconds = d.getSeconds();
var p = "AM";

minute = (minute < 10) ? "0" + minute : minute;
Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;
p = (houers > 12) ? p = "PM" : p;
houers = (houers > 12) ? houers - "12" :houers;
houers = (houers == 0) ? houers = "12" :houers;
var Time = `${houers} : ${minute} : ${Seconds} ${p}`;
document.getElementById("clock").innerHTML = Time;
setTimeout(showTime , 1000);
}
showTime()
function date(){
    var d = new Date();
    var day = d.getDate();
    var Month = d.getMonth();
    var year = d.getFullYear();
    var date = `${day} / ${Month + 1} / ${year}`;
    document.getElementById("Date").innerHTML = date;
}date()




let [seconds, minute, houers] =[0, 0, 0];
let getSeconds = document.getElementById("seconds")
let getminute = document.getElementById("minute")
let gethouers = document.getElementById("houers")

function stopwatch(){
    let Timer = setInterval(() => {
       seconds++;
       seconds = (seconds < 10) ? "0" + seconds : seconds ;
       getSeconds.innerHTML = seconds;
    if(seconds == 59){
        seconds = 0;
        minute++;
        minute = (minute < 10) ? "0" + minute : minute ;
       getminute.innerHTML = minute;
    }
    if(minute == 59){
        minute = 0;
        houers++;
       houers = (houers < 10) ? "0" + houers : houers ;
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
        startbtn.disabled = false;
})
    stopbtn.addEventListener('click', () =>{
        clearInterval(Timer);
        startbtn.disabled = false;
    })
},1000)
}
startbtn.addEventListener('click', () =>{
    stopwatch()
    startbtn.disabled = true ;
})
