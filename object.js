//create an object and assign a symbol as a key 
const symb=Symbol("key1");
const obj={
    name:"Nitish",
    "sname":"Mishra",
    mobno:"hdbjsdfbdsjf",
    [symb]:"mykey1"
}
//internally name like "name" so we can access them like this  obj["name"]
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj["sname"])
// console.log(obj[symb])
// we cant use for -of with object bcz object is not iterable
// const arr=[1,2,3,4,5]
// for(let i in arr){
//     console.log(i)
// }
//console.log(typeof obj.symb) // o/p string (not correct so we have to do something else for solving this problem)

// Object.freeze(obj);
// obj.name="shubham" 
// console.log(obj);

//Merge two object 
const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'d',5:'f'}

// const obj3={obj1,obj2}
// console.log(obj3) //object within object not a correct way

// const obj4=Object.assign(obj1,obj2)
// //or  Object.assign({},obj1,obj2)
// console.log(obj4)

// //most used
// const obj5={...obj1,...obj2}
// console.log(obj5)

// console.log(Object.keys(obj1))  //o/p -[ '1', '2', '3' ]
// console.log(Object.entries(obj1)) //o/p in form of key values - [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ] ]

//Object Destructuring

const {name,sname}=obj;

console.log(name)
console.log(sname)
