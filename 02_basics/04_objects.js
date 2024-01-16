const object1 = { a: 34, b: 22 };
const object2 = { c: 44, d: 12 };
const names = { name1: "harry", name2: "perry" };

//to join 2 object
//its assigns other values in obj1
const object3 = Object.assign(object1, object2, names); //obj1 is target and obj2 is source
//it only assigns value in new empty object{}
const object4 = Object.assign({}, object1, object2); //{} is target obj1 and obj2 is source
// console.log(object3);
// console.log(object4);
// console.log(object1);

//using spread operator
const object5 = { ...object1, ...object2, ...object3 };
//console.log(object5);

const instaUser = {};
instaUser.name = "dipson";
instaUser.email = "dipson@gmail.com";
instaUser.isLoggedIn = true;
instaUser.age = 22;

// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// //seprates each keay value of obj
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("age"));
//Array of object
const randomUser = [
  { name: "harry", email: "harry@gmail.com" },
  { name: "Parry", email: "Prry@gmail.com" },
  { name: "Charry", email: "Charry@gmail.com" },
];
randomUser.push({ name: "John", email: "john@gmail.com" });
// console.log(randomUser);
// console.log(randomUser[1].name);

//Object Destructing
const course = {
  coursename: "Js in one shot",
  price: 2000,
  courseInstructor: "Dipson shrestha",
};

const { coursename, courseInstructor: instructor } = course;
// console.log(coursename);
// console.log(instructor);

//JSON example
// {
//     "book_name": "bhagwat Gita",
//     "author_name": "Veda",
//     "price": 499
// }
//Sometime we can get JSON in array form
// [{}, {}, {}];
