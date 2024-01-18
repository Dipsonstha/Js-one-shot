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
