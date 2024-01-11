//2 types of data Types
//Primitive and Non-Primitive

//Primitive (They are call by value)
//7 types: number,string,boolean,undefine,null,bigInt,symbol
let number = 34; //return type number
let name = "javaScript"; //return type string
let isUser = true; //return type boolean
let email; //return type undefined
let password = null; //return type object
let bigNumber = 3242341234112423342342342n; //return type bigInt
let iconFirst = Symbol("22"); //return type symbol
let iconSecond = Symbol(44); //return type symbol

// console.log(iconFirst===iconSecond);
// console.log(typeof bigNumber)
// console.log(typeof iconFirst);
// console.log(typeof iconSecond);
// console.log(typeof password);

/*****************Non-Primitive***********************/
//Array,Object,Function
//Non-primitive are callby reference

let array = [3, 4, 5]; //return type object
let employee = {
  //return type object
  name: "John",
  email: "John@gmail.com",
};
let myFunction = function () {
  //return type function
  console.log("hello function");
};
// console.log(typeof array);
// console.log(employee);
// console.log(typeof employee);
// console.log(typeof myFunction);
// console.log(myFunction);

//------------------------------------------------------------------------------------------------------------------------------------------------
//Stack and Heap Memory
//Primitive uses Stack
//Non-Primitives use Heap

//In JavaScript all non-prmitive data types fall into two categories - Objects and Function

//stack
//The we make does not orrcurs in the original value
let user1 = "James";
let user2 = user1;
user2 = "Bond";
console.log(user1);
console.log(user2);

//Heap
//The we make orrcurs in the original value
let objUser1 = {
  name: "harry",
  email: "harry@gmail.com",
};
let objUser2 = objUser1;

objUser2.email = "john@gmail.com";
console.log(objUser1.name);
console.log(objUser1.email);
