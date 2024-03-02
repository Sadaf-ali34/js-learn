const accountId = 134455
let accountEmail = "sadaf@gmail.com"
var accountPass = "12345"
accoutCity = "delhi"

//accountId = 2
/*
var accountPass = "12345" --> prefer notto use var as it has issue of scope
accoutCity = "delhi" --> not a good practice but can do
var vs let -- similar but var had scopr issue so prefer to use let
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPass,accoutCity])