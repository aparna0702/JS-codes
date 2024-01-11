// DATE
// it is an object
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let createDate = new Date(2023, 0, 23)
console.log(createDate.toDateString());

let createDate2 = new Date(2023, 0, 23, 5, 45, 89)
console.log(createDate2.toLocaleString());

let createDate3 = new Date("2023-01-07")
console.log(createDate3.toLocaleDateString());
let createDate4 = new Date("01-07-2024")
console.log(createDate4.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createDate3.getTime());
// These values are always in millisecond but we can convert it 
// into second by dividing it from 1000 and then using floor
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
newDate.toLocaleString('default', {
    weekday: "long"
})