const name = "ranodeep";
const profession = "actor";
console.log(`Hi my name is ${name} and my profession is an ${profession}.`);

console.log(name.__proto__);

const gameName = new String("game of throns");
console.log(gameName.length);
// console.log(gameName.__proto__);
// console.log(gameName.indexOf("o"));
console.log(gameName.toUpperCase());
console.log(gameName);

const newString = gameName.substring(0, 3); //cant use -
console.log(newString);

const anotherString = gameName.slice(-12, 2); //- counts from reverse
console.log(anotherString);

const newString1 = "  yamaha and hona  ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://github.com/github%20gitlab";
console.log(url);
console.log(url.includes("gitahub"));
console.log(url.replace("%20", "-"));
console.log(gameName.split(" ")); //splits the string base of space
