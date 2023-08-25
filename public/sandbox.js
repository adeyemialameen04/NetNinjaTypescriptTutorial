"use strict";
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet("Al ameen", "Hi");
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(2, 6, "addm"));
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetails({ name: "Hello", age: 30 });
