// IIFE(Immediately Invoked Function Expressions)
// to write a fun that needs immediate invocation
// Method 1 
// function fun(){
//     console.log("DB connected");
// }
// fun()

// Method 2 
// global scope ke pollution ko htane ke liye IIFE ka 
// use krte hai

(function fun2(){
    // nammed IIFE
    console.log("DB connected");
})(); //ending it is necessary

((name) => {
    // unammed IIFE with parameter
    console.log(`DB 2 connected ${name}`);
})("aparna")