// using inbuilt func
// find second smallest and second largest element in array
let arr = [5, 2, 9, 1, 7, 2, 4, 46, 6, 43];
arr.sort((a,b)=> a-b);
let smEle = arr[1];
let maxEle = arr[arr.length-2];
console.log("Second Smallest Ele - ",smEle)
console.log("Second largest Ele - ",maxEle)


// without using inbuilt func
let newArr = [5, 2, 9, 1, 7, 2, 4, 46, 6, 43];
let n = newArr.length;
let sm = Infinity;
let secSm = Infinity;
let max = -Infinity;
let secMax = -Infinity;
for(let i=0; i<n; i++){
    if(newArr[i]<sm){
        secSm = sm;
        sm = newArr[i];
    }else if (newArr[i]<secSm && newArr[i]!=sm) {
        secSm = newArr[i];
    }
}
console.log("Second Smallest Ele is - ",secSm)
// for largest
for(let i=0; i<n; i++){
    if(newArr[i]>max){
        secMax = max;
        max = newArr[i];
    }else if (newArr[i]>secMax && newArr[i]!=max) {
        secMax = newArr[i];
    }
}
console.log("Second Largest Ele is - ",secMax)