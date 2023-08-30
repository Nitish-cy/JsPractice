const nums=[1,2,3,4,5,6,7,8,9,10]

// const val=nums.filter((items)=>{
// return items>4
// })

// console.log(val)

// const ans=nums.map((items)=>{
// return items+10
// })
// const newArr=[];
// nums.forEach((item)=>{
// newArr.push(item+10);
// })
// console.log(newArr)

// //chaining
// const ans=nums.map((item)=>{
// return item*10;
// })
// .map((item)=>{
// return item + 1;
// })
// .filter((item)=>{
// return item>=40
// })

// console.log(ans)

const ans=nums.reduce((acc,curr)=>{
    return acc+curr;
},0)

console.log(ans)

