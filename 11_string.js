const name = "aparna"
const repoCount = 3
console.log(name + repoCount + " repos"); 
// this is an old method
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//the above method is string interpolation 
//and there is another method of declaring the string
const newName = new String('Apps-123-678')
console.log(newName[0]);
console.log(newName.__proto__);

//uses of some of the strings functions

console.log(newName.length);
console.log(newName.toUpperCase());
//Reminder: the original variable would remain the same
console.log(newName.charAt(2));
console.log(newName.indexOf('s'));
const exampleStr = newName.slice(-4,2)
console.log(exampleStr);

const example2 = "    Apps     ";
console.log(example2);
console.log(example2.trim());

const url = "https://aparna.com/apps%20jha"
console.log(url.replace('%20', '-'));
// read docs for all other funstions
console.log(newName.split('-'));