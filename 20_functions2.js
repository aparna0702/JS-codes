// e-shopping cart projects example : rest operator

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(8));
console.log(calculateCartPrice(200,400,500, 1000, 2000)); 

const user = {
    userName: "app",
    price: "100"
}
function handleObjects(anyObj)
{
    console.log(`username is ${anyObj.userName} and price is 
    ${anyObj.price}`);
}
handleObjects(user)
handleObjects({
    userName: "ans",
    price: 500
})

const myArray = [1,3,5,7,9]
function returnSecondVal(getVal)
{
    return getVal[1]
}
console.log(returnSecondVal(myArray));
console.log(returnSecondVal([2,4,6,8,10]));