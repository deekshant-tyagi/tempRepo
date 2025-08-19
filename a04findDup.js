let arr = [1, 2, 3, 2, 4, 5, 1];
let set = new Set();
let dup = [];
for (let element of arr) {
  if (set.has(element)) {
    dup.push(element);
  } else {
    set.add(element);
  }
}
console.log(dup);
