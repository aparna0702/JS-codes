const tinderUser = new Object() //singleton type obj

const tinderUser1 = {}
console.log(tinderUser);
console.log(tinderUser1);
tinderUser1.id = "123abc"
tinderUser1.name = "App"
tinderUser1.isLoggedIn = false
console.log(tinderUser1);

const regularUser = {
    email: "111@gmail.com",
    userfullName: {
        name:{
            firstName: "Aparna",
            lastName: "Jha"
        }    
    }
}
console.log(regularUser.userfullName);

//combining two objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//Method1
const obj3 = {obj1, obj2}
console.log(obj3); //obje ke andr obj bn jaega
// Method 2: target arg and baki sare obj
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);
// Method 3: spreading
const obj5 = {...obj1, ...obj2, ...obj4}
console.log(obj5);

//Now we will see how the users are accessed from database
const user = [
    {
        id: 1,
        name: "app"
    },
    {
        id: 2,
        name: "raj"
    },   
]
user[1].id
console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));
console.log(tinderUser1.hasOwnProperty("isLoggedIn"));
