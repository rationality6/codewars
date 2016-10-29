const generateRange = (...args) => {
  let [a, b, c] = args
  let result = []
  for (let i = a; i <= b; i += c) {
    result = result.concat(i)
  }
  return result
}

console.log(generateRange(2, 10, 2));
  // , [2,4,6,8,10]);
