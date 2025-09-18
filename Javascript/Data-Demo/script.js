/*
-varaibale are disinated by three ways: var , let, chonst.
-use "typeof" to figure out what type of data it is.
- number methods
    let input methods = "24"
    console.log(typeof input)
    let parseNumber:number = Number(input)

 */

"cat" + "dog"
console.log("cat" + "dog")

const person = {
    firstName: "hello",
    lastName: "doe",
    age: 50 ,
    eyeColor: 'blue'
};

console.log(person.eyeColor)

let yellow = person.eyeColor

console.log(yellow)

const carts = []

carts[1]= 'hello';

const name = ["hello","yes"]
name.push("diana")
console.log(name)
name.pop("diana")
console.log(name)

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
 const person1 = {
    firstName: "John",
     lastName: "Doe"
 }

 const person2 = {
    firstName: "mary",
     lastName: "Doe "
 }

person.fullName.call(person1)
let yes = person.fullName.call(person1)
console.log(yes)