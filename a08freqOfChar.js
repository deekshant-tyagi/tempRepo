let str = "programming";
let freq = {};
for(let ch of str){
    freq[ch] = (freq[ch]||0)+1;
}
console.log(freq);


// let freq = {};
// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (freq[ch]) freq[ch]++;
//   else freq[ch] = 1;
// }
// console.log(freq);