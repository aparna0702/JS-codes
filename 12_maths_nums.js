const score = 400
console.log(score);
//defining the num explicitly as number
const balance = new Number(300)
console.log(balance);
// using some of the number funcs
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const egNumber = 123.898
console.log(egNumber.toPrecision(4)); //it is interesting

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++Maths++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

//to get the random value 
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) +min);
