import { Invoice } from "./classes/Invoice.js"
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

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc)
})