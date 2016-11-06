// const squareSum = numbers => {
//   return numbers.map(a=>{
//     return Math.pow(a,a)
//   }).reduce((x,y)=>x+y)
// }
//
// console.log(squareSum([1,2,2]));

const squareSum = numbers => {
  return numbers.reduce((sum, n) => {
    return (n*n) + sum;
  }, 0)
}

console.log(squareSum([1,2,2]));
