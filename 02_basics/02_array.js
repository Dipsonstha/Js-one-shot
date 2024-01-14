const marvel_hero = ["superman", "batman", "spiderman"];
const dc_hero = ["flash", "hulk", "ironman"];
const indian_hero = ["saktiman", "krish"];
const random_name = ["tarzzan", "icecube", "6pac"];

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[(3, 1)]);
//both returns new array
const join_hero = marvel_hero.concat(dc_hero, indian_hero, random_name);
//spread operator is in mostly use
const join_hero2 = [...marvel_hero, ...dc_hero, ...indian_hero, ...random_name];

// console.log(join_hero);
// console.log(join_hero2);

const another_array = [1, 2, 3, 4, 5, [6, 7, 12], 8, [8, 6, [6, 6, 7], 75, 4]];
//console.log(another_array);
let flatArray = another_array.flat(1); //return new array by concatnigating the sub-array with given number or infinity.
//console.log(flatArray);

console.log(Array.isArray("harry"));
console.log(Array.from("harry")); //Makes array of string
//output [ 'h', 'a', 'r', 'r', 'y' ]
console.log(Array.length); //Array constructor is by default 1 always
console.log(Array.of("harry", "cherry", "berry"));

console.log(Array.from({ name: "harrt" })); //[] because it doesnot know what to create array of key or property

let n1 = 12;
let n2 = 332;
let n3 = 42;
console.log(Array.of(n1, n2, n3)); //converts multiple variable into array
