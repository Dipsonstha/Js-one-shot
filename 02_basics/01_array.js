const myArr = [0, 1, 2, 3, 4];
console.log(myArr); //output [0,1,2,3,4]
//console.log(typeof myArr); //object

const heroes = ["Batman", "Superman", "Thor", "Spiderman"];
//console.log(heroes);
//console.log(typeof heroes[0]);

const myArr2 = new Array(1, 2, 3, 4, 5);

//console.log(myArr2[3]);
//Array Method
// myArr.pop(); //removes last element from the array
// console.log(myArr);
// myArr.push(0);//add in last index of array
// console.log(myArr);

//myArr.unshift(12); //add element in the first index
//console.log(myArr);
//myArr.shift(); //removes element from 1st index
//console.log(myArr);

const newArr = myArr.join(); //converts array into string
//console.log(newArr);
//console.log(typeof newArr);

// console.log(myArr.includes(22));
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(45)); //if not in array returns -1

//slice and splice

console.log("A ", myArr);
let sliceArr = myArr.slice(1, 3); //prints the number from array with startindex but not includes lastindex
console.log(sliceArr);
console.log("B ", myArr);
let spliceArr = myArr.splice(1, 2); //prints nummber including start and end but it remove element from orginal array

console.log(spliceArr);
console.log("C ", myArr);
