// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         resolve()
//         console.log("Async task complete");
//     }, 1000)
// })
// // then is connected to resolve
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// // -------> Method 2

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve()
//         console.log("Async task 2 complete");
//     }, 1000)
// }).then(function(){
//     console.log("Promise 2 consumed");
// })

// --------> Method 3

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             userName: "chai", 
//             example: "123@example.com"
//         })
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// -----------> Method 4
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({
//                 userName: "Aparna",
//                 password: "jha"
//             })
//         }
//         else{
//             reject("ERROR: Something went wrong")
//         }
//     }, 1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.userName
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){ //for catching the reject
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected"))

// ----------->Method 5

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true 
//         if(!error){
//             resolve({
//                 userName: "JavaScript",
//                 password: "123"
//             })
//         }
//         else{
//             reject("ERROR: JS went wrong")
//         }
//     }, 1000)
// })
// // async function consumePromiseFive(){
// //    const response = await promiseFive
// //    console.log(response);
// // }    We have not added the try catch block to handle the error
// //      as aync await cannot handle the errors directly
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
//  }
// consumePromiseFive()

// 
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


