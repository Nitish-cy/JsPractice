// 

const person = {
  name: "John",
  age: 30,
  city: "New York",
  today:new Date(),
  fullname:function(){
    return 30;
  },
  get secit(){
    return this.city;
  },
  set ncity(cit){
    this.city=cit;
  }
};

person.setName=function(){
  return 'Shubham'
}

console.log(person.setName)
// person.ncity='Sultanpur'
// console.log(person.secit)
// console.log(person.ncity)
// console.log(person.city)
// const myArray = Object.values(person);
// person.fullname=person.fullname.toString();
// //console.log(myArray)
// // o/p- [ 'John', 30, 'New York' ]
// const objstr = JSON.stringify(person);
// console.log(objstr)
//console.log(person)

const arr=[1,2,3,4]
console.log(JSON.stringify(arr))
function ma(){
  return 'Shubham'
}

console.log(ma.toString())