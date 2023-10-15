//Object based inheritance

const { Writable } = require("stream");

var project1={
    name:"Road Project",
    display:function(){
        console.log(this.name);
    }
}

var project2=Object.create(project1,{
    name:{
        configurable:true,
        enumerable:true,
        Writable:true,
        value:"Bridge Work"
    }

});

project1.display();
project2.display();


//Constructor inheritance 

function Doctor(name){
    this.name=name;
}
function Surgeon(name,type){
    this.name=name;
    this.type=type;
}

Doctor.prototype.treat=function(){
    return "treated";
}

Doctor.prototype.toString=function(){
    return "[Doctor " + this.name + "]";
}

Surgeon.prototype=new Doctor();
Surgeon.prototype.constructor=Surgeon;

Surgeon.prototype.toString=function(){
    return "[Surgeon "+this.name+"Type "+ this.type+"]";
}

var doctor=new Doctor();
var surgeon=new Surgeon("Bob","Dental");

console.log(doctor.treat());
console.log(surgeon.treat());
