//color in hex value

function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(randomColor());
let intervalId;

const StartChangingColor = function () {
  if (!intervalId) {
    //if its null then changes bgColor
    intervalId = setInterval(BgColorChange, 2000);
  }
  function BgColorChange() {
    document.body.style.backgroundColor = randomColor();
  }
};

const StopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; //sets interval id null
  console.log("Stopped Changing Color");
};

document.querySelector("#start").addEventListener("click", StartChangingColor);

document.querySelector("#stop").addEventListener("click", StopChangingColor);
