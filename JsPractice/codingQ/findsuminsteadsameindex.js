
// Q-: [2,7,11,4,-2]
// O/P - [20,15,11,18,24]
let arr=[2,7,11,4,-2]
function sumNums(arr){
let newArr=[]
let sum;
for(let i=0;i<arr.length;i++){
    sum=0;
    for(let j=0;j<arr.length;j++){
        if(i==j){
            continue;
        }
        sum+=arr[j]
       // console.log(sum)
    }
    newArr.push(sum)
}
return newArr;
}

console.log(sumNums(arr))
