let greet: Function

greet = () => {
    console.log("hello")
}

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}

add(3, 89)

const minus = (a: number, b: number) => {
    return a - b
}

const result = minus(10, 70)
console.log(result)