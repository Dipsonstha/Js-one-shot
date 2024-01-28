const clock = document.getElementById("clock");
const day = document.getElementById("date");

setInterval(function () {
  let date = new Date();
  day.innerHTML = date.toDateString();

  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
