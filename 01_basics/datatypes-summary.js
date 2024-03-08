//Primitive Data type-- call by value

//7 Types : String, Number, Boolean,null, undefined, Symbol(used to create unique),BigInt(anything that is not able to handle )

//Non -Primitive(Reference Type) 

//Array, Objects,Functions

//in TypeScript --> const:number = 100
//  JavaScript is a dynamically typed language

const score = 100

const scoreValue = 100.3
const isLogged = false
const outsideTemp = null

let userEmail;
//Define Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//BigInt
const bigNumber = 34567891037334242423324n

//basic of arrays, Objects, Functions
//Array
const avengers = ["IronMan","Thor","hulk"]
//Objects
let myObj = {
    name : "sadaf",
    age : 24,
    phone : 3930000,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp)
console.log(typeof bigNumber)

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Stack and heap Memeory
//Stack--> Primitive || Heap --> Non Primitive

let myMailId = "sadaf@google.com";
let userOne = {
    email : "sadafnew@google.com",
    upi:  "user@ybl"
}

let userTwo = userOne
userTwo.email = "sadafnew@google.com"

console.log(userOne.email)
console.log(userTwo.email)
