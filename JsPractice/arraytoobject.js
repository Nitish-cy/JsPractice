

const arr=['a','b','c','d']

let ans=arr.reduce((acc,curr,i)=>({...acc,[i]:curr}),{})
console.log(ans)

const obj={}
for(let i=0;i<arr.length;i++){
    obj[i]=arr[i];
}
console.log(obj)