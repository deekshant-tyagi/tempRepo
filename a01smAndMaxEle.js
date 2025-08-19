// by using inbuilt func
let arr = [5, 2, 9, 1, 7];
let max = Math.max(...arr);
// console.log("Max element is - ",max)
let min = Math.min(...arr);
// console.log("Min element is - ",min)

// without using inbuilt func
let newArr = [5, 2, 9, 1, 7, 2, 4, 46, 6, 43];
let maxEle =  newArr[0];
let minEle = newArr[0];
for(let i=1; i<newArr.length; i++){
    if (newArr[i]>maxEle) {
        maxEle = newArr[i];
    }
    if (newArr[i]<minEle) {
        minEle = newArr[i];
    }
}
console.log(maxEle)
console.log(minEle)