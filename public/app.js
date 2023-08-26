import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
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
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
const appUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docUID = appUID({ name: "yoshi", age: 49 });
const docInterface = {
    uid: 1,
    resourceName: "person",
    data: { name: "Hello" }
};
const docFour = {
    uid: 2,
    resourceName: "shopping",
    data: ["test", "bread"]
};
// console.log(docInterface, docFour)
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docEnumsOne = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: { title: "Name of wind" }
};
const docEnumsTwo = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { title: "Name of KK" }
};
// console.log(docEnumsOne)
// console.log(docEnumsTwo)
// TUPLES
let arr = ["ryu", 25, true];
let tupExam = ["ryu", 25, false];
// console.log(tupExam)
let student;
student = ["Chun", 26];
