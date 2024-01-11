// 7 types : string, number, boolean,null, undefined, symbol, 
// bigInt


const id = Symbol('123')
const secondId = Symbol('123')
// console.log(id===secondId)

const bigNumber = 123456789123n
// Reference(Non primitive): Array, Object, Function
const heroes = ["shaktiman", "batman", "spiderman"];
let myobj = {
    name: "aparna",
    age: 22
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)
// typeof gives object as a result for Null type



