const sum = (a, b) => a + b
Array.prototype.last = function (n = 1) { return this.slice(this.length - n) }

function fibonacci(n) {
  if (n == 1) return [1]
  if (n == 2) return [1, 1]

  const fib = fibonacci(n-1)
  return fib.concat(fib.last(2).reduce(sum))
}
