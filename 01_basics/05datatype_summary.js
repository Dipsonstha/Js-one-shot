//2 types of data Types 
//Primitive and Non-Primitive

//Primitive (They are call by value)
//7 types: number,string,boolean,undefine,null,bigInt,symbol
let number = 34//return type number
let name = "javaScript"//return type string
let isUser = true//return type boolean
let email//return type undefined
let password = null //return type object
let bigNumber= 3242341234112423342342342n//return type bigInt
let iconFirst = Symbol('22')//return type symbol
let iconSecond = Symbol(44)//return type symbol

// console.log(iconFirst===iconSecond);
// console.log(typeof bigNumber)
// console.log(typeof iconFirst);
// console.log(typeof iconSecond);
// console.log(typeof password);

/*****************Non-Primitive***********************/
//Array,Object,Function
//Non-primitive are callby reference

let array = [3,4,5] //return type object
let employee = {//return type object
    name:"John",
    email:"John@gmail.com"
}
let myFunction = function(){//return type function
    console.log("hello function");

}
// console.log(typeof array);
// console.log(employee);
// console.log(typeof employee);
// console.log(typeof myFunction);
// console.log(myFunction);
