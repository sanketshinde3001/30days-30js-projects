var count = new Date("Jan 15, 2024 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = count - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("d1").innerHTML = days;
  document.getElementById("d2").innerHTML = hours;
  document.getElementById("d3").innerHTML = minutes;
  document.getElementById("d4").innerHTML = seconds;

},1000);
