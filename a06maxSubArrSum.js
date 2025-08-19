// Kadane’s Algorithm
// [4, -1, 2, 1] → sum = 6 ✅
let arr = [-2,1,-3,4,-1,2,1,-5,4];
let maxSum = arr[0];
let currSum = arr[0];
for(let i=1; i<arr.length; i++){
    currSum = Math.max(arr[i],currSum+arr[i]);
    maxSum = Math.max(currSum,maxSum)
}
console.log(maxSum)
