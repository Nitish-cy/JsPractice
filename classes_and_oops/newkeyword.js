const User = {
    username: 'Nitish',
    age: 23,
    fullname: function () {
        console.log(`Name is  ${this.username}`)
    }
}

//Use of New KeyWord

function Uname(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

const userOne=new Uname('Nitish',23,'Ramgarh')
const userTwo=new Uname('Shubham',23,'Ramgarh')
console.log(userOne)
console.log(userTwo)
console.log(userOne.constructor)
//new is always known as constructor function because it always returns a new reference or literal for
//every time when we ctreate an object using new without new second object will  overrite the firstone 
