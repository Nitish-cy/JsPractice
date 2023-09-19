const obj={
    name:"Nitish",
    add:"Ramgarh Lambhua Sultanpur",
    getName:function(){
        console.log(`Full Name is : - ${this.name + " " + this.add}`)
    }
}
//Addes new method in parent Object using Prototype so that we can access this method from any child object 
//because Object is parent of every object and everything in Js is an object 
Object.prototype.getAddress=function(){
    console.log(`Address is ${this.add}`)
}

obj.getAddress();

//INHERITANCE

const User={
    name:"Nitish",
    lastName:"Mishra"
}

const teacher={
    areYou:true
}

const TeachingSupport={
    available:true
}

//if wants to combine or access the property of another object inside other object then we can 
// use __proto__ keyword
//ex-
const TaSupporrt={
    makeAssignment:'Js Assignments',
    fullTime:true,
   // __proto__:TeachingSupport //old syntax
}

console.log(TaSupporrt.available)

//Modern Syntax
Object.setPrototypeOf(TaSupporrt,TeachingSupport)
console.log(TaSupporrt.available)