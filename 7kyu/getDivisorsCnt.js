// const getDivisorsCnt = (n) => {
//   let result = []
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       result.push(i)
//     }
//   }
//   return result.length
// }

const getDivisorsCnt = (n) => {
  let count = 0;
  for (let i = n; i > 0; i--) {
    if (n % i === 0) count++;
  }
  return count;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
// getDivisorsCnt(11)
// getDivisorsCnt(54)
