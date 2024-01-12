const number = 344;
// console.log(number); //Js engine automatically understand that its number
// console.log(typeof number);
//i.e Numbers only otherwise NaN
const secondNumber = new Number(44); //It represents that its only number
// console.log(secondNumber);
// console.log(typeof secondNumber);

const total = 432;
// console.log(total.toFixed(3)); //return 3 digit after decimal
// console.log(total.toExponential(2)); //returns in decimal after 1st digit with exponential
// console.log(total.toPrecision(4));
// /* It gives the precision of how many digits we want to show before and after the decimal */
// console.log(total.toString().length); //converts into string and print the length

const newnumber = 234444;
//seprates numbers with coma (,)
// console.log(newnumber.toLocaleString()); //By default US standards
// console.log(newnumber.toLocaleString("en-In")); // Converting into indian standards

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.abs(-4)); //converts -ve into +ve
// console.log(Math.floor(4.6)); //4 cause it returns lower value no matter how big is decimal
// console.log(Math.round(4.6)); //5 cause it after.5 it returns greater value
//console.log(Math.ceil(4.1)); //5 cause after . it returns greater value

///////////////////////////////
console.log(Math.random()); //generates random from 0 to 1
console.log(Math.random() * 10); // random from 0 to 10
console.log(Math.random() * 10 + 1); // random from 1 to 10
console.log(Math.floor(Math.random() * 10 + 1)); // random from 1 to 10 without decimals
const min = 11;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random from 11 to 20
console.log(Math.floor(Math.random() * (max - min + 1))); //prints form 0 to 10
