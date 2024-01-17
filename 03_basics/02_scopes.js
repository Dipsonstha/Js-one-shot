//{}is simply a scope
// var c = 3333333;
let a = 2000000;
if (true) {
  let a = 12;
  const b = 33;
  var c = 2222;
  console.log("Inner Scope: ", a);
}
// console.log(a);
// console.log(a);
// console.log(b);
// console.log(c);

//Scope Level
function one() {
  let name = "amar";
  function two() {
    let x = "I am inside of the inner function";
    console.log(x);
    console.log(name); //child can access its parent scope variable~
  }
  //   console.log(x); //parent cant access it child scope variable
  two();
}
// one();

if (true) {
  const userName = "dipson";
  if (userName === "dipson") {
    const website = " Google";
    console.log(userName + website);
  }
  //cant access outsid of the scope
  //   console.log(website);
}
//cant access outsid of the scope
// console.log(userName);

//***********************Simple Hoisting in JS**********************************/

console.log("Hoisted Function: ", add(5)); //can access before the func declaration
function add(num) {
  return num + 1;
}

//function holding in variable cant access before the func declaration
//console.log(add2(2)); //cant access before initilization
const add2 = function (num) {
  return num + 2;
};
console.log(add2(2));
