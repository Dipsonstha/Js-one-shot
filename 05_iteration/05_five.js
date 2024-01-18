//for each
const language = ["js", "c++", "java", "python", "rust"];

//using anonymous function
// language.forEach(function (item) {
//   console.log(item);
// });
//using anonymous arrow function
// language.forEach((item) => {
//   console.log(item);
// });

//Another way
function array(item) {
  //   console.log(`language ${item}`);
}
language.forEach(array);

//sending multiple parameters
language.forEach((item, index, array) => {
  //   console.log(item, index, array);
  //   console.log(`${item} is ${index} in ${array} array`);
});

//For each with object
//Array of object
const codingObject = [
  {
    languageNmae: "javascript",
    version: "5.1",
  },
  {
    languageNmae: "java",
    version: "5.5",
  },
  {
    languageNmae: "python",
    version: "6",
  },
];
codingObject.forEach((item) => {
  //   console.log(item.languageNmae); //to access each name of the object
  //   console.log(item.version);
  console.log(`The language ${item.languageNmae} version is ${item.version}`);
});
