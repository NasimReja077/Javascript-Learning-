
let second = 0;
let minute = 0;
let hour = 0;
let date = new Date();

setInterval(function(){
     date = new Date();
     second = date.getSeconds() * 6;
     minute = date.getMinutes() * 6;
     hour = date.getHours() * 30 + Math.round(minute / 12);
     document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
     document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
     document.getElementById("hour-hand").style.transform =
     "rotate(" + hour + "deg)";
},1000);



// https://www.youtube.com/watch?v=RDynd1km5Qk
// https://www.youtube.com/watch?v=GvG_iMXjeUg
//https://www.youtube.com/watch?v=2glfqa-ZbNw