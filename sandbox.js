var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// arrays
var names = ["luigi", "mario", "yoshi"];
names.push("toad");
console.log(names);
var numbers = [10, 20, 30, 40];
numbers.push(203);
console.log(numbers);
var mixed = __spreadArray(__spreadArray(__spreadArray([], names, true), numbers, true), [true], false);
console.log(mixed);
// objects
var ninja = {
    name: "maio",
    belt: "black",
    age: 30
};
ninja = {
    name: "maio",
    age: 30,
    belt: "gggg"
};
console.log(ninja);
