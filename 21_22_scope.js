// scope
if(true){
    let a = 10
    const b = 20
    var c = 30 //var ka global scope hota hai
}

// console.log(a);
// console.log(b);
// console.log(c);

//Errors in function scope

function one(){
    const userName = "aparna"

    function two(){
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website);
    two()
}

one()

if(true){
    const userName = "aparna"
    if(userName==="aparna"){
        const website = " google"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


// ++++++++++++ interesting ++++++++++++++
// 2 techniques for writing functions

console.log(addOne(5));
function addOne(num){
    return num+1
}

// addTwo(5) this would give error
const addTwo = function(num){
    return num+2
}
addTwo(5)
