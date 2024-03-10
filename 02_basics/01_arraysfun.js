console.log("Arrays topic started")

//JavaScript array-copy operations create shallow copies.
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// Arrays declaration

const myArr = [0,1,2,3,]
const myHero = ["ironman","thor"]
const myArr2 = new Array(0,1,2,3)


// console.log(myArr[0]);
// console.log(myArr2);
// console.log(myArr2.length);

//Arrays Method
myArr.push(6)
//console.log(myArr);
myArr.push(7)
myArr.pop
// myArr.push(8)
// myArr.unshift(9)
//expected optupt [
//   9, 0, 1, 2,
//   3, 6, 7, 8 ]
// console.log(myArr);
// // myArr.shift(0)
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));
// console.log(typeof myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//Slice vs spice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);

console.log(myn2);
// expected outputs 
// A [ 0, 1, 2, 3, 6, 7 ]
// [ 1, 2 ]
// B [ 0, 1, 2, 3, 6, 7 ]
// C [ 0, 6, 7 ]
// [ 1, 2, 3 ]

