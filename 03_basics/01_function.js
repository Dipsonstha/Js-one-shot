function addNumbers(num1, num2) {
  return num1 + num2; //return is an concept
}
//console Prints
// function addNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
//addNumbers : reference
//addNumbers(5, 3); //function call with arguments

const result = addNumbers(33, "2"); //Automatic type conversion
// const result = addNumbers(33, 2);
// console.log("Result: ", result);

/**************************************** */
//Default value Example in function parameter

function loginUser(userName = "sam") {
  // Check if userName is undefined
  if (!userName) {
    console.log("Please enter userName");
    return; // Stop the function execution
  }
  return `${userName} just logged In.`;
}

//console.log(loginUser()); // Output: "sam just logged In."

// console.log(loginUser("Chilan")); //Overrides the default value
/************************************** */
//

//...num1 is also called rest operator or spread operator
//It depends on its usecase when to say rest or spread operator
function calculateCartPrice(val1, val2, ...num1) {
  return num1; //returns an array with help of rest operator ...
}
// console.log(calculateCartPrice(122, 111, 3333, 3434)); //122,111 goes in val1 & val2

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Function with object

const myUser = {
  userName: "Jeff",
  age: 33,
};

function myUserDetails(userInfo) {
  console.log(`${userInfo.userName} is ${userInfo.age} year old.`);
}

// myUserDetails(myUser);
//Directly passing object
// myUserDetails({
//   userName: "John",
//   age: 56,
// });

//-------------------------------
//Function with Arrays
const myArrayData = [111, 222, 21, 3343];
function myArray(Data) {
  return Data[2];
}
// console.log(myArray(myArrayData));
//passing Array Directly
console.log(myArray([1, 22, 33, 4444]));
