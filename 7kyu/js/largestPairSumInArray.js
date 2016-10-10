const largestPairSum = numbers => {
  numbers.sort((a, b) => (a - b) * -1)
  return numbers[0] + numbers[1]
}

console.log(largestPairSum([-10, -8, -16, -18, -19]));
console.log(largestPairSum([48, 32, 11, 3]));
// -18
