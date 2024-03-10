//Numbers in javascript

const score = 400;

//explicit define
const balcance = new Number(100)
console.log(balcance)
console.log(score);
console.log(balcance.toString().length)

console.log(balcance.toFixed(1))

//for precision
const otherNum = 123.8966
console.log(otherNum.toPrecision(4));

const hundreds = 10000000
//indian number standard
console.log(hundreds.toLocaleString('en-In'));

//max value and mmin value  can be find using the functions

//++++++++++++++++++++++++  Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(7.3));
// console.log(Math.ceil(7.3));
// console.log(Math.floor(7.3));
// console.log(Math.sqrt(49));
// console.log(Math.min(4,3,6,8));

//values always between 0 and 1
console.log(Math.random());
console.log(Math.random());

//values  we need in dice or etc
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

const min =10
const max = 20
console.log(Math.floor(Math.random() * (max -min + 1)+min));

console.log("hello");


