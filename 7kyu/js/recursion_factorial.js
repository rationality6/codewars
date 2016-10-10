// const factorial = n => {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n-1)
// };


const factorial = n => n > 1 ? n * factorial(n - 1) : 1;

a = factorial(0) //1
b = factorial(1) //1
c = factorial(2) //2
d = factorial(3) //6

console.log(d);
