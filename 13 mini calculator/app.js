var vdate = document.getElementById("date");
var vday = document.getElementById("day");
var vmonth = document.getElementById("month");
var vyear = document.getElementById("year");

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


let cdate = new Date();
vdate.innerHTML = cdate.getDate();
vday.innerHTML = daysOfWeek[cdate.getDay()];
vmonth.innerHTML = monthNames[cdate.getMinutes()];
vyear.innerHTML=cdate.getFullYear();



