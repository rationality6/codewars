// const powersOfTwo = n => {
//   let result = []
//   for (let i = 0; i <= n; i += 1) {
//     result = result.concat(Math.pow(2,i))
//   }
//   return result
// }

const powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));
