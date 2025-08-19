//unsing inbuilt fun
let arr = [1,2,2,3,3,3,4,5,5];
let freq = {};
for(let ele of arr){
    freq[ele] = (freq[ele]||0)+1;
}
// console.log(freq)

// without inbuilt func
let newFreq = {};
for(let i=0; i<arr.length; i++){
    let val = arr[i];
    if (newFreq[val]) {
        newFreq[val]++;
    }else{
        newFreq[val] = 1;
    }
}
console.log(newFreq);