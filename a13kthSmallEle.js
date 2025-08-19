// The kth smallest element means the element which would appear in the kth position if the array was sorted in ascending order.
let arr = [7,10,4,3,20,15];
arr.sort((a, b) => a - b);
let k = 3;
console.log("kth smallest:", arr[k-1]);
