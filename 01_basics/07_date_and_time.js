const myDate = new Date();
// console.log(myDate); //return 2024-01-13T07:53:13.777Z
// console.log(myDate.toString()); //return Sat Jan 13 2024 13:38:13 GMT+0545 (Nepal Time)
// console.log(myDate.toDateString()); //return Sat Jan 13 2024
// console.log(myDate.toISOString()); //2024-01-13T07:53:13.777Z
// console.log(myDate.toJSON()); //2024-01-13T07:53:13.777Z
// console.log(myDate.toLocaleString()); //1/13/2024, 1:38:13 PM
// console.log(typeof myDate); //return object
// console.log(myDate.toLocaleDateString()); //return 1/13/2024
// console.log(myDate.toLocaleTimeString()); //return 1:50:33 PM
// console.log(myDate.toTimeString()); //return 13:52:12 GMT+0545 (Nepal Time)

//console.log(Date.now()); // return the number of milliseconds elapsed since January

// let myOwnDate = new Date(2022, 1, 4, 5, 3); //returns 2/4/2022, 5:03:00 AM
//let myOwnDate = new Date("2021-2-21");//2/21/2021, 12:00:00 AM MM-DD-YY
let myOwnDate = new Date("02-21-2020");

//console.log(myOwnDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myOwnDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toLocaleString());
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
//imp
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    month: "long",
    year: "numeric",
  })
);
console.log(newDate);
