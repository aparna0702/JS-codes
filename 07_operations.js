/***************************************OPERATIONS***************************/ 
let value = 3;
let negvalue = -value;
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);

let str1 = "hello"
let str2 = " Aparna"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2); //12
console.log("1"+2+2); //122
console.log(1+"2"); //12
console.log(1+2+"2"); //32

console.log(null > 0); //false
console.log(null==0); //false
console.log(null>=0); //true 

//Note: comparison operator converts null into a number 0 whereas eqaulity works differnetly
//strict check -> === not only ckecks the value but also the data type of the values