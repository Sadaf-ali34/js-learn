const myDates = new Date()
// console.log(myDates);
// console.log(myDates.toDateString);
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleDateString());

// const anotherDate = new Date(2024,0,14,5,30)
let anotherDate = new Date("2024-01-14")
// console.log(anotherDate);
// console.log(anotherDate.toDateString());
// console.log(anotherDate.toLocaleString());
// console.log(anotherDate.toString)
// console.log(typeof anotherDate)

let date = Date.now()
let myTimeStamp = Date.now()
let currentDate = new Date(date)
// console.log(Math.floor(anotherDate.getTime()/1000));
// console.log(myTimeStamp);
//console.log(date.getTime());
// console.log("Current time is :" +currentDate.toString());

let newDate =new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday : "long"
})


