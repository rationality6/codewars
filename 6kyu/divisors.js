const divisors = integer => {
  let result = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      result = result.concat(i)
    }
  }
  if (result.length > 0) {
    return result
  } else {
    return `${integer} is prime`
  }
};


// const divisors = integer => {
//   let res = []
//   for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//   return res.length ? res : integer + ' is prime'
// };

let a = divisors(15)
console.log(a);
// [3, 5]
let b = divisors(12)
console.log(b);
// [2, 3, 4, 6]);
let c = divisors(13)
console.log(c);
// "13 is prime"
