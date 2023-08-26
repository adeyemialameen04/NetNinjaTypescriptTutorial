import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice("yoshi", "web work", 250)
// docTwo = new Invoice("mario", "plumber work", 200)

// let docs: HasFormatter[] = []
// docs.push(docOne, docTwo)
// console.log(docs)

// const invOne = new Invoice("mario", "work on the mario", 240)
// const invTwo = new Invoice("farhan", "work on the farhan", 24)

// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => (
//     console.log(inv.client, inv.amount, inv.format())
// ))

const form = document.querySelector(".new-item-form") as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

// list template
const ul = document.querySelector("ul")!
const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter
    if (type.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, "end")
})

// GENERICS
const appUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docUID = appUID({ name: "yoshi", age: 49 })
// console.log(docUID.uid)

// with interface
interface Resource<T> {
    uid: number,
    resourceName: string,
    data: T
}

const docInterface: Resource<object> = {
    uid: 1,
    resourceName: "person",
    data: { name: "Hello" }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: "shopping",
    data: ["test", "bread"]
}

// console.log(docInterface, docFour)

// Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
interface ResourceEnums<T> {
    uid: number,
    resourceType: number,
    data: T
}

const docEnumsOne: ResourceEnums<object> = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: { title: "Name of wind" }
}
const docEnumsTwo: ResourceEnums<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { title: "Name of KK" }
}

// console.log(docEnumsOne)
// console.log(docEnumsTwo)

// TUPLES
let arr = ["ryu", 25, true]

let tupExam: [string, number, boolean] = ["ryu", 25, false]
// console.log(tupExam)

let student: [string, number]
student = ["Chun", 26]