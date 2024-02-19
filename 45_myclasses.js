// ES6

// class user {
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const app = new user("app", "123@gmail.com", "123")
// console.log(app.encryptPassword());
// console.log(app.changeUserName());

// ----------->inheritance

// class user{
//     constructor(userName){
//     this.userName = userName
//     }
//     logMe(){
//         console.log(`USERNAME is ${this.userName}`);
//     }
// }

// class Teacher extends user{
//     constructor(userName, email, password){
//         super(userName)
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`A new Course was added by ${this.userName}`);
//     }
// }

// const appy = new Teacher("appy", "123@gmail.com", "1234567")
// appy.addCourse()

// const apply = new user("app")
// apply.logMe()
// // apply has the access of only logMe() but Teacher has access to both
// // logMe() and addCourse()

// console.log(appy instanceof user);

// -----------> Static prop

class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`username: ${this.userName}`);
    }

    static createId(){ //we do not want to give access of this function
        // to anyone, hence we use static keyword
        return `123`
    } 
}

const obj = new User("aparna")
// console.log(obj.createId());

class Teacher extends User{
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}

const obj2 = new Teacher("abc", "123@gmail.com")
obj2.logMe();
// console.log(obj2.createId()); no access of static function even to the child class