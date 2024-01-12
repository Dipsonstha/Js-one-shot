const number = 344;
// console.log(number); //Js engine automatically understand that its number
// console.log(typeof number);
//i.e Numbers only otherwise NaN
const secondNumber = new Number(44); //It represents that its only number
// console.log(secondNumber);
// console.log(typeof secondNumber);

const total = 432;
console.log(total.toFixed(3)); //return 3 digit after decimal
console.log(total.toExponential(2)); //returns in decimal after 1st digit with exponential
console.log(total.toPrecision(4));
/* It gives the precision of how many digits we want to show before and after the decimal */
console.log(total.toString().length); //converts into string and print the length

const newnumber = 234444;
//seprates numbers with coma (,)
console.log(newnumber.toLocaleString()); //By default US standards
console.log(newnumber.toLocaleString("en-In")); // Converting into indian standards
