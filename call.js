function username(name,lastName){
    this.name=name;
    this.lastName=lastName
}

function createUser(name,lastName,email,add){
   // username(name,lastName) // from this syntax we can call the usename function but there is some issue due to exe
    //cution context username will execute in execute context but it will be removed from 
    // execution context before calling createUser function so that we will get this out put
    //createUser { email: 'nitish@gmail.com', add: 'Uttar Pradesh' }
    //for resolving this issue we have to use call or apply bcz using this we can hold the reference of 
    // previous context
    username.call(this,name,lastName) // without using this we will get same o/p so we have to pass this as a first par
    this.email=email;
    this.add=add;
}

const newUser1=new createUser('Nitish','Mishra','nitish@gmail.com','Uttar Pradesh');
console.log(newUser1);
//O/p- createUser { email: 'nitish@gmail.com', add: 'Uttar Pradesh' } name is not printed
// Call is used to pass corrent execution context to another function or object

