const marvel = ["thor","ironMan","hulk"]
const dc = ["superMan", "flash","batman"]

const allHeros = marvel.concat(dc)
console.log(allHeros);

// //expected output -->[ 'thor', 'ironMan', 'hulk', [ 'superMan', 'flash' ] ]
// //console.log(marvel[3][1]);

// //concatination
// marvel.concat(dc)
// dc.concat(marvel)
// console.log(marvel);
// console.log(dc);

//spread operator
const all_newHeros = [...marvel,...dc]
console.log(all_newHeros);


const anotherArr = [1,2,3,[4,,5,6],7,[6,7,[4,5]]]

const realArr = anotherArr.flat(Infinity)
//console.log(realArr);

console.log(Array.isArray("sadaf"));
console.log(Array.from("sadaf"));
console.log(Array.from({name:"Ali"}));//intersting -->[]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
