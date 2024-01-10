let score = 33;

//console.log(typeof score);
//console.log(typeof (score));
//console.log(score);

let valueinNumber = Number(score);

//console.log(typeof valueinNumber);
//console.log(valueinNumber);

//"33" => 33
//"33abc" => not a number NaN
// true = 1; false = 0;
//null= 0
//undefined = NaN

let isLoggedIn = "hello"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true; 0 => false 
// "" => false "hello" => true

let number = 44
//console.log(number)
let stringNumber = String(number);
//console.log(stringNumber)
//console.log(typeof stringNumber)

/******************Operations******************/
let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
// console.log(str3)

let num1 = 1 + "1"
let num2 = 1 + "1" + 1
let num3 = 1 + 1 + "1"
// console.log(num1)
// console.log(num2)
// console.log(num3)

let increment =4
// console.log(increment++)
// console.log(++increment)
let a = 4
let b = 5 + ++a
console.log(b)
let c = b++ + 1
console.log(b)
console.log(c)