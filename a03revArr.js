// using in built fun
let arr = [1, 2, 3, 4, 5];
arr.reverse();
// console.log(arr); 

// without using inbuilt func
let array = [1, 2, 3, 4, 5];
let st = 0;
let end = array.length - 1;
while (st < end) {
  let temp = array[st];
  array[st] = array[end];
  array[end] = temp;
  st++;
  end--;
}
console.log(array);
