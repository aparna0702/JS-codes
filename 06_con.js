let score= "33abc"; //not a valid number hence gives NAN as o/p

console.log(typeof score);
console.log(typeof (score)); //method 2, declaring in ()

let valueInScore = Number(score) //converting a string type into number
console.log(typeof valueInScore);
console.log(valueInScore) //will give NAN... not a number

//notes 
//"33"=> 33
// "33abc" => NAN
// null => 0
//undefined => NAN
//"aparna" => NAN
//true=>1
