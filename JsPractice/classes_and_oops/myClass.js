class mycls{
    constructor(name,lastname,add)
    {
        this.name=name;
        this.lastname=lastname;
        this.add=add;
    }
    getFullName(){
        console.log(`Full name is - ${this.name + "  " + this.lastname}`)
    }
}
const obj1=new mycls('Nitish','Mishra','Uttar Pradesh')
console.log(obj1)
obj1.getFullName();

// Same - using function

function createUser(name,lastname,add)
{
    this.name=name;
    this.lastname=lastname;
    this.add=add;
}
createUser.prototype.getFullName=function(){
    console.log(`Full name is - ${this.name + "  " + this.lastname}`)
}

const obj2=new mycls('Nitish','Mishra','Uttar Pradesh')
console.log(obj2)
obj1.getFullName();