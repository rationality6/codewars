const multiply = (x, y) => {
  let result = 0;
  for (let i = 0; i < y; i += 1) {
    result += x
  }
  return result
}

console.log(multiply(4, 5));
