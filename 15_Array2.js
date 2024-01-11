const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
//Mathod 1

marvel_heroes.push(dc_heroes)
//array merge hone ki jgh subarray bn jate hai
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

//Method 2

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

// Method 3 spread more widely utilized

const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);

const anotherArray = [1,2, 3, [4, 5, 6], 7, [8, [9, 10,11], 12], 13]
const proArr = anotherArray.flat(Infinity)
console.log(proArr);

//when we scrape data from web its not in array format we can
// either check it and convert it to array

console.log(Array.isArray("aparna"));
console.log(Array.from("aparna"));
console.log(Array.from({name: "app"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));