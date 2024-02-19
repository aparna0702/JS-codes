class User  {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(mail){
        this._email = mail
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(pass){
        this._password = pass
    }
}

const obj = new User("123@gmail.com", "abc")
// console.log(obj.password);
// console.log(obj.email);

// Now we will do the exact same work using function

function User1(email, password){
    this._email= email;
    this._password = password
// first we need to give context then what prop we want to overwrite, then object
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const obj3 = new User1("123@gmail.com", "1234$")
console.log(obj3.email);
