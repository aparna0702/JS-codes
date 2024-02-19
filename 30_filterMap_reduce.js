const lang = ["js", "ruby", "latex", "laravel", "cpp"]
const values = lang.forEach((item)=>{
    console.log(item);
})
console.log(values); // it does not return any value


// Note 1: using filter to work on each iteration
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num>4)
// we learn about explicit return
const newNums1 = myNums.filter((num)=> {
    // if we open a scope we need to use return keyword
    return num>4
})
console.log(newNums); 
console.log(newNums1);

//Note 2: now using for each for above conditional opeartion
const newNums2 = []
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})
console.log(newNums2);


// ++++++++++Databases use example using filter++++++++++++
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userBooks = books.filter((bk)=>bk.genre==='Fiction')
  userBooks = books.filter((bk)=>{
    return bk.publish>1995 && bk.genre==='Science'
})
  console.log(userBooks);


// +++++++++using map+++++++++++++
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const numList =  myNumbers.map((num)=>num+10)
console.log(numList);

// Note 3: How to use chaining
const numList1 = myNumbers
                .map((num)=> num*10)
                .map((num)=> num+1)
                .filter((num)=> num>40)
console.log(numList1);

// ++++++++++++++++reduce+++++++++++++++++++
const reNum = [1,2,3]
// 1: Using function

const myTotal = reNum.reduce(function(acc, currVal) {
    console.log(`acc:${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 5)
console.log(myTotal);

// 2: Using arrow function

const myTotal1= reNum.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal1);

// ==> Another Example for using reduce

const shoppingCart = [
    {
        itemName: 'js course',
        price:1999
    },
    {
        itemName: 'cpp course',
        price:999
    },
    {
        itemName: 'DSA course',
        price:2999
    },
    {
        itemName: 'LLD course',
        price:3999
    }
]

const totalCost = shoppingCart.reduce((acc, item)=>acc + item.price,0)
console.log(totalCost);