// Number
// String
// Boolean
// null
// undefined
// symbol - basically used for uniqueness 

// Object
// Array

//Operations
// console.log(1+ "1");
// console.log(1+ +"1");
// console.log(1 + 1 + "1");
// console.log(+"1" + 1 + +"1");
//o/p - 11 ,2 ,21,3
// console.log(+true); o/p=1

//prefix and post fix

// for(let i=0;i<5;i++)
// {
//    // console.log(i);
//     console.log(i++);
// }
// //o/p - 0,2,4
// for(let i=0;i<5;++i)
// {
//     //console.log(i);
//     console.log(++i);
// }
//o/p - 1,3,5

// //comparision
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(null<=0);
// //o/p -:false,false,true,true
// console.log(undefined>0);
// console.log(undefined<0);
// console.log(undefined>=0);
//o/p-: false,false,false

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//*&*************************
// Memory 
// there are two types of memory
//Stack - stores primitive data types value (copy) and Heap - uses non-primitive data types reference

// let name='Mishra Nitish'

// let name2=name;
// name2='Shubham'

// console.log(name);
// console.log(name2);
// o/p- Mishra Nitish, Shubham - bcz pimitive types shares copy of values not resference

//Heap- 
// let mishra={
//     name:'Nitish',
//     add:'Sultanpur'
// }

// let mishra1=mishra
// console.log(mishra.name);
// console.log(mishra1.name);
// //o/p- Nitish,Nitish

// mishra1.name='Shubham'
// //due to reference sharing
// console.log(mishra.name);
// console.log(mishra1.name);
// o/p- Shubham,Shubham - impacted on original value

//String 
// String interpolation
// let name='Mishra Nitish'
// const count=50;

// console.log(`My name is ${name} and My count is ${count}`);

//String Methods
const name =new String('Nitish Mishra');

// console.log(name.charAt(3));
// console.log(name.indexOf('M'));
// console.log(name.substring(0,3));
// o/p- i,7,Nit
// substring can't take negative index
//we can use negative values with slice
//console.log(name.slice(-8,4));

//Splice

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

//Replace - first find and then replace
name.replace('Nitish' , 'Shubham');
console.log(name)
