//Falsey values
// 0,-0,null , undefined ,"", NaN, BigIngt 0n

//truthy value
//"0","false", {}, [], function(){}, ()=>{}," ",1

const name = 0n; //falsey value
if (name) {
  console.log("Truthy");
} else {
  console.log("falsey");
}

// //Check array is empty
// const myArray = [];
// if (myArray.length === 0) {
//   console.log("the array is empty");
// }

// const emptyObject = { useremail: "json@gmail.com", age: 33 };
// console.log(Object.keys(emptyObject).length);
// //Object.keys()converts objects into array
// if (Object.keys(emptyObject).length === 0) {
//   console.log("empty objectS");
// } else {
//   console.log("Not Empty Object");
// }

// Nullish Colleshion Operators: (??) works on null and undefine only

let value1;
// value1 = 1 ?? 2;
// value1 = null ?? 12;
// value1 = undefined ?? 12;
value1 = undefined ?? 122 ?? 111; //return the first value o
console.log(value1);
