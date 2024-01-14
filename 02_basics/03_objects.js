//Two types of Object
//singleton created using constructor
//Object.create

//Object literals
const mySymbol = Symbol("Key11");
const user = {
  name: "travish", //js accepts key as string eg: "name"/ name is same as string
  age: 22,
  email: "tarvi@gmail.com",
  [mySymbol]: "Value11",
  isloggedIn: false,
  address: "New York",
  lasLoggedIn: ["sunday", "tuesday"],
};
//to access the obj value we must use . but some times in mysymbol case there is no option instead using []
// console.log(user.name);
// console.log(user["age"]);
// console.log(user["address"]);
// console.log(user["lasLoggedIn"]);
// console.log(user[mySymbol]);
//console.log(user.mySymbol); //in this term we should use [] instead of . so prefered to use []
user.name = "bill gates";
user.email = "bill@microsoft.com";
// Object.freeze(user); //it doesnot allows changes in the object
user.age = 233;
user.email = "heli@microsoft.com";
console.log(user);

user.greetings = function () {
  console.log("good greetings");
};
user.greetings2 = function () {
  console.log(`hello js user ${this.name}`);
};
console.log(user.greetings());
console.log(user.greetings2());
