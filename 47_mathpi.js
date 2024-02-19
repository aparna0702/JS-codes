const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);


// Note: We cannot overwrite this object prop
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
 
const chai = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("not working");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Now we will trye to define all those property
Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key}: ${value}`);
    } 
}