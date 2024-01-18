//for of
const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  //   console.log(num);
}

const string = "hello world!";
for (const num of string) {
  if (num == " ") {
    continue;
  }
  //   console.log(`Each char is ${num}`);
}

const map = new Map();

map.set("NEP", "Nepal");
map.set("USA", "United State of America");
map.set("GER", "Germany");
map.set("GER", "Germany"); //does not add cause map work on unique value and is Case sensitive

console.log(map);

for (const [key, value] of map) {
  // print key and value must use []
  //console.log(key, "refers to", value);
}

const myObject = {
  game1: "aspalt",
  game2: "COD",
};
//Object is not iterable in forofloop
// for (const key of myObject) {
//   console.log(key); //its not iterable
// }
