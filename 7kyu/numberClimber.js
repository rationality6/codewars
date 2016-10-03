// const climb = n => {
//   let res = [n];
//   while (n > 1) {
//     n = Math.floor(n / 2);
//     res.push(n)
//   }
//   return res.reverse();
// }
// console.log(climb(10));
// console.log(climb(4));


const climb = n => {
  let temp = []
  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    temp.unshift(i);
  }
  return temp;
}

console.log(climb(10));
console.log(climb(4));
