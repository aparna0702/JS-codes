// stack(primitive), heap(Non-primitive)
let myName = "Aparna"
let name2 = myName
name2 ="jha"
// console.log(myName);
// console.log(name2);

let user = {
    email: "user@gmail.com",
    upi: "user@12345"
}

let user2 = user;
user2.email = "123@gmail.com"
console.log(user)
console.log(user2)
//since these are non primitive datatype refernce of the obj is 
// used 