// All About Strings

const name = "sadaf"
const repoCount = 50

// console.log(name+ " "+ repoCount + " value ")
// String interpolation -- mostly use this
console.log(` hello my name is ${name} and my rep count is ${repoCount} `);

const gameName = new String('sadaf -ali-hello')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.charAt(4))
// console.log(gameName.lastIndexOf('a'));
//o0 incluse 4 exclusive
const newStringExample = gameName.substring(0,4)
//console.log(newString);
const anotherString = gameName.slice(1,2)
//console.log(anotherString);
// trim
const StringExample1 = "         sadaf     "
// console.log(StringExample1);
// console.log(StringExample1.trim());

const url = "https://sadafali.com/sadaf%20ali"
console.log(url.replace('%20', '-'));
console.log(url.includes('sadaf'))

console.log(gameName.split('-'));
console.log(gameName.small(2));
