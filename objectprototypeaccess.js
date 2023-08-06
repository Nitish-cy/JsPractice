var obj={};
var proto=Object.getPrototypeOf(obj);
console.log(proto==Object.prototype);


function Proto(){
    this.name="Nitish";
    this.lastname="Mishra";
}

// Proto.prototype.display=function(){
//     console.log("hi Learner");
// };

Proto.prototype={
    disp:function(){
        console.log("Hello Nitish");
    },
    clear:function(){
        console.log("Hurry");
    }
}

var obj1=new Proto();
var obj2=new Proto();

// obj1.display();
// obj2.display();
obj1.disp();
obj2.disp();
obj1.clear();
obj2.clear();



