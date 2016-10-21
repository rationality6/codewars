// const fib = n => {
//   let a = 1, b = 0, arr = [], temp
//
//   while (n >= 0) {
//     temp = a
//     a = a + b
//     b = temp
//     arr = arr.concat(b)
//     n--
//   }
//   return arr
// }
//
// console.log(fib(9));


// const fibo = (num) => {
//   if (num <=1){
//     return 1
//   }
//   return fibo(num-1) + fibo(num-2)
// }
//
// console.log(fibo(5));


const fibo = n => {
  if (n === 2) {
    return [1, 1];
  } else {
    var seq = fibo(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2])
    return seq;
  }
}

console.log(fibo(10));



function fibonacci(n) {
  if (n == 1) return [1]
  if (n == 2) return [1, 1]

  const [first, second, ...rest] = fibonacci(n-1)
  return [...rest, second, first, first + second]
}

console.log(fibonacci(12));
