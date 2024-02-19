// let myname = "aparna     "
// console.log(myname.truelength);

let myHero = ["thor", "spiderMan"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.func = function(){
    console.log(`func is present in all objects`);
    // we have injected a function in object and it is further transferred to other objects and functions
}

Array.prototype.hello = function(){
    console.log(`Hey! Hello`);
}
// heroPower.func()
// myHero.func()
// myHero.hello()
// heroPower.hello()  //must give an error

//----------> inheritance

const user = {
    name: "user1",
    email: "123@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: teachingSupport //inheritance
}

Teacher.__proto__ = user //prototypal inheritance

// modern syntax
Object.setPrototypeOf(teachingSupport, Teacher)

let anotheruser = "1234      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotheruser.trueLength()