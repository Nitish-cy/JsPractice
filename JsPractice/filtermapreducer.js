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

// const ans=nums.reduce((acc,curr)=>{
//     return acc+curr;
// },0)

// console.log(ans)

//Interview Questions
let students=[
    {name:'nitish',rollnumber:20,marks:20},
    {name:'ashu',rollnumber:21,marks:200},
    {name:'tiwari',rollnumber:22,marks:30},
    {name:'mishra',rollnumber:23,marks:40},
    {name:'shubham',rollnumber:24,marks:500},
]

//Q1- name in capital
for(let i in students){
    console.log(i)
    console.log(students[i].name.toUpperCase())
}
for(let i of students){
    console.log(i.name.toUpperCase())
    //console.log(students[i].name.toUpperCase())
}
let ans=students.map((val,i)=>val.name.toUpperCase())
console.log(ans)

//Q2-: return students who scored more than 60 marks
let ans2=students.filter((val,i)=>val.marks>60)
console.log(ans2)

//Q3 - return sum of marks
let ans3=students.reduce((acc,curr,i,arr)=>{
acc=acc+curr.marks
return acc
},0)
console.log(ans3)

//Q4 - return only names of students who scored more than 60
let ans4=students.filter((i)=>i.marks>60).map((i)=>i.name)
console.log(ans4)

//Q5- Return Total marks for students with marks greater than 60
//after 20 marks have been added to those who scored less than 60

let res5=students.map((val)=>{
    if(val.marks<60){
        val.marks+=20;
    }
    return val
}).filter((i)=>i.marks>=60).reduce((acc,curr)=>acc+=curr.marks,0)

console.log(res5)