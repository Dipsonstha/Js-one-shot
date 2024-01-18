// const language = ["js", "c++", "java", "python", "rust"];

// //for each does not return any value i.e undefined
// const var1 = language.forEach((item) => {
//   console.log(`I can code in ${item}`);
//   return item;
// });

// console.log(var1);

const number = [1, 23, 4, 5, 6, 7, 8, 9, 11];

//filter() method returns value but should provide condition
//const newnumber = number.filter((num) => num > 6);//implicit return
// const newnumber = number.filter((num) => {
//   return num > 6;
// }); //explicit return
// console.log(newnumber);
// //Both works as same
// //Using ForEach
// const anothernumber = [];
// newnumber.forEach((num) => {
//   if (num > 6) {
//     anothernumber.push(num);
//   }
// });
// console.log(anothernumber);

const books = [
  {
    bookName: "The Catcher in the Rye",
    genre: "Fiction",
    publishDate: 1951,
    edition: 1,
  },
  {
    bookName: "To Kill a Mockingbird",
    genre: "Classic",
    publishDate: 1960,
    edition: 2,
  },
  {
    bookName: "The Hobbit",
    genre: "Fantasy",
    publishDate: 1937,
    edition: 3,
  },
  {
    bookName: "1984",
    genre: "Dystopian",
    publishDate: 1949,
    edition: 1,
  },
  {
    bookName: "The Great Gatsby",
    genre: "Classic",
    publishDate: 1925,
    edition: 2,
  },
];
let userBooks = books.filter((bk) => bk.genre === "Classic");
userBooks = books.filter((bk) => {
  return bk.publishDate >= 1920 && bk.publishDate < 1950;
});
console.log(userBooks);
