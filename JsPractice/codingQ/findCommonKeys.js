var singleNumber = function (nums) {
  //     const map={};
  //     let count =0
  //     for(let i=0;i<nums.length;i++){
  //         if(map.has(nums[i])){
  //             map.set(nums[i],map.get(nums[i])+1)
  //         }
  //         else
  //         {
  //             map.set(nums[i],1)
  //         }

  // }

  //     for(let [key,val] of map){
  //         console.log(key + "   "+ val)
  //         if(val==1)
  //             count=key
  //     }
  //     return count
  let count = 0;
  let arr = nums.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < nums.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count = arr[i];
      break;
    } else {
      i = i + 2;
    }
  }
  return count;
};
nums = [1, 3, 1, -1, 3];
console.log(singleNumber(nums));

// Find Common Keys from Given Two Objects

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { d: 10, e: 12 };

let ans = {};
function findKey(input1, input2) {
  for (let i in input1) {
    if (input1[i] == input2[i]) {
      ans[i] = input1[i];
    }
  }
  return ans;
}

console.log(findKey(input1,input2))