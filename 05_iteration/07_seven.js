//Map()=>returns new array

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map((num) => num + 1);

//Map chaining
const newNumbers = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => {
    return num >= 50;
  });
console.log(newNumbers);

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
const salary = employee.map((num) => num.salary);
const totalSalary = employee.map((num) => {
  if (num.salary >= 30000) {
    console.log(`No salary bonus for you ${num.name}`);
    return num.salary;
  }
  return num.salary * 2;
});
console.log(`The previous salary of employee is ${salary}`);
console.log(`Salary with 50% of bonus of each employee is ${totalSalary}`);

const age = [22, 33, 44, 11, 22, 55, 35, 43];
const oldage = age.map((num) => num * 2).filter((num) => num > 60);
console.log(`Old people ${oldage}`);
