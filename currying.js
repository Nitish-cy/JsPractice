//Currying in jS
//1 usimng bind method

let multiply=function(x,y)
{
    console.log(x*y);
}

let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);

//2 using closure
let multiplythree=function(x)
{
    return function(y)
    {
        console.log(x*y);
    }
}

let multiplyBythree=multiplythree(3);
multiplyBythree(10);