// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.amount = a
        this.details = d
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice("mario", "work on the mario", 240)
const invTwo = new Invoice("farhan", "work on the farhan", 24)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

const form = document.querySelector(".new-item-form") as HTMLFormElement

const type = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})