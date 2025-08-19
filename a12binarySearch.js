// let arr = [1,2,3,4,5,6,7,8,9];
// console.log("Found at:", arr.indexOf(7));




let arr = [1,2,3,4,5,6,7,8,9];
let target = 7
let ans = -1;
let start = 0;
let end = arr.length-1;
while (start<=end) {
    let mid = Math.floor((start+end)/2);
    if (arr[mid]===target) {
        ans = mid;
        break;
    }else if (arr[mid]<target) {
        start = mid+1;
    }else {
        end = mid-1;
    }
}
if (ans === -1) {
    console.log("Element not found")
}
console.log("Element found - ",ans)

