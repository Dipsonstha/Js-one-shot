//Reduce function
const mynum = [1, 2, 3, 4];

// //using normal func
// const total = mynum.reduce(function (acc, currval) {
//   console.log(`Acc is ${acc} and currval is ${currval}`);
//   return acc + currval;
// }, 0);

//using arrow function
const total = mynum.reduce((acc, currval) => acc + currval, 0);
// console.log(total);

const shoppingCart = [
  {
    name: "Apple",
    price: 400,
  },
  {
    name: "Banana",
    price: 500,
  },
  {
    name: "Orange",
    price: 600,
  },
];
// const subtotal = shoppingCart.reduce((acc, item) => {
//   console.log(`Acc is ${acc} and price is ${item.price}`);
//   return acc + item.price;
// }, 0);
// console.log(subtotal);
const subtotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(subtotal);

const employee = [
  {
    id: "001",
    age: 22,
    salary: 20000,
    name: "John Doe",
  },
  {
    id: "002",
    age: 18,
    salary: 10000,
    name: "Doe",
  },
  {
    id: "003",
    age: 30,
    salary: 30000,
    name: "Jesi",
  },
  {
    id: "004",
    age: 40,
    salary: 20000,
    name: "Eric",
  },
];
const totalSalary = employee.reduce((acc, item) => acc + item.salary, 0);
console.log(totalSalary);
