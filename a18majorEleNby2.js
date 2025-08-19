let arr = [2,2,1,1,2,2,3];
let freq = {}
for(let ele of arr){
    freq[ele] = (freq[ele]||0)+1;
}
for(let n in freq){
    if (freq[n] > arr.length/2) {
        console.log(n)
    }
}