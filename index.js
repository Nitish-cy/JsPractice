console.log("Hello World");

// let age=5;
// console.log(age);

// const age1=5;
// console.log(age1);

// const person={
//     'name':'Nitish',
//     'Last Name':'Mishra',
//     'Address':'Ramgarh'
// }
// console.log(person.name);

// const arr=['Nitish',1,'B'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

//Currying in jS

let multiply=function(x,y)
{
    console.log(x*y);

}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);