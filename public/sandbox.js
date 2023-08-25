"use strict";
let greet;
greet = () => {
    console.log("hello");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(3, 89);
const minus = (a, b) => {
    return a - b;
};
const result = minus(10, 70);
console.log(result);
