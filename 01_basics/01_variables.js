const accountId = 12333;
let email = "dio@google.com"
var password = "1234"
/*
Not to use var because it has issue on block scope
prefered to use const and let
var basically chagnes globaly but not only in scope
*/
//variable memory can be reserved without using writing anything infront of variable
accountCity = "Kathmandu"
let accoutnState;
// accountId = 3
email = "hari@yahoo.com"
password = "777"
accountCity = "delhi"
console.log(accountId);
console.table([password,accountCity,email,accoutnState])