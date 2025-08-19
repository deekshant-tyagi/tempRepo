let arr = [1, 2, 4, 5], n = 5;
let sum = 0
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum)
// expected sum using let expected = (n * (n + 1)) / 2;
// 👉 Ye formula hai 1+2+3+…+n ka (Natural Numbers ka sum).
let expSum = (n*(n+1)/2);
console.log(expSum)
console.log("Missing No - ",expSum-sum)