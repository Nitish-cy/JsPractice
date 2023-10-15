class parenCLass{
    constructor(name,lastname)
    {
        this.name=name;
        this.lastname=lastname;
    }
    getFullName(){
        console.log(`Full Name is - : ${this.name + " " + this.lastname}`)
    }
}

class childClass extends parenCLass{
 constructor(name,lastName,email,address){
    super(name,lastName);
    this.email=email;
    this.address=address;
 }
 getInfo(){
    console.log(`User info is - : ${this.name + " : " +this.lastname + " : " + this.email +" : " + this.address}`)
 }
}

const obj1=new childClass('Nitish','Mishra','mishra@gmail.com','Uttar Pradesh')
console.log(obj1)
obj1.getInfo();
obj1.getFullName();