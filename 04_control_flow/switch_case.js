//for number
const month = 23;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feburary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("Invalid Month");
    break;
}
//for string
const days = "mon";
switch (days) {
  //case sensitive sun should not be Sun
  case "Sun":
    console.log("Sunday");
    break;
  case "mon":
    console.log("Monday");
    break;
  case "Tue":
    console.log("Tuesday");
    break;
  case "Wed":
    console.log("Wednesday");
    break;

  default:
    console.log("Today isnt that day");
    break;
}
