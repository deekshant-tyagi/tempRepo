//using inbuilt func
let a = [1,2,3,4], b = [3,4,5,6];
let inter = a.filter( x => (
    b.includes(x)
))
console.log(inter)

// without inbuilt fun
let interSec = [];
for(let ele of a){
    for(let val of b){
        if (ele===val) {
            interSec.push(ele);
            break;
        }
    }
}
console.log(interSec)