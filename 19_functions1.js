// function
function sayMyName(){
    console.log("A");
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("N");
    console.log("A");
}
sayMyName //function reference
sayMyName() //function call 

function add2(num1, num2) //2 num parameters
{
    console.log(num1 + num2);
}
const result = add2(5,7) //both arguments must be number 
// for it to work easily
console.log("Result:", result); //result will be undefined

function add2n(num1, num2){
    const res = num1+num2
    return res
}
const result1 = add2n(67,89)
console.log(result1);

// function parameters and if statement


function loginUserMessage(username= "a") //default value
{
    if(username===undefined){
        console.log("Pease enter a user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("app"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());