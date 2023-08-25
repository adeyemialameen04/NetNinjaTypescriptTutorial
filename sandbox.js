// explicit types
var character;
var age;
var isLoggedIn;
// *! character = false
character = "luigi";
// *! age = "luigi"
age = 30;
// *! isLoggedIn = 25
isLoggedIn = true || false;
// arrays
var ninjas = [];
ninjas.push("shaun");
// union types
var mixed = [];
mixed.push("hello", 20, false, { name: "hello" });
// console.log(mixed)
var uid;
// *! uid = false
uid = 123;
uid = "234";
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
var ninjaTwo;
ninjaTwo = {
    beltColour: "black",
    age: 30,
    name: "rahmon"
};
// console.log(ninjaTwo)
