let iter = [1,2,3]
let iter2 = [...iter,4,5,6]
console.log(iter);
console.log(iter2);



const myFunction = (v, w, x, y, z) => {
  console.log(v,w,x,y,z);
}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);


let arr = [1,2,3];
console.log(arr);
let arr2 = [...arr]; // like arr.slice()
console.log(arr2);
arr2.push(4); // arr2 becomes [1,2,3,4], arr stays unaffected
console.log(arr);
console.log(arr2);
