let obj={
    name:'Nitish',
    lastName:'Mishra',
    address:'Ramgarh',
    getFullName:function(dis,state){
        console.log('Full Name is : ' + this.name +' ' + this .lastName + ' dist is '+ dis + ' state is ' + state)
    }
}

let obj2={
    name:"Shubham",
    lastName:"Mishra",
}
//function borrowing
// obj.getFullName.call(obj2);
// obj.getFullName.apply(obj2);

obj.getFullName.call(obj2,'Sultanpur','Uttar Pradesh');
obj.getFullName.apply(obj2,['Sultanpur','Uttar Pradesh']);
let fullName=obj.getFullName.bind(obj2,'Prayagraj','Uttar Pradesh');
console.log(fullName);
fullName()

// obj.getFullName();
//ther is no diff between call and apply -- but diff is if we want to pass arguments then we will pass - comma seperated but in apply we 
//can pass as an array