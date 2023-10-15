// function myDisplayer(some) {
//     console.log(some)
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

//display only possitive numbers
// const numbers=[10,9,-5,99,-5,66,-7,0]
// const remNeg=remNegative(numbers,(x)=>x>0);
// console.log(remNeg)
// function remNegative(arr,callback){
//     const newArr=[];
//     for(const i of arr){
//         if(callback(i)){
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }

function demo(name){
    console.log(name)
}

setInterval(demo,3000,'Nitish')