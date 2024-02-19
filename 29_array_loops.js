// for of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(` Each char is ${greet}`);
}

//------------>map: unique values and maintains the order
//------------>map: Not iteratable
const map = new Map()
map.set('IN', "INDIA")
map.set('USA',"United States Of America")
map.set('FR',"France")
console.log(map);

// --- Two different formats for printing the maps using for of loop
for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key ,':-' ,value);
}


// +++++++++++++for in loop+++++++++++++++
const myObj = {
    js: 'javaScript',
    cpp: 'c++',
    rb: "ruby"
}
for (const key in myObj) {
    console.log(`${key} is the shortcut for ${myObj[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}


// +++++++++++++++++++for each loop++++++++++++++
const programming1 = ["js", "rb", "py", "java", "cpp"]
// Note : callback function does not have a name
// 1:
programming1.forEach( function (item){
    console.log(item);
})
// 2.1:
programming1.forEach( (greet) => {
    console.log(greet);
})

// 2.2
function printMe(val){
    console.log(val);
}
programming1.forEach(printMe)

// 2.3
programming1.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

//2.4:For each loop on array of objects
const arrObj = [
    {
        language : "javascript",
        languageFileName : "js"
    },
    {
        language : "c++",
        languageFileName : "cpp"
    },
    {
        language : "python",
        languageFileName : "py"
    }
]
arrObj.forEach((item)=>{
    console.log(item.language);
})