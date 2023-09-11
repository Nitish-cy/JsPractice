// // import { createStore, applyMiddleware, combineReducers } from 'redux';
// // import logger from 'redux-logger';
// // import thunk from 'redux-thunk';
// // import axios from 'axios';

// // //constants
// // const inc='increment';
// // const dec='decrement';


// // const store = createStore(
// //     combineReducers({
// //         account:accountReducer
// //     })
// //     ,
// //     applyMiddleware(logger.default, thunk.default)
// // );

// // // useEffect(()=>{

// // // },[])

// // ///

// //Js practice
// const arr=[10,20,30]
// // const m=function maxNum(){
// // const max=0;
// // forEach(let a in arr){
// // if(max<a)
// //     max=a;
// // }
// // return max;
// // }
// // console.log(max)

// function maxNum(arr){
//     return Math.max(...arr);
// }

// const max=maxNum(arr);
// console.log(max);

// //palindrome

// let str ='ATTA';

// function palin(str){
//     let st='';
//     for(let i=str.length-1;i>=0;i--)
//     {
//         st=st+str.charAt(i);
//         //console.log(st);
//     }
//     if(str===st)
//         return 'Palindrome'
//     else
//         return 'Not Palindrome'
// }
// console.log(palin(str));

//3. 
//Q2: Given a string, reverse each word in the sentence
let st='Mishra Nitish'
let arr=[];
arr=st.split(' ')
console.log(arr)
arr.forEach((str)=>{
return rev(str)
})

function rev(str){
let str='';
for(let i=str.length-1;i>=0;i++)
{
    str=str+charAt(i);
}
}
