// example 1
let greet: (a: string, b: string) => void
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

greet("Al ameen", "Hi")

// example 2
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

console.log(calc(2, 6, "addm"))

// example 3
type person = { name: string, age: number }

let logDetails: (obj: { name: string, age: number }) => void
logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
logDetails({ name: "Hello", age: 30 })