let str = "swiss";
let freq = {};
for (let ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}
for (let ch of str) {
  if (freq[ch] === 1) {
    console.log("First non-repeating:", ch);
    break;
  }
}
