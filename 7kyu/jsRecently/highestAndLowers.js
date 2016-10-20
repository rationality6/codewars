// const highAndLow = numbers => {
//   let numberList = numbers.split(' ')
//   let max = Math.max(...numberList.map(a=>+a))
//   let min = Math.min(...numberList.map(a=>+a))
//   return `${max} ${min}`
// }

const highAndLow = numbers => {
  let numberSplited = numbers.split(' ').map(Number);
  return Math.max.apply(0, numberSplited) + ' ' + Math.min.apply(0, numberSplited);
}

console.log(highAndLow("1 2 3 4 5"));
// return "5 1"

// highAndLow("1 2 -3 4 5");
// return "5 -3"

// highAndLow("1 9 3 4 -5");
// return "9 -5"s
