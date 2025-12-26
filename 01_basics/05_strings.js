const name = " Honey "
const repoCount = 50

// console.log( name + repoCount + " value");

// console.log(`Hello My Name Is  ${name} and My Repo Count Is ${repoCount} `);

const gameName = new String('Honey-Hj-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);;


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));
// console.log(gameName.toLowerCase());
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "   Honey   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://honey.com/honey%22jariwala"

console.log(url.replace('%22','-'));

console.log(url.includes('honey'));

console.log(gameName.split('-'));

const boldString = gameName.bold();
console.log(boldString);

const linkStbring = gameName.blink();
console.log(linkStbring);

const concatString = gameName.concat(" Game ");
console.log(concatString);
//Multiple concat
console.log(gameName.concat(" Mobile "," India "));

