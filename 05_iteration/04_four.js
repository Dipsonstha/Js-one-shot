//For In loop
const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  reactjs: "react javascript",
};
for (const key in myObject) {
  // console.log(key); //prints key of object
  //console.log(myObject[key]); //prints value of object
  //   console.log(`${key} stands for ${myObject[key]}`);
}

const programming = ["js", "java", "aws"];
for (const key in programming) {
  //  console.log(programming[key]);
}

//****Cant iterate in the Map
const map = new Map();

map.set("NEP", "Nepal");
map.set("USA", "United State of America");
map.set("GER", "Germany");
for (const key in map) {
  // console.log(key);
}
