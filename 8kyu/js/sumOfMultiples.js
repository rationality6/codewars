const sumMul = (n, m) => {
  if (n >= m) return "INVALID";

  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}
