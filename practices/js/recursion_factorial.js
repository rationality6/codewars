const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

const factorial = n => n < 1 ? 1 : n * factorial(n - 1)

console.log(factorial(5));
