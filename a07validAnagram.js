let a = "listen", b = "silent";
let val1 = a.split("").sort().join("");
let val2 = b.split("").sort().join("");
if(val1===val2){
    // console.log("Valid Anagram")
}else{
    // console.log("Not valid")
}

// without inbuilt
if (a.length !== b.length) {
    console.log(false)
}else{
    let freq = {};
    for(let ch of a){
        freq[ch] = (freq[ch]||0)+1;
    }
    for(let ch of b){
        if (!freq[ch]) {
            console.log(false)
            return;
        }
        freq[ch]--;
    }
    console.log(freq)
    console.log(true);
}