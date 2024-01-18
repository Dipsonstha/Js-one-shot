//for loop
// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 4) {
//     console.log("4 is the 4");
//   }
//   console.log(element);
// }
// console.log(element);//out of scope

for (let i = 1; i <= 33; i++) {
  //   console.log(`---------Table of ${i}-------------`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value is ${j} with inner loop${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// for (let index = 1; index <= 30; index++) {
//   if (index == 5) {
//     console.log(`${index} detected`);
//     break; // stops all the following code and goes out of scope
//   }
//   console.log(`Value is ${index}`);
// }
for (let index = 1; index <= 30; index++) {
  if (index == 5) {
    // console.log(`${index} detected`);
    continue; //ignores or skips iteration
  }
  //   console.log(`Value is ${index}`);
}
let myArray = ["hulk", "rock", "brock"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
