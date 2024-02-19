function setUserName(userName){
    // complex DB calls
    this.userName = userName
    console.log("called");
} 

function createUser(userName, email, password){
    setUserName.call(this, userName)
    this.email = email
    this.password = password
}

const app = new createUser("app", "123@gmail.com", "123")
console.log(app);