// arrays
let names = ["luigi", "mario", "yoshi"]

names.push("toad")
console.log(names)

let numbers = [10, 20, 30, 40]
numbers.push(203)
console.log(numbers)

let mixed = [...names, ...numbers, true]
console.log(mixed)

// objects
let ninja = {
    name: "maio",
    belt: "black",
    age: 30
}

ninja = {
    name: "maio",
    age: 30,
    belt: "gggg"
}

console.log(ninja)