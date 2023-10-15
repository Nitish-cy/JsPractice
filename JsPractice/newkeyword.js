// What is the use of new Keyword

// const obj = {
//     name: 'Nitish',
//     lastName: 'Mishra',
//     address: 'Ramgarh Lambhua Sutanpur'
// }

function createUser(name,lastName){
    this.name=name;
    this.lastName=lastName;
}

// We jave to create one method which will be accessible from any object in js

// Object.prototype.getFullName= function(){
//     console.log(`User's full name is ${this.name + '  ' + this.lastName} `)
// }
//obj.getFullName();

// we can add method for outside of a object using prototype

createUser.prototype.getFullName = function () {
    console.log(`User's full name is ${this.name + '  ' + this.lastName} `)
}

const newObj =new createUser("Nitish","Mishra");
newObj.getFullName();