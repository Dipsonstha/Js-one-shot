//if else
//runs only if condition is true
// if (false) {
//   console.log("the ture statement");
// }

//scoping
// const number = 4;
// if (number === 4) {
//   let name = "harry";
//   console.log(`The number is ${number} and name is ${name}`);
// }
//error out of variable scope
//console.log(name);
// const userLoggedIn = false;
// if (userLoggedIn) {
//   console.log("user is logged in");
// } else {
//   console.log("user not logged in");
// }

//if else ladder
// const amount = 1000;
// if (amount < 500) {
//   console.log("amount is less than 500");
// } else if (amount < 800) {
//   console.log("amount is less than 800");
// } else {
//   console.log("amount is less than 1200");
// }

//If else with condition
const userLoggedIn = true;
const debitCard = true;
const loggedInGmail = false;
const github = true;
const loggedInFacebook = false;
//AND condition
if (userLoggedIn && debitCard) {
  console.log("You can now buy the product");
} else {
  console.log("Please login or eneter you debit card");
}
//OR condition
if (loggedInGmail || loggedInFacebook || github) {
  console.log("Welcome, You have been logged In.");
} else {
  console.log(
    "Please provide your gmail, github or facebook account to loggin"
  );
}
