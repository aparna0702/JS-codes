//singleton: constructor se bnta hai, literal se nhi bnta
// Object.create

//object literal
const mySym = Symbol("123")
const jsUser = {
    name: "App",
    "full name":"Aparna Jha",
    [mySym]: "myKey1", //this is the correct syntax
    age: 21,
    location: "Noida",
    email: "app123@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Friday"]
}
console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser.mySym);// it is accessed 
// as a string which is wrong hence the correct syntax is below
console.log(jsUser[mySym]);
// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting); //only reference created
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello JS user ${this["full name"]}`);
}
console.log(jsUser.greeting2());