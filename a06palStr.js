// using inbuilt func
let str = "madam";
let pal = str.split("").reverse().join("");
if (str===pal) {
    // console.log("String is palindrome")
}else{
    // console.log("Not Palindrome")
}

// without inbuilt
let st = 0;
let end = str.length-1;
let flag = true
while(st<end){
    if(str[st]!==str[end]){
        flag = false;
        break;
    }
    st++;
    end--;
}
console.log(flag)