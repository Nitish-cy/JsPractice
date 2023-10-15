let object1={
    name:'Nitish',
    address:'Ramgarh',
    intro:function(){
        console.log('HI ' + this.name + ' from ' + this.address);
    }
}

object2={
    name:'Shubham'
}

object2.__proto__=object1 //for accessing the properties of object1

console.log(object2.__proto__);
console.log(object2.address);
console.log(object1.intro());
