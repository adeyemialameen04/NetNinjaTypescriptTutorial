// explicit types
let character: string
let age: number
let isLoggedIn: boolean

// *! character = false
character = "luigi"

// *! age = "luigi"
age = 30

// *! isLoggedIn = 25
isLoggedIn = true || false


// arrays
let ninjas: string[] = []

ninjas.push("shaun")

// union types
let mixed: (string | number | boolean | object)[] = []
mixed.push("hello", 20, false, { name: "hello" })

// console.log(mixed)

let uid: string | number
// *! uid = false
uid = 123
uid = "234"

// objects
let ninjaOne: object
ninjaOne = { name: "yoshi", age: 30 }
let ninjaTwo: {
    name: string,
    age: number
    beltColour: string
}

ninjaTwo = {
    beltColour: "black",
    age: 30,
    name: "rahmon"
}

// console.log(ninjaTwo)