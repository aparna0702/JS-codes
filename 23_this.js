// about this
const user = {
    userName : "aparna",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName = "app"
user.welcomeMessage()
console.log(this);



function fun(){
    let username = "armani"
    console.log(this.username); //we couldn't use this with function
}
fun()

// const chai = function(){
//     let username = "app"
//     console.log(this.username);
// }
// chai()

// about arrow function
const chai = ()=> {
    let username = "app"
    console.log(this);
}
chai()

const addTwo3 = (num1, num2) =>{
    return num1 + num2
}

console.log(addTwo3(4,5))

const addTwo2 = (num1, num2) => num1+ num2

// implicit return
const addTwo = (num1, num2) => (num1+ num2)

// in case of objects we cannot simply return it we need to wrap it in paranthesis
const addTwo1 = (num1, num2) => ({username: "apporva"})
console.log(addTwo1(4,5));

